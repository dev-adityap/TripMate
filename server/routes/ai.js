import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { prompt, destinationName } = req.body;

    // We manually inject the x-goog-api-key header to bypass the SDK's AQ token bug
    const ai = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'x-goog-api-key': process.env.GEMINI_API_KEY
        }
      }
    });

 const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash', // <--- Update this exact string
      contents: `You are TripMate AI, a frank, candid, and street-smart travel co-pilot for a group trip to ${destinationName || 'an amazing destination'}. Answer the following traveler's message naturally, briefly, and helpfully like a human group chat member: "${prompt}"`,
    });
    res.json({ reply: response.text });
  } catch (error) {
    console.error('AI API Error:', error);
    res.status(500).json({ reply: "Honestly, my AI brain just blinked for a second. Ask me again!" });
  }
});

export default router;