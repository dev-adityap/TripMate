import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, default: 'Trek' },
  budget: { type: Number, required: true },
  duration: { type: Number, required: true },
  maxPeople: { type: Number, required: true },
  description: { type: String, required: true },
  
  // This will store the users who join the trip!
  joinedUsers: [{ 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    age: Number // We will collect this when they click "Join"
  }],
  
  // This is where the group chat messages will live
  chatMessages: [{
    senderId: String,
    senderName: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model('Destination', destinationSchema);