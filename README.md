# Adaptive Antivirus

> Security that learns at the speed of attack.

A production-grade marketing and product website for Adaptive Antivirus — a next-generation, cross-platform cybersecurity product. The site is a single-page scroll experience with deep-link routes, built to feel at home next to Linear, Vercel, Stripe, Cloudflare, and CrowdStrike in design quality.

## Stack

- **Next.js 15.5** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (beta) with CSS-variable design tokens
- **Framer Motion** for viewport-triggered animation
- **Recharts** for the attack-growth chart
- **Lucide React** for iconography
- **next-themes** with `forcedTheme="dark"` (the brand is dark)

## Getting started

```bash
# from the project root
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all 8 routes prerender static)
npm run typecheck
```

The repo was bootstrapped on a machine without Node — Node 22 LTS was installed user-locally to `~/.local/node` (no sudo, no Homebrew). If `node` isn't on your PATH, that install is reusable.

## Architecture

```
app/                   # App Router routes
  layout.tsx           # fonts, metadata, theme provider, JSON-LD
  page.tsx             # home (assembles all 20 sections)
  platform/            # /platform deep-link
  how-it-works/        # /how-it-works deep-link
  coverage/            # /coverage deep-link
  pricing/             # /pricing deep-link
  globals.css          # design tokens, custom utilities, keyframes

components/
  ui/                  # Button, Card, Pill, ProgressBar, StatCard,
                       # GlowCard, CodeBlock, NumberBadge, SectionHeader
  shared/              # Navbar, GridBackground, ParticleField, Logo,
                       # SystemActiveBadge, SectionShell, ThreatMap, CheckRow
  sections/            # 20 scroll sections (Hero through Footer)

hooks/                 # useInViewport, useCountUp
lib/                   # cn(), constants (all copy data), motion presets
public/                # favicon.svg, og-image.svg
```

## Sections (top to bottom)

1. **Hero** — gradient headline, platform pills, CTA, animated grid + particle field
2. **Cyber Reality** — problem framing + Recharts attack-growth chart
3. **Legacy Fails** — REACTIVE callout + detection/response progress bars
4. **Malware Spreads** — six-card dwell-time problem grid
5. **Breakthroughs** — three-card adaptive immunity / fleet learning / cross-platform
6. **How It Works** — 4-step interactive walkthrough with code blocks and live SVG distribution diagram
7. **Architecture** — four-layer stack with feature pills
8. **Coverage** — five-card device matrix
9. **Console Support** — differentiator section with vulnerability bars
10. **Threat Matrix** — 12-card threat coverage grid
11. **Threat Map** — animated live attacks-blocked SVG widget
12. **Response Timeline** — 5-stage horizontal cycle with arrows
13. **Privacy** — trust-as-a-feature with score bar
14. **Product Experience** — what users see / feel + mock dashboard
15. **Competitive** — Legacy vs Adaptive comparison + table
16. **Moat** — 5 cards + animated network visual
17. **Pricing** — 4 tiers + add-on row
18. **Roadmap** — 5 milestones with progress bars
19. **Thesis** — closing manifesto with quote and 3 reason cards
20. **CTA + Footer** — email signup with trust badges + 4-column footer

## Design language

- **Palette** declared as Tailwind v4 `@theme` tokens in `app/globals.css`
- **Cyan accent** (`#7CC4FF`) used as punctuation, not décor
- **Grid + particles** drawn with CSS-only utilities and SVG (no third-party WebGL)
- **Glassmorphism** via `backdrop-blur` + RGBA fills
- **Gradient borders** via masked pseudo-elements (`.gradient-border` utility)
- **Scanline shimmer** on code blocks via `.scanline` utility
- **`prefers-reduced-motion`** respected for all animations (`useReducedMotion` + global CSS override)

## Accessibility

- Semantic HTML (`section`, `header`, `footer`, `main`, `nav`, `blockquote`, `table`)
- ARIA labels on icon-only buttons and decorative SVGs (`aria-hidden`)
- Cyan focus-visible rings on all interactive elements (global rule)
- Color contrast: text-primary `#E8EEF7` on `#0A0E1A` is AAA; secondary `#94A3B8` is AA
- Theme is forced dark to keep the brand consistent and prevent FOUC

## What's next

Things I'd build out before shipping for real:

- **Animated count-up on stats**: hook is in place (`useCountUp`) but not yet wired to the metric strips. ~30 min.
- **Per-section anchor smooth-scroll**: works via `scroll-behavior: smooth` and `id` anchors, but the navbar links currently hop between routes; a single-page mode for the home `#anchor` links would be a nicer pattern.
- **Email-form backend**: the CTA form is presentational; wire to a real handler (Resend, Loops, or a Next.js Route Handler).
- **Per-route OG images**: each deep-link reuses the global OG SVG — would generate a per-route variant with the section title.
- **Lighthouse pass**: the build is static, fonts are optimized via `next/font`, but a real Lighthouse run on a deployed instance would be the right place to chase the last 5 points.
- **`useCountUp` wired into StatCards**: easy follow-up.
- **`prefers-color-scheme: light`**: the brand is intentionally dark-only, so this is a deliberate non-goal.

## Known limitations

- The Recharts library ships ~50 KB to first load on the home page. If that matters for your deploy target, swap for a hand-rolled SVG area chart.
- Tailwind v4 is still beta-pinned (`4.0.0-beta.8`) — bump to stable when v4 GA lands.
- The mock dashboard in **Product Experience** is illustrative; for a real product page, capture a real screenshot.

## License

This is a thesis-project asset — treat it as code you own and adapt. No warranty; not for redistribution outside the thesis context.
