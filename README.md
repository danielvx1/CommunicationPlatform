# Communication Platform
Discord Clone
A full-stack, real-time chat application inspired by Discord. It leverages a modern TypeScript-based tech stack for scalability, type safety, and developer productivity.

## Tech Stack
This project is built entirely in TypeScript, from frontend to backend.

## Frontend
- React.js – Building dynamic UI components.

- Mantine – Elegant and accessible UI component library.

- Apollo Client – Manages GraphQL data; synchronizes frontend with backend (functions similarly to a global state manager, but with live data).

- GraphQL Code Generator – Automatically generates TypeScript types from the backend GraphQL schema. It ensures end-to-end type safety across queries, mutations, and subscriptions.

- Clerk – Handles user authentication, session management, and protected routing.

- Zustand – Lightweight state management for UI-specific state (e.g., modals, theme, etc.).

## Backend
- Nest.js – Scalable and modular backend framework built with TypeScript.

- Prisma – Type-safe ORM used for interacting with the PostgreSQL database.

- GraphQL (Apollo Server) – Enables typed API communication, improving developer experience with autocompletion and error prevention.

- Docker – Runs the PostgreSQL and Redis databases in isolated containers, simplifying setup and dependency management.