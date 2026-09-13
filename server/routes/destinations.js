import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

// Get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

// Get single destination workspace
router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ error: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch destination workspace' });
  }
});

// Create new destination
router.post('/', async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create destination' });
  }
});

// Join trip
router.post('/:id/join', async (req, res) => {
  try {
    const { userId, name } = req.body;
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ error: 'Destination not found' });

    const alreadyJoined = destination.participants.some(p => p.userId === userId);
    if (!alreadyJoined) {
      destination.participants.push({ userId, name });
      await destination.save();
    }

    res.json({ message: 'Successfully joined trip', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to join trip' });
  }
});

// Add itinerary item
router.post('/:id/itinerary', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    destination.itinerary.push(req.body);
    await destination.save();
    res.json({ message: 'Itinerary added', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add itinerary' });
  }
});

// Add expense
router.post('/:id/expenses', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    destination.expenses.push(req.body);
    await destination.save();
    res.json({ message: 'Expense added', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

// Add packing item
router.post('/:id/packing', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    destination.packingList.push(req.body);
    await destination.save();
    res.json({ message: 'Packing item added', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add packing item' });
  }
});

// Toggle packing item
router.patch('/:id/packing/:itemId', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    const item = destination.packingList.id(req.params.itemId);
    if (item) {
      item.packed = !item.packed;
      await destination.save();
    }
    res.json({ message: 'Packing status updated', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update packing status' });
  }
});

// Send chat message
router.post('/:id/chat', async (req, res) => {
  try {
    const { sender, message } = req.body;
    const destination = await Destination.findById(req.params.id);
    destination.chat.push({ sender, message });
    await destination.save();
    res.json({ message: 'Message sent', destination });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;