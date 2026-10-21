# 🏔️ TripMate V2 — Indian Expedition & Group Travel SaaS Platform

TripMate V2 is a full-stack, dark-glassmorphic expedition discovery and group coordination platform engineered for Indian trekkers, backpackers, and squad organizers. It unifies geospatial route discovery, batch bookings, real-time group workspaces, and automated UPI expense splitting into a single interface.

---

## ✨ Key Architectural Highlights

### 1. 🗺️ Interactive 100-Destination India Map Explorer (`/map`)
- **Geospatial Engine:** Powered by **Mapbox GL JS** (`react-map-gl`) with custom dark vector styling and strict Indian subcontinent boundary locks (`maxBounds`).
- **Dynamic Camera FlyTo:** State-level filter pills (Himachal Pradesh, Uttarakhand, Ladakh, Kashmir, Sikkim, Meghalaya, Rajasthan, Kerala, Goa) smoothly animate camera pitch and bearing directly to regional centroids.
- **Deterministic Coordinate Resolver:** Plots 100+ verified peaks, valleys, and coastal circuits with interactive hover labels and instant glassmorphic preview cards.

### 2. 👥 Squad Workspaces & Expense Splitting (`/workspaces`)
- **Post-Booking Coordination:** Unlocks dedicated squad rooms for each expedition batch.
- **Equal Split & UPI Settlement:** Tracks shared cab, stay, and cafe expenses with automated per-member split calculations.
- **TripCaptain Gear Checklists:** Interactive packing and permit verification boards.

### 3. ⚙️ 8-Tab Enterprise Control Center (`/settings`)
- Persistent local & cloud-synced configuration across **Profile**, **Travel Documents (DigiLocker / Inner-Line Permits)**, **High-Altitude Medical & SOS**, **Wallets & Splitwise UPI**, **Connected Apps**, **Map Engines**, **Notifications**, and **Security**.

### 4. ⚡ Production UX & Accessibility
- **Command-K (`Ctrl+K`) Global Site Search:** Instant modal search across all 100+ Indian destinations.
- **24/7 SOS Dispatch Widget:** Floating basecamp support desk with one-click call (`tel:`), email (`mailto:`), and emergency code copy.
- **Print-Optimized Itineraries:** Dedicated `@media print` stylesheet that strips navigation chrome for clean physical trip dossiers.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, React Router v6, Lucide React |
| **Geospatial** | Mapbox GL JS, `react-map-gl` |
| **Authentication** | Firebase Authentication (Google OAuth 2.0) |
| **Backend & Database** | Node.js, Express.js, MongoDB, Mongoose |
| **Deployment** | Vercel (Frontend SPA), GitHub Actions / Push Protection |

---

## 🚀 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/dev-adityap/TripMate.git
cd TripMate
```

### 2. Configure Frontend Environment
Create a `.env` file in the `client/` directory:
```env
VITE_MAPBOX_TOKEN=your_mapbox_public_token_here
```

### 3. Install Dependencies & Run
```bash
# Start Frontend
cd client
npm install
npm run dev

# Start Backend (Optional API Server)
cd ../server
npm install
npm run dev
```

---

## 📂 Engineering Documentation (`/docs`)
- [`docs/PRD.md`](docs/PRD.md) — Product Requirements & Core Modules
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — Full-Stack System Architecture
- [`docs/DESIGN.md`](docs/DESIGN.md) — Obsidian (`#09090B`) & Expedition Amber (`#F59E0B`) Design System
- [`docs/RULES.md`](docs/RULES.md) — Code Standards & Security Protocols

---

## 👨‍💻 Author
**Aditya Panna**  
GitHub: [@dev-adityap](https://github.com/dev-adityap)
