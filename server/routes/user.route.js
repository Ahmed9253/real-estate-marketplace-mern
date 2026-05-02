import express from "express";
import { signup } from "../coontrollers/user.contoller.js";

const router = express.Router();

router.get("/signup", signup);

export default router;
