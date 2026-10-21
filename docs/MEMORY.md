# TripMate V2 — Project Memory & Changelog

## Critical Project State

### Auth Context
- **Provider**: Firebase Google OAuth via `AuthContext.jsx`
- **Hook**: `useAuth()` returns `{ user, currentUser, token, loginWithGoogle, logout }`
- **`currentUser`** is an alias for `user` (added for SettingsPage compatibility)
- **No email/password login** — only Google OAuth is implemented
- **Protected routes** use `<ProtectedRoute>` wrapper component

### Persistence Keys
| Key | Storage | Purpose |
|-----|---------|---------|
| `tripmate_v2_enterprise_final` | localStorage | Enterprise settings (8-tab config) |
| `tripMate_wishlist` | localStorage | Saved destination IDs |
| `tripMate_myTrips` | localStorage | Booked trip IDs |
| `tripMate_unlockedWorkspaces` | localStorage | Unlocked squad workspace names |
| `tripMate_userProfile` | localStorage | User profile preferences |
| `tripMate_userFeedback` | localStorage | Traveler reviews |

### Map Constraints
- **India bounding box**: `[[67.0, 5.5], [98.5, 37.5]]` (Southwest to Northeast)
- **Default center**: `[78.9629, 22.5937]` (center of India)
- **Default zoom**: `4.4`
- **Map style**: Carto Dark Matter (raster tiles from basemaps.cartocdn.com)
- **Mapbox token**: Hardcoded in MapPage.jsx (should move to env in production)
- **Coordinate resolver**: `DEST_COORDS` dictionary (120+ entries) + state centroid fallback with deterministic spiral spread

### Route Map
| Path | Component | Protected |
|------|-----------|-----------|
| `/` | Redirect to `/home` | No |
| `/login` | LoginPage | No |
| `/home` | HomePage | No |
| `/discover` | DiscoverPage | No |
| `/map` | MapPage | No |
| `/destination/:id` | DestinationPage | No |
| `/about` | AboutPage | No |
| `/contact` | ContactPage | No |
| `/reviews` | ReviewsPage | No |
| `/trips` | TripsPage | Yes |
| `/wishlist` | WishlistPage | Yes |
| `/checkout/:id` | CheckoutPage | Yes |
| `/settings` | SettingsPage | Yes |
| `/create` | CreateTripPage | Yes |
| `/messages` | MessagesPage | Yes |
| `/notifications` | NotificationsPage | Yes |
| `/profile` | ProfilePage | Yes |
| `/favorites` | FavoritesPage | Yes |
| `/my-trips` | MyTripsPage | Yes |
| `/trip/:id` | TripDetailsPage | Yes |

### API Endpoints (Backend: localhost:5000)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/google` | Google OAuth verification |
| GET | `/api/contact` | Fetch contact messages |
| POST | `/api/contact` | Submit contact message |
| DELETE | `/api/contact/:id` | Delete contact message |
| POST | `/api/trips` | Create trip |

### Design Tokens
- **Background**: `#09090B`
- **Amber Accent**: `#F59E0B`
- **Glass Surface**: `bg-white/[0.04] backdrop-blur-2xl`
- **Border**: `border-white/10`
- **Success**: `emerald-400`
- **Danger**: `rose-400`
- **Warning**: `amber-300`

### Changelog

#### 2026-10-21
- Master geospatial overhaul: 100 destinations + fly-to camera + Carto/Mapbox engine
- Fixed malformed JSX in MapPage (size props, URLs, handlers)
- Hardcoded Mapbox token for tile rendering
- Created docs/ directory with 6 foundational markdown files

#### 2026-10-20
- 8-Tab Enterprise Settings V2 with localStorage persistence
- Back-to-Home navigation + breadcrumb on Settings
- Map Explorer feature scaffolded
- Lucide icon size fixes across multiple files

#### 2026-10-19
- Foxico glassmorphic UI overhaul across all inner routes
- Dynamic traveler forms on CheckoutPage
- Price parsing fix for range strings
- Dark luxury glassmorphic Login page
- Firebase auth context sync (loginWithGoogle)
- Cinematic checkout success overlay
- Postcard carousel routing on HomePage
- Global ScrollToTop + page entry animation

### Known Technical Debt
1. Mapbox token hardcoded (should be env var)
2. Bundle size ~684KB (should code-split)
3. Mock data used instead of API calls
4. No real-time chat (WebSocket not implemented)
5. No email/password auth (only Google OAuth)
6. No 404 error page
7. No footer component
