# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build (outputs to /dist)
npm run preview   # Preview production build locally
```

## Architecture

**Stack**: Astro 5 (server output) + React 19 + Tailwind CSS v4 + Vercel deployment

### Routing & Rendering

- **File-based routing** via `src/pages/`
- Output mode is `server` (SSR) to support dynamic routes and Astro Server Actions
- Exception: `blog/[...slug].astro` is `prerender = true` (static)
- Dynamic filtering on the blog index uses **Astro Server Actions** (`src/actions/categories.ts`)

### Layouts

- `RootLayout.astro` — base HTML shell with fonts, meta tags, `ClientRouter` (SPA transitions), and the `WarpBackground` shader
- `InfoLayout.astro` — wraps secondary pages (about, projects, contact, blog, univ)

### Data Sources

| Source | Used for |
|--------|----------|
| `src/content/articles/` (Markdown) | Blog/experience articles, schema in `src/content/config.ts` |
| `src/data/univ-projects.ts` | University projects (typed TypeScript array) |
| Inline data in `.astro` files | Portfolio projects (`projects.astro`) |

### Components

- `.tsx` files are React components (Navigation, WarpBackground) — used when client-side interactivity or hooks are needed
- `.astro` files are server-rendered components for everything else
- Animation: `motion/react` (formerly Framer Motion)
- Icons: `@iconify/react`
- Shader background: `@paper-design/shaders-react`

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.*`)
- Dark zinc theme (`bg-zinc-900`, `text-zinc-100`)
- Custom font via CSS variable `--font-geist` (Google Fonts, configured in `astro.config.mjs`)
- `@tailwindcss/typography` for Markdown prose rendering

### Language

The site is in **French** (`lang="fr"`). All UI text, dates (`fr-FR` locale via `src/lib/utils.ts`), and content are in French.
