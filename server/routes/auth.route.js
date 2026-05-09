import express from "express";
import {
  signup,
  signin,
  signout,
  getUser,
  updateUser,
  deleteUser,
} from "../coontrollers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", verifyToken, signout);
router.get("/getuser", verifyToken, getUser);
router.put("/updateuser", verifyToken, updateUser);
router.delete("/deleteuser", verifyToken, deleteUser);

export default router;
