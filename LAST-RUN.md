# Last Run — 2026-04-25

## Status: success

## What was attempted
Complete rewrite of `components/hero.tsx` — replaced video/circuit board/stars/particles hero with a clean two-column layout matching new copy and design spec.

## What succeeded
- Removed: video background, AuxanoChip import, PARTICLES array, RINGS arrays, dot grid, vignette, ambient bloom, scroll indicator, all animation layers
- New layout: two-column grid (text left, photo placeholder right) on desktop, stacked on mobile
- Exact copy: headline "A business owner's time is money.", full body with `$115,000` in emerald-400, CTA "Book your free consultation →" → /contact
- Photo placeholder: 3:4 dark rounded rect, subtle border + gradient, silhouette icon + "Photo coming soon" — looks intentional
- Background: #0D1117 (auxano-darker), clean with no effects
- Framer Motion fade-ins on both columns
- Build passes clean

## What failed
Nothing.

## Current state
Buildable. Committed, not pushed. Hero is fully replaced. Next: Corbin swaps placeholder for real headshot when ready.

---

# Previous Run — 2026-04-24

## Status: success

## What was attempted
Circuit board cleanup — reduce paths from 24 to 14 for a cleaner look over the video background.

## What succeeded
- **`components/ui/cpu-architecture.tsx`**: PATHS array trimmed from 24 to 14. Removed: corner staircase sweeps (4), horizontal branch paths (2), inner top shortcuts (2), and one redundant path from each of left/right side groups. Kept all 4 cardinal groups (left, right, top, bottom) with their main artery and two clean sweeps each. ARTERY_INDICES updated to match new indices `{1, 4, 7, 8, 11, 12}`. Secondary line `strokeOpacity` reduced to 0.4 and stroke thinned from 1.2 to 1. Chip body, pins, corner accents, glow effects, and light orbs all untouched.
- **`app/globals.css`**: cpu-line classes trimmed from 24 down to 14, with animation durations/delays preserved from their original counterparts. Removed cpu-line-15 through cpu-line-24 entirely.
- Build passes clean.
- Committed: `144a9fa`

## What failed
Nothing.

## Current state
Buildable. Committed, not pushed. Circuit board has 14 balanced paths radiating cleanly from chip center with symmetry on all four sides. Less visual noise over the video background. To revert, see git history.

---

# Previous Run — 2026-04-24 (Session before this)

## Status: success

## What was attempted
Full light mode swap across the entire site as a visual preview experiment. No toggle logic — straight color replacement.

## What succeeded
- `app/globals.css`: Brand variables swapped (dark-base → #F8FAFC, darker → #FFFFFF, card → #FFFFFF, border → #E2E8F0, secondary/light → darker emerald shades for contrast on light bg). Body class → `bg-white text-gray-900`. Hero space bg → emerald-tinted white gradient. Vignette made very subtle. Headline text-shadow adapted for light.
- `components/hero.tsx`: Star field divs removed. Circuit board → `text-emerald-500/20` (subtle emerald lines on white). Headline → text-gray-900, gradient from-emerald-600. Subtitle → text-emerald-700/60. "Our Services" outline button → text-emerald-700 / border-emerald-600.
- `components/nav.tsx`: `bg-white/90`, logo `text-gray-900`, inactive links `text-gray-500 hover:text-gray-900`, mobile menu `bg-white`.
- `components/footer.tsx`: text-white → text-gray-900, gray-400 → gray-500.
- `components/services-overview.tsx`: All text swapped to dark-on-light.
- `components/showcase.tsx`: text-white → text-gray-900, text-gray-400 → text-gray-600.
- `components/bottom-cta.tsx`: Gradient from-emerald-50/to-white, text-gray-900, text-emerald-700.
- `components/scroll-transition.tsx`: Bridge gradient target → #FFFFFF.
- `app/services/page.tsx`: All headings, body text, jump-link nav cards swapped to light.
- Build passes clean. Committed: `4798909`.

## What failed
Nothing.

## Current state
Buildable. Committed, not pushed. Site is in light mode. To revert to dark, restore brand color variables from commit `6941ccf` (the commit before this one) in globals.css, and restore hero.tsx star fields + original text colors.
