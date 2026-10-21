# TripMate V2 — AI & Engineering Rules

## JSX Syntax Rules

### Prop Passing
- **ALWAYS** use raw curly braces for numeric/boolean props: `size={18}`, `disabled={true}`, `maxZoom={15}`
- **NEVER** use string quotes for props: ~~`size="18"`~~, ~~`disabled="true"`~~
- **NEVER** use malformed string-with-braces: ~~`size="{18}"`~~
- String props are only for actual string values: `className="..."`, `placeholder="..."`, `to="/map"`

### Component Structure
- Use functional components with hooks exclusively
- One component per file, default export
- Keep components under 400 lines; extract sub-components when needed

## Security Rules

### API Keys & Secrets
- **ALWAYS** use `import.meta.env.VITE_*` for all API keys and secrets
- **NEVER** hardcode secrets in source code
- Mapbox token: `import.meta.env.VITE_MAPBOX_TOKEN`
- Firebase config: all via `import.meta.env.VITE_FIREBASE_*`
- Backend secrets (MongoDB URI, Gemini API key) in `server/.env` only

### Authentication
- All protected routes wrapped in `<ProtectedRoute>`
- Firebase Google OAuth is the sole authentication method
- JWT tokens verified server-side for API calls

## UI/UX Rules

### Layout
- Apply `overflow-x-hidden` to all page wrappers to prevent horizontal scrolling
- Use `min-h-screen` for full-page layouts
- All pages must use `pt-28 md:pt-32 pb-16 px-6 md:px-14` for top-nav clearance
- Remove all legacy `pl-24` or `ml-20` offsets from sidebar layout

### Responsiveness
- Mobile-first design with Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- All interactive elements must have `cursor-pointer`
- Touch targets minimum 44px on mobile

### Color Palette
- Background: `#09090B` (Obsidian)
- Primary Accent: `#F59E0B` (Amber-400/500)
- Glass Surface: `bg-white/[0.04]` with `backdrop-blur-2xl`
- Border: `border-white/10`
- Success: `emerald-400`
- Danger: `rose-400`
- Warning: `amber-300`

### Typography
- Font: Plus Jakarta Sans / Inter (weights 400–900)
- Hero headers: `font-black uppercase tracking-tight`
- Micro-labels: `text-[10px] font-bold uppercase tracking-widest`
- No `font-serif` or `font-mono` (except code/monospace data displays)

## Integrity Rules

### No Dead Links or Placeholders
- Every `<Link>` or `navigate()` call must point to a valid route
- Every button must trigger a valid action (route, state change, or toast)
- No "coming soon" placeholders without a functional fallback
- Empty states must include a CTA linking to a valid route

### No AI-Blue/Cyan Colors
- Prohibited classes: `blue-*`, `cyan-*`, `sky-*`, `slate-*`
- Use warm palette only: amber, emerald, rose, zinc, white

### State Persistence
- Settings: `localStorage` key `tripmate_v2_enterprise_final`
- Wishlist: `localStorage` key `tripMate_wishlist`
- Trips: `localStorage` key `tripMate_myTrips`
- Unlocked Workspaces: `localStorage` key `tripMate_unlockedWorkspaces`

### Build Verification
- All changes must pass `npx vite build --mode production`
- No console errors or warnings in production build
- No unused imports or variables
