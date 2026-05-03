# CLAUDE.md — handoff context for this repo

This file is auto-loaded by Claude Code when this repo is opened. Read it first.
It is the running record of what's been built, what's deferred, why things are
the way they are, and how to verify the site works without re-deriving everything
from scratch.

---

## 1. Project at a glance

- **Name:** Adaptive Antivirus
- **Tagline:** "Security that learns at the speed of attack"
- **Promise:** Detect. Adapt. Immunize.
- **Owner:** Akshaj Karimanikkam (`akshajkarimanikkam@gmail.com`,
  GitHub: `akshajkarimanikkam-commits`)
- **Type:** Thesis project — a marketing & product website for a
  fictional next-generation cybersecurity product
- **Repo:** https://github.com/akshajkarimanikkam-commits/adaptive-antivirus
- **Dev URL (local):** `http://localhost:3000` (see `npm run dev`)

The site is intended to feel at home next to Linear, Vercel, Stripe, Cloudflare,
and CrowdStrike — dark-mode, premium cybersecurity aesthetic. Cyan-blue accent
on a near-black navy background, used as punctuation, never décor.

## 2. Current state

| Area | State |
|---|---|
| Home (`/`) | ✅ Complete — 20 sections + bonus ThreatMap section |
| `/platform` | ✅ Unique hero + `EngineSpec` section + 4 reused sections |
| `/how-it-works` | ✅ Unique hero + `CycleDiagram` + 3 reused sections |
| `/coverage` | ✅ Unique hero + `OSWall` + 3 reused sections |
| `/demo` | ✅ Unique hero + interactive simulation + explainer cards |
| `/pricing` | ✅ Unique hero + `Pricing` + `Competitive` + `PricingFAQ` + `Roadmap` |
| TypeScript strict | ✅ `tsc --noEmit` passes clean |
| Build | ✅ `next build` produces 8 static pre-rendered routes |
| Dev server | ✅ Runs clean (verified on port 3010 in original session) |
| Lighthouse | ⚠️ Not run yet (no deploy target) |
| Hosting | ⚠️ Not deployed |
| Tests | ⚠️ None (out of scope for thesis) |

## 3. Stack & key decisions

| Choice | Reason |
|---|---|
| Next.js 15.5 (App Router) + React 19 | Spec'd by user. 15.5 picked over 15.1 to dodge CVE-2025-66478 |
| TypeScript strict | Spec'd by user, no `any` allowed |
| Tailwind v4 (beta) | Spec'd by user. Pinned at `4.0.0-beta.8`; bump to stable when GA |
| Framer Motion | Viewport-triggered animations + interactive HowItWorks tabs |
| Recharts | Single attack-growth chart on `CyberReality`. ~50 KB hit on home First Load |
| `next-themes` with `forcedTheme="dark"` | Brand is intentionally dark-only. No light mode |
| **No `shadcn/ui` CLI install** | Wrote primitives by hand (Button, Card, Pill, etc.) — same patterns, fewer deps, full control over tokens |
| **CSS variables in Tailwind v4 `@theme` block** | Single source of truth for the palette in `app/globals.css` |
| Inter + JetBrains Mono via `next/font` | No layout shift, self-hosted by default |
| **No interactive state libraries** (zustand etc.) | Each section is independent; React `useState` is enough |

## 4. File map (memorize)

```
app/
  layout.tsx                  fonts, metadata, JSON-LD, Navbar, theme provider
  page.tsx                    home — assembles all 20 sections in order
  globals.css                 design tokens (@theme), custom utilities, keyframes
  platform/page.tsx           PlatformHero + EngineSpec + Architecture + Breakthroughs + ProductExperience + Privacy + CTA + Footer
  how-it-works/page.tsx       HowHero + CycleDiagram + HowItWorks + ResponseTimeline + Architecture + CTA + Footer
  coverage/page.tsx           CoverageHero + OSWall + Coverage + ConsoleSupport + ThreatMatrix + CTA + Footer
  pricing/page.tsx            PricingHero + Pricing + Competitive + PricingFAQ + Roadmap + CTA + Footer

components/
  ui/                         primitives (Button, Card, Pill, ProgressBar, StatCard, GlowCard, CodeBlock, NumberBadge, SectionHeader)
  shared/                     Navbar, Logo, GridBackground, ParticleField, SystemActiveBadge, SectionShell, ThreatMap, CheckRow
  sections/                   the 20 home sections + 4 route-unique sections + 4 route heroes
  sections/heroes/            PlatformHero, HowHero, CoverageHero, PricingHero (route-specific)

hooks/
  useInViewport.ts            IntersectionObserver wrapper
  useCountUp.ts               easing count-up; built but NOT yet wired (see TODOs)

lib/
  utils.ts                    cn() helper (clsx + tailwind-merge)
  motion.ts                   easeOutSoft, fadeUp, fadeUpStagger, fadeUpItem, viewportOnce
  constants.ts                ALL section copy data — single source of truth

public/
  favicon.svg                 inline SVG shield with cyan gradient
  og-image.svg                1200×630 OG image, hand-built SVG
```

## 5. Section inventory (home page, in order)

1. `Hero` — gradient headline, platform pills, two CTAs, particle field
2. `CyberReality` — 4 problem cards + Recharts attack-growth chart
3. `LegacyFails` — REACTIVE callout + 3 progress bars (detection / response / mobile parity)
4. `MalwareSpreads` — 6-card dwell-time grid + threat impact panel + critical-window callout
5. `Breakthroughs` — 3 numbered GlowCards + bottom metric strip
6. `HowItWorks` — interactive 4-step tab walkthrough with code blocks + SVG fleet diagram (step 4)
7. `Architecture` — 4 horizontal layer rows + 3 feature cards
8. `Coverage` — 5 device-category cards with OS pills + global protected-devices stat
9. `ConsoleSupport` — 5 reason cards + 3 progress bars + insight callout
10. `ThreatMatrix` — 12 threat-type cards (4×3) + Kaspersky source callout
11. `ThreatMapSection` — bonus animated world-map widget
12. `ResponseTimeline` — 5-stage horizontal timeline with arrows + 4 stat cards
13. `Privacy` — 4 trust cards + privacy-score panel + survey callout
14. `ProductExperience` — see/feel columns + mock dashboard between them
15. `Competitive` — Legacy vs Adaptive split + 5-row comparison table
16. `Moat` — 5 reason cards + animated network-graph SVG + closing pull-quote
17. `Pricing` — 4 tier cards + add-on row
18. `Roadmap` — 5 milestone cards (3+2 grid) with progress bars
19. `Thesis` — closing manifesto + 3 reason cards + tagline banner
20. `CTA` + `Footer` — full-width signup + 4-column footer

Sections used by deep-link routes are reused as-is — no per-route props,
no conditional rendering branches. Each route gets its own hero and
exactly one route-unique section.

## 6. Route-unique components (don't duplicate)

| Route | Hero (file) | Unique section (file) | What it visualizes |
|---|---|---|---|
| `/platform` | `components/sections/heroes/PlatformHero.tsx` | `components/sections/EngineSpec.tsx` | Engine spec sheet (terminal-style, 8 rows) + 6 feature cards |
| `/how-it-works` | `components/sections/heroes/HowHero.tsx` | `components/sections/CycleDiagram.tsx` | 4-phase Detect/Adapt/Harden/Share horizontal flow |
| `/coverage` | `components/sections/heroes/CoverageHero.tsx` | `components/sections/OSWall.tsx` | Three OS columns (Desktop, Mobile, Console) with version floors |
| `/demo` | `components/sections/heroes/DemoHero.tsx` | `components/sections/InteractiveDemo.tsx` + `components/sections/DemoExplainer.tsx` | 7-phase client-side state machine simulating detect→analyze→adapt→harden→share with a fake threat (`TROJAN.SIM.0XF7A2`). Streaming console + fleet propagation SVG |
| `/pricing` | `components/sections/heroes/PricingHero.tsx` | `components/sections/PricingFAQ.tsx` | 6 expandable Q&A items |

## 7. Design conventions

**Palette** lives in `app/globals.css` `@theme {}` block. Use Tailwind classes
that reference these via arbitrary values (e.g. `text-[#7CC4FF]`) since Tailwind
v4 beta doesn't fully resolve theme variables in all contexts yet.

| Token | Hex | Use |
|---|---|---|
| `--color-background` | `#0A0E1A` | Page background |
| `--color-surface` | `#111827` | Card surface |
| `--color-surface-elevated` | `#1A2236` | Raised card surface |
| `--color-primary` | `#7CC4FF` | **Cyan accent — sparingly** |
| `--color-primary-bright` | `#A8D8FF` | Hover/highlight cyan |
| `--color-text-primary` | `#E8EEF7` | Body text |
| `--color-text-secondary` | `#94A3B8` | Muted text |
| `--color-text-muted` | `#64748B` | Eyebrows, labels |
| `--color-success` | `#34D399` | System Active dots |
| `--color-warning` | `#FBBF24` | Alert/latency amber |
| `--color-danger` | `#F87171` | Critical/red |

**Motion presets** are in `lib/motion.ts`:

- `fadeUp` — single element, 0.7s easeOutSoft
- `fadeUpStagger` + `fadeUpItem` — parent/child for grids
- `viewportOnce = { once: true, amount: 0.2 }` — standard `whileInView` viewport config

**Always respect `prefers-reduced-motion`.** Global CSS rule kills animations,
plus framer-motion's `useReducedMotion` for JS-driven cases (see `ParticleField`,
`ProgressBar`, `useCountUp`, `ThreatMap`).

**Custom utilities** in `globals.css`:

- `.bg-grid` / `.bg-grid-fine` — 64px / 32px grid backgrounds
- `.mask-radial-fade` / `.mask-radial-fade-bottom` — content masks
- `.glass` / `.glass-strong` — glassmorphism with backdrop-blur
- `.gradient-border` — masked pseudo-element gradient border
- `.scanline` — animated scanline overlay (used on CodeBlock)
- `.pulse-dot` — radiating ring pulse (used on System Active dots)
- `.text-gradient-cyan` — cyan-blue gradient on text
- `.text-gradient-soft` — slate gradient on text

## 8. Environment quirks (READ before re-running)

This project was bootstrapped on a machine with **no Node, no Homebrew, no gh CLI**
pre-installed. All three were installed user-locally to `~/.local/`:

```
~/.local/node     Node 22.11.0 LTS (darwin-x64 tarball)
~/.local/gh       gh CLI 2.65.0 (macOS amd64 zip)
~/.local/bin      symlinks: node, npm, npx, gh
```

`~/.local/bin` is already on PATH on this user's machine (Claude Code itself
lives there). If a future agent picks this up on a different machine, install
Node 22 LTS + gh however you like — there's nothing exotic about the runtime.

**Original dev server** in the bootstrap session ran on port `3010` (not 3000)
to avoid collisions. `package.json` has no port pinned — `npm run dev` defaults
to 3000. Either is fine.

**Git identity** for this repo (set local-only, not global):
```
user.name = Akshaj Karimanikkam
user.email = akshajkarimanikkam@gmail.com
```

## 9. How to verify the site works (end-to-end)

```bash
npm install
npm run typecheck    # must exit 0 with zero output
npm run build        # 8 routes should pre-render static
npm run dev          # then curl each route, expect HTTP 200
```

```bash
for r in / /platform /how-it-works /coverage /pricing; do
  curl -s -o /dev/null -w "$r %{http_code}\n" http://localhost:3000$r
done
```

Expected build output (sizes will drift slightly):

```
Route (app)              Size    First Load JS
○ /                      110 kB    287 kB    ← Recharts is the bulk
○ /coverage             4.55 kB    166 kB
○ /how-it-works          208 B     168 kB
○ /platform             1.62 kB    165 kB
○ /pricing              1.65 kB    162 kB
```

## 10. Open TODOs (in priority order)

### Easy wins (each ≤30 min)
- [ ] Wire `useCountUp` into `StatCard` so metric strips count up on viewport-enter (hook is built; just needs to be called from `StatCard` with `useInViewport` and a `parseFloat` of the value prop)
- [ ] Add `className` prop to `SectionHeader` for per-section spacing overrides — currently does have `className` but only on the outer motion.div; need to also forward for tighter sections
- [ ] Replace the `next/link` `prefetch` defaults with `prefetch={false}` for footer links to reduce initial JS

### Medium effort
- [ ] Per-route OG images — current single `og-image.svg` is generic; add per-route variants matching each hero
- [ ] Swap Recharts for a hand-rolled SVG area chart on `CyberReality` (would shave ~50 KB from home First Load JS)
- [ ] Lighthouse run on a deployed instance (see "Deployment" below)
- [ ] Real backend for the email signup form in `CTA` (currently presentational; could wire to a Next.js Route Handler + Resend/Loops)

### Larger / future
- [ ] Tailwind v4 stable bump when v4 GA ships
- [ ] Per-section sub-pages for thesis defense (e.g., `/thesis` deep-link pulling from the `Thesis` section)
- [ ] Dark/light theme toggle is **not** a goal — brand is intentionally dark only
- [ ] Tests — none exist; out of scope for thesis but a natural follow-up if this becomes a real product

### Deployment (deliberately deferred)
The repo is not deployed yet. Recommended path: Vercel zero-config import. Or a
static export via `next build` + hosting on any CDN, since all routes pre-render.

## 11. Change log

### 2026-05-03 — Interactive demo
- Added `/demo` route — client-side state-machine simulation of the full adaptive cycle, no real malware
- New components: `components/sections/InteractiveDemo.tsx` (7-phase state machine: idle → detect → analyze → adapt → harden → share → complete; streaming engine console; fleet propagation SVG; reset button), `components/sections/heroes/DemoHero.tsx` (with prominent "Simulation only" amber disclaimer pill), `components/sections/DemoExplainer.tsx` (4 cards explaining what each phase did)
- Fake threat name used: `TROJAN.SIM.0XF7A2` — the `.SIM.` infix is intentional to make the simulated nature obvious in screenshots and screen recordings
- Wired home Hero's "Watch Demo" button to navigate to `/demo`
- Added `Demo` to NAV_LINKS (between Coverage and Pricing); removed the "Company" anchor link to keep nav at 5 items
- All 6 routes (incl. `/demo`) typecheck clean; dev server compiles clean

### 2026-05-02 — Bootstrap session
- Installed Node 22.11 LTS user-locally (no sudo, no Homebrew)
- Scaffolded Next.js 15.1 → bumped to 15.5 mid-session for CVE-2025-66478
- Built design tokens, motion presets, hooks, 9 ui primitives, 8 shared components
- Built all 20 home sections + bonus `ThreatMapSection`
- Built 4 deep-link routes initially using shared `Hero` everywhere
- **Same day:** rewrote routes — built 4 unique heroes (PlatformHero, HowHero, CoverageHero, PricingHero) and 4 route-unique sections (EngineSpec, CycleDiagram, OSWall, PricingFAQ); rewired all 4 page assemblies
- TypeScript strict clean, build clean, all 5 routes return 200
- Installed gh CLI 2.65 user-locally; user authenticated as `akshajkarimanikkam-commits`
- Created public repo, pushed initial commit (67 files)
- Wrote this `CLAUDE.md` for future-session handoff

## 12. Conventions to keep

- **No emojis in UI.** Brand is serious. (Allowed in this `CLAUDE.md`.)
- **No stock illustrations or 3D characters.** Visuals are abstract: grids, particles, code, network diagrams, icons.
- **`rounded-lg` for cards** (12px), `rounded-full` only for status pills.
- **Cyan accent sparingly** — white/slate is the dominant text color; cyan is punctuation.
- **Tight tracking on headings** (`-0.02em` to `-0.04em`) and `1.04`–`1.1` line-height.
- **Min 96px (`py-24`) between major sections** on desktop. `SectionShell` enforces this.
- **All section copy lives in `lib/constants.ts`** — never inline. This is the single source of truth, and it's what made it easy to keep voice consistent across 20 sections.
- **Components under 200 lines.** Split if larger.
- **No `any`.** TypeScript strict.

## 13. Things future-me should NOT do

- Don't `npx create-next-app` over this. The scaffold was hand-built deliberately.
- Don't add a light theme. The brand is intentionally dark only.
- Don't install `shadcn-ui` CLI. The primitives are hand-rolled with the same patterns; adding the CLI would create a parallel set of components and confuse imports.
- Don't add Husky / lint-staged / pre-commit hooks unless the user explicitly asks. This is a thesis repo, not a multi-developer codebase.
- Don't downgrade Next.js below 15.5 — security CVE.
