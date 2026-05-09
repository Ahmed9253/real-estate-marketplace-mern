# MERN STACK Authentication Using Redux Toolkit

A full-stack MERN Authentication Demo built using:

- MongoDB
- Express.js
- React.js
- Node.js
- Redux Toolkit
- JWT Authentication
- Tailwind CSS
- Vite

This project demonstrates a complete authentication module including backend API integration, JWT-based authentication, protected routes, and Redux Toolkit state management. :contentReference[oaicite:0]{index=0}

---

# Repository

[GitHub Repository](https://github.com/Ahmed9253/MERN-stack-Authentication-using-Redux-toolkit?utm_source=chatgpt.com)

---

# Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Redux Toolkit State Management
- MongoDB Database Integration
- REST API Backend
- React + Vite Frontend
- Tailwind CSS Styling

---

# Tech Stack

## Client
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite

## Server
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

# Project Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   └── server.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Ahmed9253/MERN-stack-Authentication-using-Redux-toolkit.git
```

## Move Into Project Folder

```bash
cd MERN-stack-Authentication-using-Redux-toolkit
```

---

# Server Setup

## Navigate to Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Run Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

# Client Setup

## Navigate to Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Vite Proxy Configuration

This project uses Vite Proxy for API requests.

`vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
```

## Run Client

```bash
npm run dev
```

Client will run on:

```bash
http://localhost:5173
```

---

# Important Notice

This project currently uses:

```js
target: "http://localhost:5000"
```

inside the Vite proxy configuration.

If your backend is hosted on another server or deployed separately, make sure to update the target URL inside:

```bash
client/vite.config.js
```

Example:

```js
target: "https://your-backend-url.com"
```

---

# Authentication Flow

- User registers
- Password gets hashed using bcrypt
- JWT token generated after login
- Token stored and managed using Redux Toolkit
- Protected routes verify authentication state

JWT authentication and Redux-based auth flow are common patterns in MERN applications. :contentReference[oaicite:2]{index=2}

---

# Environment Variables

## Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

# Available Scripts

## Server

```bash
npm run dev
```

Runs backend server using nodemon.

## Client

```bash
npm run dev
```

Runs React frontend using Vite.

---

# Disclaimer

This project is publicly available for educational and development purposes.

Anyone is free to use, modify, distribute, or build upon this code however they like.

However, if this project is used illegally, maliciously, or inappropriately, **Muhammad Ahmed** will not be held responsible or accountable for any misuse of this project or its code.

Use responsibly.

---

# License

This project has no license.

---

# Author

Muhammad Ahmed

GitHub: [Ahmed9253 GitHub Profile](https://github.com/Ahmed9253?utm_source=chatgpt.com)

---
