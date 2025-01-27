# > Hush 🏛️
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=Cloudflare&logoColor=white)](#)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white)](#)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](#)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)

---
Hush is a web application developed using React, Next.js, and TypeScript, featuring a modern, dark-themed user interface styled with Tailwind CSS and ShadCN components. It employs Drizzle ORM for seamless PostgreSQL database interactions and integrates Auth.js for secure authentication. Real-time notifications are managed through Knock, while Cloudflare handles image hosting. The application is containerized using Docker for consistent deployment across environments.

## Tech Stack

Hush utilizes a modern set of technologies to deliver a smooth and efficient development experience. Below are the main tools and frameworks used:

### Frontend:
- **React**: A popular JavaScript library for building user interfaces.
- **Next.js**: A React framework for building static and server-rendered applications with easy routing and server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework for fast, responsive, and modern design.
- **ShadCN**: A UI component library to help you build accessible and customizable user interfaces quickly.
- **TypeScript**: A superset of JavaScript that adds static types, improving code quality and maintainability.

### Backend & Database:
- **Node.js**: A runtime for executing JavaScript code server-side.
- **PostgreSQL**: A powerful, open-source relational database for storing structured data.
- **Drizzle ORM**: A lightweight ORM for interacting with the PostgreSQL database in a type-safe manner.

### Authentication & Notifications:
- **Auth.js**: A modern authentication library that integrates with various identity providers to handle authentication seamlessly.
- **Knock**: A real-time notification service for sending notifications to users.

### Hosting & Storage:
- **Cloudflare**: A global CDN and security service, also used here for hosting images, providing fast access and security.

### Containerization:
- **Docker**: A platform for developing, shipping, and running applications in containers, ensuring consistency across environments.

---
# Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/a9d677c8-b5b7-4ccd-97f8-6b522d0bf8f9" alt="Home" width="41%">
  <img src="https://github.com/user-attachments/assets/91c6ac5f-a1f1-4714-9e54-a22a943b80b6" alt="Bids" width="50%">
  <img src="https://github.com/user-attachments/assets/32a6d517-9292-4097-a133-2fe7be4672ba" alt="Post" width="50%">
</p>

---
# Local Development Setup
Follow the steps below to set up the project on your local machine for development:

## Prerequisites
- Ensure you have **Node.js** installed.
- Install **Docker Desktop** if you don't have it yet.

## Setup Instructions
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Create a `.env` file**:
   - You’ll need to create a `.env` file for the project configuration. Message me for the required environment variables.

3. **Configure Docker**:
   - Make sure **Docker Desktop** is running.
   - In Docker Desktop, go to the **Volumes** section and stop any unnecessary programs that are consuming resources.
4. **Start Docker containers**:
   - Open a terminal in the root project folder and run the following command:
     ```bash
     docker-compose up
     ```
   - This will create and start the necessary Docker containers for the project.
5. **Push schema updates**:
   - In the `schema.ts` file, run the following command in the console to apply schema changes:
     ```bash
     drizzle-kit push --config=drizzle.config.ts
     ```
   - (This step might not always be necessary, but it's good to run it if you're unsure.)
6. **Fix missing npm dependencies**:
   - If you see any npm dependencies underlined with red squiggly lines, manually install them. If you're not sure which packages are missing, feel free to ask me.
7. **Start the development server**:
   - Run the following command to start the development server:
     ```bash
     npm run dev
     ```

---

### Troubleshooting

- If you encounter any issues during the setup, feel free to message me. Alternatively, you can try to debug the problem by referring to the error messages, and if needed, ask GPT or other resources for solutions.
