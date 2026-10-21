# TripMate V2 — Design System

## Visual Identity: "Obsidian & Amber Glass"

A cinematic, luxury dark theme inspired by high-end travel SaaS platforms (Airbnb Luxe, Linear). The aesthetic combines deep obsidian backgrounds with warm amber accents and frosted glass surfaces.

## Color Palette

### Core Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--obsidian` | `#09090B` | Page background, primary canvas |
| `--amber-400` | `#F59E0B` | Primary accent, CTAs, active states |
| `--amber-300` | `#FCD34D` | Warning, secondary accent, hover states |
| `--amber-500` | `#D97706` | Deep amber, gradient endpoints |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `emerald-400` | `#34D399` | Success, verified, confirmed states |
| `rose-400` | `#FB7185` | Danger, SOS, delete actions |
| `amber-300` | `#FCD34D` | Warning, alerts, attention |

### Glass Surfaces
| Token | Value | Usage |
|-------|-------|-------|
| `bg-white/[0.04]` | `rgba(255,255,255,0.04)` | Card backgrounds, panels |
| `bg-white/[0.02]` | `rgba(255,255,255,0.02)` | Nested card backgrounds |
| `bg-white/[0.05]` | `rgba(255,255,255,0.05)` | Input backgrounds |
| `bg-white/[0.08]` | `rgba(255,255,255,0.08)` | Input focus backgrounds |
| `backdrop-blur-2xl` | `blur(40px)` | Glass panels, modals, navbars |
| `backdrop-blur-md` | `blur(12px)` | Subtle glass elements |
| `border-white/10` | `rgba(255,255,255,0.1)` | Card borders |
| `border-white/15` | `rgba(255,255,255,0.15)` | Input borders |
| `border-white/20` | `rgba(255,255,255,0.2)` | Emphasized borders |

### Text Colors
| Token | Usage |
|-------|-------|
| `text-white` | Primary text, headings |
| `text-white/80` | Secondary text, descriptions |
| `text-white/70` | Tertiary text, subtitles |
| `text-white/60` | Labels, captions |
| `text-white/50` | Muted text, placeholders |
| `text-white/40` | Disabled text, hints |
| `text-amber-300` | Accent text, links, highlights |
| `text-amber-400` | Strong accent, active states |

## Typography

### Font Stack
```css
font-family: 'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
```

### Type Scale
| Element | Classes | Example |
|---------|---------|---------|
| Hero Title | `text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.92]` | "Finalize Booking" |
| Page Title | `text-3xl md:text-5xl font-black uppercase tracking-tight` | "Platform Config" |
| Section Header | `text-xl font-extrabold` | "Personal Profile" |
| Card Title | `text-lg font-bold` | "Traveler 1 (Primary)" |
| Body Text | `text-sm text-white/70` | Descriptions, paragraphs |
| Label | `text-[10px] font-bold uppercase tracking-widest text-white/50` | Form field labels |
| Micro Badge | `text-[9px] font-bold uppercase tracking-widest` | Status badges |

### Typography Rules
- Use `font-black` (900) for hero headers
- Use `font-extrabold` (800) for section headers
- Use `font-bold` (700) for card titles and buttons
- Use `tracking-widest` for all uppercase micro-labels
- Use `tracking-tight` for large display text
- No `font-serif` or `font-mono` (except code/data displays)

## Spacing & Layout

### Page Wrapper
```jsx
className="min-h-screen w-full relative overflow-x-hidden bg-[#09090B] text-white font-sans pt-28 md:pt-32 pb-16 px-6 md:px-14"
```

### Card
```jsx
className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
```

### Input
```jsx
className="w-full bg-white/[0.05] focus:bg-white/[0.08] border border-white/15 focus:border-amber-400/70 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/40 text-sm transition-all outline-none"
```

### Button (Primary CTA)
```jsx
className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3.5 rounded-2xl shadow-xl transition-all cursor-pointer"
```

### Button (Secondary)
```jsx
className="bg-white/[0.05] hover:bg-white/[0.10] border border-white/10 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all cursor-pointer"
```

## Component Patterns

### Glass Card
- Background: `bg-white/[0.04] backdrop-blur-2xl`
- Border: `border border-white/10`
- Radius: `rounded-3xl`
- Shadow: `shadow-2xl`
- Padding: `p-6 md:p-8`

### Toggle Switch
- Track: `w-12 h-6 rounded-full` (amber-400 when on, white/10 when off)
- Thumb: `w-4 h-4 rounded-full bg-zinc-950` with `translate-x-7` (on) / `translate-x-1` (off)

### Badge
- `inline-flex items-center gap-1.5 bg-{color}/10 border border-{color}/20 text-{color} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`

### Empty State
- `bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-12 max-w-lg mx-auto text-center`
- Include icon, heading, description, and CTA button

## Animation

### Page Entry
```css
@keyframes pageFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-page-enter { animation: pageFadeIn 450ms ease-out forwards; }
```

### Transitions
- All interactive elements: `transition-all duration-300`
- Image hover zoom: `group-hover:scale-110 transition-transform duration-700`
- Background changes: `transition-all duration-1000 ease-out`

### Reduced Motion
- Respect `prefers-reduced-motion` for carousel and route animations
- Provide `reducedMotion` toggle in settings
