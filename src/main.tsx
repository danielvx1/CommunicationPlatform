import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import {RedirectToSignIn, SignedOut, SignedIn, ClerkProvider} from '@clerk/clerk-react'
import {useNavigate, Routes, Route, BrowserRouter} from 'react-router-dom'
import RootLayout from './layouts/RootLayout.tsx'
import HomePage from './pages/HomePage.tsx';
import CreateServerModal from './components/modals/CreateServerModal.tsx';

// Clerk authentication
const ProtectedRoute = ({ children }: { children: React.ReactNode}) => {
  return (
    <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
    <RedirectToSignIn />
    </SignedOut>
    </>
  )
}

const RouterComponent= () => {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey = {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Routes>
        <Route path='' element={<RootLayout />}>
          <Route 
          index
          element={
            <ProtectedRoute>
              <CreateServerModal />
              <HomePage />
            </ProtectedRoute>
          }/>

        </Route>
      </Routes>

    </ClerkProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)

export default RouterComponent