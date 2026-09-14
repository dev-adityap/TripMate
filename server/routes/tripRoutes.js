import express from 'express';
import { GoogleGenAI } from '@google/genai';
import Trip from '../models/Trip.js';
import Message from '../models/Message.js';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Initialize the new Google Gen AI SDK (fully supports AQ. keys)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. Join a specific Trip
router.post('/:id/join', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    if (trip.status === 'Full' || trip.members.length >= trip.maxMembers) {
      return res.status(400).json({ error: 'Trip is full' });
    }
    res.status(200).json({ message: 'Successfully joined the trip!', tripId: trip._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Fetch Group Chat Messages
router.get('/:id/chat', async (req, res) => {
  try {
    const messages = await Message.find({ tripId: req.params.id }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Post Message to Group Chat
router.post('/:id/chat', async (req, res) => {
  try {
    const newMessage = new Message({
      tripId: req.params.id,
      senderType: 'user',
      senderName: req.body.senderName || 'Aditya Panna',
      message: req.body.message
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. AI & Persona Roleplay Endpoint
router.post('/:id/ai', async (req, res) => {
  try {
    const { message, tripContext, targetPersona } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured in server/.env' });
    }

    let prompt = '';
    if (targetPersona) {
      prompt = `
You are roleplaying as ${targetPersona}, a fellow traveler and group member in a chat room for a trip to ${tripContext?.title || 'Himalayan Adventure'}. 
You are texting casually with your friend Aditya Panna.
User message to you: "${message}"

Guidelines:
1. Reply directly as ${targetPersona}. Match a casual, friendly, realistic peer-to-peer texting style.
2. Acknowledge what Aditya said and respond naturally to it as a travel companion.
3. Do not break character or mention that you are an AI. Keep your answer brief and conversational.
`;
    } else {
      prompt = `
You are "TripMate AI", a helpful travel assistant for a trip to ${tripContext?.title || 'India'}.
User message: "${message}"
Keep your answer helpful, concise, and friendly.
`;
    }

    // Call the model using the updated @google/genai syntax
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });

    const responseText = response.text;

    return res.status(200).json({
      id: Date.now().toString(),
      senderType: targetPersona ? 'member' : 'ai',
      senderName: targetPersona || 'TripMate AI',
      message: responseText.trim(),
      createdAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('🔥 Detailed Gemini API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate AI/Persona response.' });
  }
});

export default router;