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
   - If you see any npm dependencies underlined with red squiggly lines, manually install them. If you're not sure which packages are missing, feel free to ask me or consult ChatGPT for help.
7. **Start the development server**:
   - Run the following command to start the development server:
     ```bash
     npm run dev
     ```

---

### Troubleshooting

- If you encounter any issues during the setup, feel free to message me. Alternatively, you can try to debug the problem by referring to the error messages, and if needed, consult GPT or other resources for solutions.
