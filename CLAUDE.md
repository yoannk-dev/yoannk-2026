# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + production build (tsc -b && vite build)
pnpm preview      # Preview production build locally
pnpm c:lint       # ESLint with --max-warnings 0
pnpm c:type       # TypeScript type-check without emit
```

Use **pnpm** (not npm or yarn). No test runner is configured yet.

## Architecture

React 18 + TypeScript + Vite personal portfolio site.

**Source layout (`src/`):**
- `components/` — React components
- `hooks/` — Custom React hooks
- `config/` — App-level configuration
- `types/` — Shared TypeScript type definitions
- `styles/_variables.scss` — SCSS design tokens/variables

**Path alias:** `@` resolves to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling:** SCSS modules (`.module.scss`) per component; global reset and font in `src/index.css`; design tokens in `src/styles/_variables.scss`.

**TypeScript:** Strict mode enabled; `noUnusedLocals` and `noUnusedParameters` are enforced — clean up unused code before building.
