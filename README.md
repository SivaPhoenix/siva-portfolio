# Siva Sriram — Portfolio

Personal portfolio site for **Siva Sriram A B** — AI Developer & Full Stack (MERN) Developer. Terminal/hacker-themed single-page site built with React 19, Vite, and Tailwind CSS v4.

**Live:** _add your deployed URL here_

## Stack

- **React 19** + **Vite** — build tooling, HMR
- **Tailwind CSS v4** — CSS-first config (`@theme` block in `src/index.css`, no `tailwind.config.js`)
- **Three.js** — animated particle field background (Contact section)
- **react-pdf** — inline resume viewer
- **react-github-calendar** — live GitHub contribution graph
- **react-icons** — skill/tool icons
- **@vercel/analytics** — page-view tracking (active once deployed on Vercel)

No router, no state management library — single page, hash-anchor navigation.

## Getting started

```bash
npm install
npm run dev       # start dev server with HMR
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  components/       # one component per section (Hero, About, Projects, Resume, Contact, ...)
  data/
    personalInfo.js # single source of truth — name, bio, skills, tools, socials, resume meta
    projects.js      # project cards (title, tags, links, thumbnail)
  assets/            # resume PDF, project thumbnails, images
  index.css          # Tailwind import + design tokens (@theme) + global styles
  App.jsx            # page composition + boot animation gate
public/
  robots.txt, favicon, icons.svg
```

## Editing content

Almost everything on the site is driven by **[`src/data/personalInfo.js`](src/data/personalInfo.js)** — edit that one file to update:

- name, role, tagline, bio
- skills and tools-used grid
- social links (GitHub, LinkedIn, Twitter, Instagram, mail, WhatsApp)
- resume file metadata
- footer text

Projects are listed in **[`src/data/projects.js`](src/data/projects.js)** — add a `thumb` field pointing at an image in `src/assets/project/` for a thumbnail.

## Deployment

Configured for **Vercel**:

- `vercel.json` rewrites every path to `index.html` (SPA fallback — no 404 on reload/deep-link)
- Build command: `npm run build`, output directory: `dist`
- Push to your connected Git remote, or run `vercel --prod`

## Notes

- GitHub contribution calendar shows **public** contributions only (same data a logged-out visitor sees on GitHub) — private-repo activity can't be shown without exposing a personal token client-side.
- Boot animation and reduced-motion support respect `prefers-reduced-motion`.
