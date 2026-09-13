import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const router = express.Router();
// Create client but we don't strictly need to pass the ID here if we pass audience in verifyIdToken
const client = new OAuth2Client(); 

// 1. Google Authentication Route
router.post('/google', async (req, res) => {
  try {
    const { token } = req.body;
    
    // Verify Google Token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "447971561672-r1v1b060lgp85pqsqve4aon50ceg0c18.apps.googleusercontent.com" 
    });
    
    // Extract name, email, and picture (DP) from Google
    const { name, email, picture } = ticket.getPayload();

    // Check if user already exists in MongoDB
    let user = await User.findOne({ email });

    // If not, create a new user and save their Google DP
    if (!user) {
      user = new User({
        name,
        email,
        picture, // Saving the Google Display Picture
        password: '' // No password needed for Google Auth
      });
      await user.save();
    } else if (!user.picture && picture) {
      // If user exists but has no picture, update their document with the Google DP
      user.picture = picture;
      await user.save();
    }

    res.status(200).json({ message: "Google Login successful", user });
  } catch (error) {
    console.error("Google Auth Error in Backend:", error);
    res.status(500).json({ error: "Google authentication failed", details: error.message });
  }
});

// 2. Standard Email/Password Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Basic password check (assuming plain text based on previous context, update if using bcrypt)
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal server error during login" });
  }
});

// 3. Optional: Standard Registration Route (Keep if you have it)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "Registration successful", user });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Internal server error during registration" });
  }
});

export default router;