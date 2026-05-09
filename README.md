# 🔐 MERN Stack Authentication Using Redux Toolkit

A modern full-stack authentication system built with the MERN stack, featuring JWT authentication, protected routes, Redux Toolkit state management, and a clean React + Vite frontend.

This project demonstrates how to build a scalable and production-ready authentication workflow using modern web development technologies.

---

# 🚀 Live Features

* ✅ User Registration
* ✅ User Login
* ✅ Secure JWT Authentication
* ✅ Password Hashing with bcryptjs
* ✅ Protected Routes
* ✅ Persistent Authentication State
* ✅ Redux Toolkit State Management
* ✅ REST API Integration
* ✅ MongoDB Database Connectivity
* ✅ Responsive UI with Tailwind CSS
* ✅ React + Vite Frontend Setup

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* Vite
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv

---

# 📂 Project Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚡ Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ahmed9253/MERN-stack-Authentication-using-Redux-toolkit.git
```

## 2️⃣ Navigate to the Project

```bash
cd MERN-stack-Authentication-using-Redux-toolkit
```

---

# 🔧 Backend Setup

## Move to Server Directory

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

## Start the Backend Server

```bash
npm run dev
```

Server will start on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

## Move to Client Directory

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

---

# ⚙️ Vite Proxy Configuration

To connect the frontend with the backend during development, configure the Vite proxy.

## `vite.config.js`

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
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# 🔐 Authentication Workflow

This project follows a secure JWT-based authentication flow:

1. User registers an account
2. Password is hashed using `bcryptjs`
3. User logs in with credentials
4. Server generates a JWT token
5. Authentication state is managed using Redux Toolkit
6. Protected routes verify user authentication
7. Unauthorized users are restricted from accessing secured pages

---

# 🧠 Redux Toolkit Integration

Redux Toolkit is used for:

* Managing authentication state
* Storing user session data
* Handling login/logout actions
* Managing loading and error states
* Simplifying async API requests

---

# 🌐 API Endpoints

## Authentication Routes

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register User    |
| POST   | `/api/auth/login`    | Login User       |
| GET    | `/api/auth/profile`  | Get User Profile |

---

# 🔒 Protected Routes

Protected routes are implemented to ensure only authenticated users can access restricted pages.

Example use cases:

* Dashboard
* Profile Page
* Private User Data

---

# 📦 Environment Variables

## Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

---

# 📜 Available Scripts

## Backend

```bash
npm run dev
```

Runs the backend server using Nodemon.

## Frontend

```bash
npm run dev
```

Runs the React application using Vite.

---

# 🚀 Deployment Notes

If deploying the frontend and backend separately, update the API base URL inside:

```bash
client/vite.config.js
```

Example:

```js
target: "https://your-backend-url.com"
```

For production deployment, platforms like these work well:

* Frontend → Vercel / Netlify
* Backend → Render / Railway / VPS
* Database → MongoDB Atlas

---

# 📚 Learning Objectives

This project is useful for learning:

* MERN Stack Architecture
* JWT Authentication
* Redux Toolkit
* REST APIs
* Authentication Middleware
* Protected Routes
* Full-Stack Application Structure
* State Management in React

---

# ⚠️ Disclaimer

This project is created for educational and development purposes.

You are free to use, modify, and distribute this project. However, the author is not responsible for any misuse, illegal activity, or damages caused by this code.

Use responsibly.

---

# 📄 License

This project currently has no license.

You may consider adding an open-source license such as:

* MIT License
* Apache 2.0
* GPL

---

# 👨‍💻 Author

### Muhammad Ahmed

GitHub Profile:
[Ahmed9253 GitHub Profile](https://github.com/Ahmed9253?utm_source=chatgpt.com)

Repository:
[MERN Stack Authentication Using Redux Toolkit Repository](https://github.com/Ahmed9253/MERN-stack-Authentication-using-Redux-toolkit?utm_source=chatgpt.com)
