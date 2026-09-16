# 🌍 TripMate

TripMate is a full-stack travel planning web application designed to help users discover destinations, plan trips, connect with fellow travelers, and manage their travel experiences in one place.

The project is built using the MERN stack with AI-powered features integrated through the Gemini API.

TRY NOW :

https://tripmate-phi-ebon.vercel.app/

---

## ✨ Features

- 🔐 User Registration & Login
- 👤 User Profiles
- 🌍 Explore Travel Destinations
- 📍 Destination Details
- 🗺️ Interactive Map
- 🤖 AI-powered travel assistance
- 👥 Travel Groups
- 🧳 Trip planning
- ➕ Add new destinations
- 💬 Travel-focused community features
- 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT / Token-based authentication

### AI

- Google Gemini API

### Development Tools

- Git
- GitHub
- VS Code
- MongoDB Atlas

---

## 📁 Project Structure

```text
TripMate/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── seed.js
│   └── server.js
│
├── .gitignore
└── README.md


🤖 AI Integration
TripMate integrates Google's Gemini API to provide AI-powered travel assistance.
The API key is loaded securely from environment variables:
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
This keeps the API key outside the source code and prevents it from being committed to the repository.
🗄️ Database
TripMate uses MongoDB for storing application data.
MongoDB Atlas can be used as the cloud database provider.
The application connects to MongoDB using Mongoose:
mongoose.connect(MONGO_URI);
🌱 Seed Data
The backend includes a seed.js file for populating the database with initial destination/application data.
Run it according to the project's seed script configuration.
🔮 Future Improvements
Some planned improvements include:
- 🗓️ Advanced trip itinerary generation
- 💰 Trip budget management
- 🌦️ Weather information for destinations
- ✈️ Flight and hotel integrations
- 🧭 Personalized destination recommendations
- ⭐ Destination reviews and ratings
- 📸 Travel photo sharing
- 🔔 Trip notifications
- 🤝 Improved travel group collaboration
👨‍💻 Developer
Aditya Panna
B.Tech Computer Science & Engineering
📜 License
This project is currently developed as a personal/academic project.
More details about licensing can be added as the project evolves.
