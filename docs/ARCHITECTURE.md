# TripMate V2 — System Architecture

## Overview

TripMate V2 follows a client-server architecture with a React SPA frontend and a Node.js/Express backend, connected via REST API. State persistence uses a hybrid approach: Firebase Auth for identity, MongoDB for persistent data, and LocalStorage for client-side settings cache.

## Frontend (`client/`)

### Core Stack
- **React 18** — Component-based UI with hooks
- **Vite** — Build tool and dev server (port 5173)
- **React Router v6** — Client-side routing with `useNavigate`, `useLocation`, `useParams`
- **Tailwind CSS** — Utility-first styling with custom Obsidian/Amber theme
- **Lucide React** — Icon library (all icons use numeric size props: `size={18}`)

### Key Libraries
- **Firebase Google OAuth** — Authentication via `AuthContext.jsx` (`useAuth` hook)
  - Exports: `user`, `currentUser`, `token`, `loginWithGoogle`, `logout`
- **Mapbox GL JS** — Interactive 3D maps via `react-map-gl/mapbox`
- **Carto Dark Matter** — Free raster tile provider (no token required)
- **LocalStorage** — Client-side state persistence for settings, wishlist, trips

### Directory Structure
```
client/src/
├── App.jsx              # Root component, routing, global ScrollToTop
├── index.css            # Global styles, pageFadeIn animation
├── components/
│   ├── Navbar.jsx       # Top navigation bar
│   ├── Sidebar.jsx      # Legacy sidebar (removed from layout)
│   ├── ProtectedRoute.jsx
│   └── ...
├── context/
│   └── AuthContext.jsx  # Firebase auth provider
├── pages/
│   ├── HomePage.jsx     # Hero carousel + postcard cards
│   ├── DiscoverPage.jsx # Destination discovery grid
│   ├── DestinationPage.jsx  # Destination detail + batch selection
│   ├── CheckoutPage.jsx     # Booking flow with traveler forms
│   ├── MapPage.jsx          # Geospatial map explorer
│   ├── SettingsPage.jsx     # 8-tab enterprise settings
│   ├── TripsPage.jsx        # Booked trips grid
│   ├── WishlistPage.jsx     # Saved destinations
│   ├── ReviewsPage.jsx      # Traveler reviews
│   ├── AboutPage.jsx        # Brand story
│   ├── ContactPage.jsx      # Contact form + MongoDB inbox
│   ├── NotificationsPage.jsx
│   ├── LoginPage.jsx        # Dark glassmorphic auth
│   ├── CreateTripPage.jsx   # Trip builder form
│   └── GroupWorkspacePage.jsx  # Squad chat workspace
└── data/
    └── mockDatabase.js  # 100+ destination mock data
```

### State Management
- **Auth State**: Firebase `onAuthStateChanged` → `AuthContext` → `useAuth()` hook
- **Settings State**: `useState` + `localStorage` (key: `tripmate_v2_enterprise_final`)
- **Wishlist State**: `localStorage` key `tripMate_wishlist`
- **Trips State**: `localStorage` key `tripMate_myTrips`
- **Unlocked Workspaces**: `localStorage` key `tripMate_unlockedWorkspaces`

## Backend (`server/`)

### Core Stack
- **Node.js** — Runtime environment
- **Express.js** — REST API framework
- **MongoDB/Mongoose** — Document database with ODM
- **Port**: 5000

### Key Endpoints
- `GET /api/contact` — Fetch contact messages
- `POST /api/contact` — Submit contact message
- `DELETE /api/contact/:id` — Delete contact message
- `POST /api/trips` — Create trip
- `POST /api/auth/register` — User registration
- `POST /api/auth/google` — Google OAuth verification

### Database Models
- `Destination` — Destination data schema
- `Trip` — Trip booking schema
- `Message` — Contact message schema
- `User` — User account schema

## Communication
- Frontend → Backend: REST API calls to `http://localhost:5000`
- Auth: Firebase Google OAuth (client-side) + JWT token verification (server-side)
- Map tiles: Mapbox GL JS (dark-v11) + Carto Dark Matter (raster fallback)
