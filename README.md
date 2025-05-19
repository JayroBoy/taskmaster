# Task Management Application

This is a simple task management application built with Next.js (v15) and tRPC. The application allows users to create, read, update, and delete tasks, providing a straightforward interface for managing tasks.

## Project Structure

```
taskmaster
├── src
│   ├── app
│   │   ├── page.tsx               # Main entry point for the application
│   │   ├── layout.tsx             # Layout structure for the application
│   │   ├── tasks
│   │   │   ├── page.tsx           # Displays the list of tasks
│   │   │   ├── create
│   │   │   │   └── page.tsx       # Form for creating a new task
│   │   │   └── [id]
│   │   │       └── edit
│   │   │           └── page.tsx   # Form for editing an existing task
│   │   └── globals.css             # Global CSS styles
│   ├── components
│   │   ├── TaskList.tsx            # Renders a list of tasks
│   │   ├── TaskCard.tsx            # Represents an individual task
│   │   ├── TaskForm.tsx            # Handles task creation and editing forms
│   │   └── ui
│   │       ├── Button.tsx          # Reusable button component
│   │       ├── Input.tsx           # Reusable input field component
│   │       └── Alert.tsx           # Displays alert messages
│   ├── server
│   │   ├── db.ts                   # In-memory database management
│   │   ├── trpc.ts                 # tRPC server setup
│   │   └── routers
│   │       ├── index.ts            # Main router
│   │       └── taskRouter.ts       # Task-related API endpoints
│   ├── types
│   │   └── index.ts                # TypeScript types and interfaces
│   └── utils
│       └── helpers.ts              # Utility functions
├── public                           # Static assets
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                     # Project dependencies and scripts
└── README.md                       # Project documentation
```

## Getting Started

To get started with the application, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd taskmaster
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Create, read, update, and delete tasks.
- User-friendly forms for task management.
- Feedback messages for success and error states.
- Responsive design for a seamless user experience.

## Extras

- **Infinite Scroll:** The task listing page supports incremental loading of tasks as the user scrolls.
- **Documentation:** Inline comments and a structured README provide clarity on the codebase and functionality.

## License

This project is licensed under GPL 3.0. See the LICENSE file for more details.