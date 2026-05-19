# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Sugam Gunam**, a Naturopathy / Siddha / Acupuncture clinic in Chennai. Single-page landing site plus a `/login` page. Next.js 16 (App Router) with Tailwind v4, built as a fully static export and deployed to GitHub Pages.

Live site: https://ismatechx.github.io/SG/

## Commands

- `npm run dev` — local dev server (Turbopack) on port 3000
- `npm run build` — production build. Because `output: "export"` is set in `next.config.ts`, this also writes a static site to `out/`. There is no `next export` step.
- `npm run start` — only useful for non-export builds; the export site should be served with any static file server pointed at `out/`.

There is no test runner, linter, or formatter configured. `npm test` is a stub.

## Architecture

### Static export with a production-only basePath
`next.config.ts` switches `basePath` and `assetPrefix` on `NODE_ENV === "production"` so dev runs at `/` but the published site lives under `/SG/` on GitHub Pages. When adding internal links, use plain root-relative paths like `/login` — Next rewrites them with the basePath at build time. Do not hard-code `/SG/...`.

### Tailwind v4, CSS-first
There is no `tailwind.config.js`. The design tokens (the `sage-50…900` palette and `--font-sans`) are declared with `@theme { … }` inside `src/app/globals.css`. To add or rename a color, edit that block — don't reach for a config file.

PostCSS uses `@tailwindcss/postcss` (`postcss.config.cjs`). The `@/*` import alias maps to `./src/*`.

### Page composition
`src/app/page.tsx` is a thin shell that stacks the section components from `src/components/` in render order (Nav → Hero → Services → Philosophy → Treatments → About → Locations → Contact → Footer). Each section component owns its own layout, copy, and animations; there is no shared layout primitive beyond the root `layout.tsx`, which only loads the Inter font and sets `<body>` defaults.

Components that use hooks, refs, or browser APIs (e.g. `Nav`, `Hero`, `login/page.tsx`) must start with `"use client"`. Pure markup sections can stay server-rendered.

### Visual conventions
The look is sage-on-zinc: `sage-500` for primary accents and CTAs, `zinc-*` for neutrals, `rounded-full` pills for buttons. New UI should follow this rather than introduce a fresh palette.

### Login page
`src/app/login/page.tsx` is UI only — the submit handler is a stub that always returns "Authentication backend not connected yet." No auth provider is wired up. If real auth is added later, it has to be a client-SDK provider (Supabase, Firebase, Clerk, …) because the site is statically exported and there are no server routes.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`:
1. `npm ci && npm run build` (with `NODE_ENV=production`, which enables the `/SG` basePath)
2. `touch out/.nojekyll` so Pages serves `_next/` assets
3. Uploads `out/` and deploys via `actions/deploy-pages@v4`

Pages is configured with `build_type=workflow` (not the legacy "deploy from branch" mode). The repo must remain public for Pages to work on the free plan.

Pushing workflow file changes requires the gh token to include the `workflow` scope (`gh auth refresh -s workflow` if a push is rejected).
