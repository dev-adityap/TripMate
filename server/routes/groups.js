import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

// JOIN a trip (Add user to a destination's participant list)
router.post('/:id/join', async (req, res) => {
  try {
    const { userId, userName } = req.body;
    const destination = await Destination.findOne({ id: req.params.id }) || await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }

    // Initialize participants array if it doesn't exist yet
    if (!destination.participants) {
      destination.participants = [];
    }

    // Check if user already joined
    const alreadyJoined = destination.participants.some(p => p.userId === userId);
    if (alreadyJoined) {
      return res.status(400).json({ error: 'You have already joined this trip!' });
    }

    destination.participants.push({ userId, userName, joinedAt: new Date() });
    await destination.save();

    res.json({ message: 'Successfully joined trip!', participants: destination.participants });
  } catch (err) {
    res.status(500).json({ error: 'Failed to join trip', details: err.message });
  }
});

// GET group participants / details for a trip
router.get('/:id/group', async (req, res) => {
  try {
    const destination = await Destination.findOne({ id: req.params.id }) || await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    res.json({ 
      tripName: destination.name, 
      state: destination.state, 
      participants: destination.participants || [] 
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch group workspace' });
  }
});

export default router;