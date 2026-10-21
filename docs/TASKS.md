# TripMate V2 — Active Engineering Tasks

## Completed

### Core Platform
- [x] 8-Tab Enterprise Settings Control Center (`/settings`) with localStorage persistence
- [x] 100-Destination Map Explorer (`/map`) with Mapbox GL + Carto Dark Matter tiles
- [x] Dynamic Region Pills auto-extracted from destination data
- [x] Sidebar-to-Map FlyTo camera animation
- [x] Map Pin-to-Page redirect (`/destination/:id`)
- [x] India bounding box lock (`[[67.0, 5.5], [98.5, 37.5]]`)

### UI/UX Overhaul
- [x] Foxico glassmorphic redesign across all inner routes
- [x] Dark luxury glassmorphic Login page (`/login`)
- [x] Cinematic Checkout flow with traveler forms and success overlay
- [x] Postcard carousel routing on HomePage
- [x] Global ScrollToTop on route change
- [x] Page entry animation (fade-in + translateY)
- [x] Back-to-Home navigation + breadcrumb on Settings page

### Authentication
- [x] Firebase Google OAuth integration
- [x] AuthContext with `useAuth` hook (`user`, `currentUser`, `loginWithGoogle`, `logout`)
- [x] Protected routes via `<ProtectedRoute>`

### Data & State
- [x] 100+ mock destinations in `mockDatabase.js`
- [x] localStorage persistence for settings, wishlist, trips, workspaces
- [x] Price parsing fix for range strings (e.g., "₹6,000 - ₹10,000")
- [x] Dynamic traveler forms (1-4 travelers with Name/Age/Email)

## Pending

### Global UX Enhancers
- [ ] Scroll progress indicator (top bar showing scroll percentage)
- [ ] Back-to-Top floating button (appears after scrolling 300px)
- [ ] Command-K search palette (global quick navigation)
- [ ] Keyboard shortcuts (Ctrl+K for search, Esc to close modals)

### Responsive Mobile
- [ ] Mobile drawer navigation (hamburger menu for nav links)
- [ ] Touch-optimized card interactions
- [ ] Mobile-specific layout adjustments for map sidebar

### Custom Components
- [ ] Custom 404 Error page with glassmorphic design
- [ ] Footer component with links and social icons
- [ ] Loading skeleton components for data fetching
- [ ] Toast notification system (global, not per-page)

### Map Enhancements
- [ ] Live Mapbox GL token integration (replace hardcoded token)
- [ ] Cluster markers for dense destination regions
- [ ] Route drawing between selected destinations
- [ ] Offline map tile caching

### Backend Integration
- [ ] Connect frontend to MongoDB via REST API
- [ ] Real authentication (JWT verification)
- [ ] Real booking persistence (not just localStorage)
- [ ] Real-time chat (WebSocket/Socket.io)

### Performance
- [ ] Code splitting with React.lazy for route-based chunks
- [ ] Image optimization (WebP, lazy loading)
- [ ] Bundle size reduction (currently ~684KB)

## Known Issues
- Mapbox token is hardcoded (should use env var in production)
- Bundle size exceeds 500KB warning threshold
- Some pages still use mock data instead of API calls
- `AuthContext` does not export `login` (email/password) — only `loginWithGoogle`
