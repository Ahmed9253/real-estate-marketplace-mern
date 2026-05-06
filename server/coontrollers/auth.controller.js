import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return next(errorHandler(400, "Please fill all the required fields."));
  }

  try {
    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return next(errorHandler(409, "Username is already taken."));
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return next(errorHandler(409, "User already exists with this email."));
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Success response
    res.status(201).json({
      success: true,
      message: "User account created successfully!",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return next(errorHandler(400, "Please fill all the required fields."));
  }

  try {
    // Check if user exists
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid email or password."));
    }

    // Compare password
    const isMatch = await bcryptjs.compare(password, validUser.password);
    if (!isMatch) {
      return next(errorHandler(404, "Invalid email or password."));
    }

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // Set token in HTTP-only cookie and send response
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: "User signed in successfully!",
        user: {
          _id: validUser._id,
          username: validUser.username,
          email: validUser.email,
        },
      });
  } catch (error) {
    next(error);
  }
};
