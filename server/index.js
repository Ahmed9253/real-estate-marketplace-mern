import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
dotenv.config();

// ========== Initialize Express app ==========
const app = express();

// ========== Routes ==========
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);

// ========== Connect to MongoDB and start the server ==========
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// ========== Middleware ==========
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; //for internal server error.
  const message = err.message || "internal server error.";
  res.status(statusCode).json({ succces: false, statusCode, message });
});
