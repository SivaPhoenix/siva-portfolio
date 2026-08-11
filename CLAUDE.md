# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (hot reload)
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Preview production build locally
npm run preview
```

No test suite configured.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`, config lives in CSS)
- No router, no state management library

## Structure

Single-page app. All content currently in `src/App.jsx`. CSS split between:
- `src/index.css` — global tokens (CSS custom properties), base styles, Tailwind import
- `src/App.css` — component-scoped styles

Assets in `src/assets/`. Public static files (SVG sprite `icons.svg`, etc.) in `public/`.

## Tailwind v4 Notes

Config is CSS-first. Extend theme via `@theme` block in `src/index.css`, not a JS config file. Utility classes work as normal.

## Design Assets

Root `E:/portfolio/` contains:
- `Portfolio design specifications.zip` / `Portfolio design specifications-handoff.zip` — design handoff files
- `Siva_Sriram_Portfolio_Deck.pptx` — portfolio content reference
- `Portfolio-selection.png` — design selection reference

Check these before building new sections.
