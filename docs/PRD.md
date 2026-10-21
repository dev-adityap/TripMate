# TripMate V2 — Product Requirements Document (PRD)

## Product Vision

TripMate V2 is a luxury, dark-glassmorphic expedition and group travel SaaS platform designed specifically for Indian travelers. It combines cinematic UI design with powerful expedition planning tools, enabling users to discover, plan, book, and coordinate group travel experiences across India's most stunning landscapes.

## Core Modules

### 1. Interactive India Map Explorer (`/map`)
- Mapbox GL JS integration with 100+ verified destinations plotted across the Indian subcontinent
- Carto Dark Matter raster tiles for 100% free rendering (no token dependency)
- Region filter pills (Himachal Pradesh, Uttarakhand, Ladakh, Kashmir, Sikkim, Meghalaya, Rajasthan, Kerala, Goa, etc.)
- Sidebar-to-map fly-to camera with smooth animation (`duration: 1400ms`)
- India bounding box lock: `[[67.0, 5.5], [98.5, 37.5]]`
- Click-to-navigate markers that route to `/destination/:id`
- Floating quick-card with destination details and "Open Destination" CTA

### 2. Enterprise Settings Control Center (`/settings`)
- 8-tab persistent configuration system:
  1. Identity & Bio — Profile, handle, city, phone, bio, travel vibe tags
  2. Travel Documents — Passport number, expiry, DigiLocker sync, Global Entry
  3. Medical & SOS — Blood group, insurance ID, emergency contacts, medical notes
  4. Wallets & Splitwise — UPI ID, payment method, auto-split, GST invoices
  5. Connected Apps — GitHub, Strava, Splitwise integration cards
  6. Map Engines & Routing — Carto vs Mapbox GL selection, offline cache, elevation
  7. Alert Matrix — Captain broadcasts, weather alerts, chat mentions, expense pings, WhatsApp/SMS
  8. Privacy & Sessions — Profile visibility, live location sharing, active sessions, danger zone
- localStorage persistence key: `tripmate_v2_enterprise_final`
- "Commit Changes" mechanism with `isSaving` loading state and floating toast notification

### 3. Squad Workspaces (`/workspaces`, `/messages`)
- Real-time group coordination for booked expeditions
- Group chat feed with amber/white glass bubbles
- Squad member roster with verified captain badges
- Itinerary schedule display
- Expense splitting (Splitwise integration)

### 4. Discovery & Booking Flow (`/discover`, `/trips`, `/checkout/:id`)
- Curated destination circuits with full-bleed glass cards
- Custom trip builder with destination, dates, group size
- Luxury checkout flow with traveler details, vibe preference, payment method
- Cinematic processing/success overlay with auto-route to `/trips`
- localStorage persistence: `tripMate_myTrips`, `tripMate_unlockedWorkspaces`

## Target Users
- Indian travelers seeking curated Himalayan and adventure expeditions
- Group travelers needing squad coordination and expense splitting
- Solo adventurers looking for verified, safe expedition experiences

## Design Philosophy
- "Obsidian & Amber Glass" — cinematic dark theme with warm amber accents
- Glassmorphic surfaces with `backdrop-blur-2xl` and `bg-white/[0.04]`
- Editorial luxury aesthetic with high-contrast typography
- Full mobile responsiveness with no horizontal scrolling
