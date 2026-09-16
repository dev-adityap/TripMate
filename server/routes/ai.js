import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/chat', async (req, res) => {
  try {
    const { message, tripName } = req.body;

    const prompt = `You are a helpful and enthusiastic travel companion in a group chat planning a trip to "${tripName}". 
    Another traveler just sent this message: "${message}". 
    Reply naturally, conversationally, and concisely (1-2 sentences) as a peer traveler discussing logistics, food, budget, or activities.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash', // <-- UPDATED TO THE CORRECT MODEL
      contents: prompt,
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.warn("⚠️ Gemini API Error:", error.message);
    
    // Smart local fallback in case of network issues
    const text = (req.body.message || "").toLowerCase();
    let fallbackReply = "That sounds good to me! Let's lock it in.";
    
    if (text.includes('bike') || text.includes('rent') || text.includes('ride')) {
      fallbackReply = "Renting bikes makes total sense for exploring freely! Let's check group rates.";
    } else if (text.includes('food') || text.includes('eat') || text.includes('dinner') || text.includes('cafe')) {
      fallbackReply = "Ooh yes! I've been researching local food spots and cafes. Adding them to our plan!";
    } else if (text.includes('budget') || text.includes('cost') || text.includes('money')) {
      fallbackReply = "That fits my estimate well. We can split common expenses once we get there.";
    } else if (text.includes('weather') || text.includes('cold') || text.includes('jacket')) {
      fallbackReply = "Definitely pack layers! The weather around the mountains can change pretty quickly.";
    }

    res.json({ reply: fallbackReply });
  }
});

export default router; // or export default router depending on your file type setup