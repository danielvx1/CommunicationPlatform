import { setContext } from "@apollo/client/link/context"
import { createUploadLink } from "apollo-upload-client"
import { onError } from "@apollo/client/link/error"
import { InMemoryCache } from "@apollo/client/cache"
import { ApolloClient, ApolloLink, split } from "@apollo/client/core"
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"
import { getMainDefinition } from "@apollo/client/utilities"

loadDevMessages()
loadErrorMessages()

const getToken = (name: string) => {
  const value = `; ${document.cookie}`
  console.log(document.cookie)
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift()
}
// auth link
const authLink = setContext(async (_, { headers }) => {
  const token = getToken("__session")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

// upload link
const uploadLink = createUploadLink({
  uri: "http://localhost:3000/graphql",
  headers: {
    "apollo-require-preflight": "true",
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    })

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(uploadLink)),
  cache,
})
export default client