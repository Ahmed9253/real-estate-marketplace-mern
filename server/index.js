import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// ========== Initialize Express app ==========
const app = express();

// ========== Middleware ==========
app.use(cors());
app.use(express.json());

// ========== Routes ==========
app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
