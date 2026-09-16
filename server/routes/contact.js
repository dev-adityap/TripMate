const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
// const nodemailer = require('nodemailer'); // Optional if you want server email notifications

// POST: Save contact message to MongoDB
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // 1. Save to MongoDB
    const newMsg = new ContactMessage({ name, email, message });
    await newMsg.save();

    // 2. Optional: Send email notification to your Gmail using Nodemailer
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    await transporter.sendMail({
      from: email,
      to: 'your-gmail@gmail.com',
      subject: `New TripMate Message from ${name}`,
      text: message
    });
    */

    res.status(201).json({ success: true, message: 'Message saved to MongoDB successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: Retrieve all messages for your admin inbox
router.get('/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;