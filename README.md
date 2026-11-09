# Deccan Waffle House — brand website

A premium, motion-led marketing site for **Deccan Waffle House** (Hyderabad): golden waffles, cold mocktails, fries and quick bites, with a multi-outlet branch directory.

Built with React 18, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## What's inside

- **Cinematic hero** — layered parallax, chocolate-drip SVG, floating ingredients, live scroll progress and a branded preloader.
- **Interactive menu** — eight categories (Signature Waffles, Bowl Cakes, Waffle Pizza, Classic Waffles, Biscuit Waffles, Mocktails, Fries, Nuggets) transcribed with real prices from the in-store menu card, with animated filtering, veg/non-veg labels and per-item imagery.
- **Brand story** — editorial split layout with parallax photography and three service pillars.
- **Find your Deccan** — searchable branch directory with a scroll-respecting map preview, Get Directions (Google Maps), click-to-call, WhatsApp and a placeholder outlet card ready for new locations.
- **Gallery** — filterable masonry with a keyboard-accessible lightbox (Esc / ← / →).
- **Contact** — validated enquiry form that composes a WhatsApp message, plus direct call/WhatsApp lines.
- **Offers** — hidden until real offers are configured (`src/data/offers.ts`).
- Accessibility: semantic landmarks, skip link, focus states, `prefers-reduced-motion` support, labelled controls.

## Editing content

Everything customer-facing is data-driven:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Brand name, tagline, intro, story copy, phone numbers, social links, nav |
| `src/data/branches.ts` | Outlet list, addresses, hours, phones, map coordinates |
| `src/data/menu.ts` | Categories, items, descriptions, prices, veg flags |
| `src/data/gallery.ts` | Gallery items and categories |
| `src/data/offers.ts` | Combos and offers (section auto-hides when empty) |
| `src/data/credits.ts` | Photography attribution shown in the footer |

Adding an outlet means adding one object to `branches.ts` — the directory, map, filter, footer and contact form pick it up automatically.

## Content status (important)

- **No public web listing** for this exact business could be verified during research (see `docs/RESEARCH.md`). Nothing on the site invents ratings, reviews, founding history or delivery listings.
- **Branch street address and opening hours are intentionally blank** and render as "awaiting confirmation". Fill them in `branches.ts` when confirmed.
- **Menu prices are real** (from the shop's printed card). Update `src/data/menu.ts` when the counter changes them; sizes such as Medium/Large use the `prices` array.
- **Social profiles** are not linked because no verified handles were found; the footer shows a neutral placeholder until `site.socials` is populated.
- **Photography is illustrative stock** (Wikimedia Commons / Openverse, Creative Commons) — not photos of the actual outlet. Replace with the owner's own photography and update `credits.ts`.
- The two phone numbers come from the brand signage and are presented as central enquiry lines until outlet mapping is confirmed.

## License

Code in this repository is provided for the Deccan Waffle House project. Bundled photographs retain their original Creative Commons licences — see `src/data/credits.ts`.
