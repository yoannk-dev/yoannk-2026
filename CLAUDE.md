# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + production build (tsc -b && vite build)
pnpm preview      # Preview production build locally
pnpm c:lint       # ESLint with --max-warnings 0
pnpm c:type       # TypeScript type-check without emit
pnpm c:test       # Run test suite once (vitest run)
pnpm test         # Run tests in watch mode
```

Use **pnpm** (not npm or yarn).

## Architecture

React 18 + TypeScript + Vite personal portfolio site.

**Source layout (`src/`):**
- `components/` — Page-section components (Hero, About, Experience, Projects, Stack, Writing, Contact, Footer, TopBar) plus shared primitives (`Arrow.tsx`, `Reveal.tsx`)
- `context/` — React context providers (`LocaleProvider.tsx`)
- `hooks/` — Custom React hooks (`useLocale.ts`, `useScrollReveal.ts`, `useTheme.ts`)
- `i18n/` — Internationalisation: `localeContext.ts` (context shape), `localise.ts` (helper), `translations.ts` (fr/en strings)
- `types/` — Shared TypeScript type definitions (`locale.ts`)
- `styles/_variables.scss` — SCSS design tokens/variables

**Path alias:** `@` resolves to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling:** SCSS modules (`.module.scss`) per component; global reset and font in `src/index.css`; design tokens in `src/styles/_variables.scss`.

**i18n:** Two locales (`fr` | `en`). `LocaleProvider` stores the active locale in `localStorage` (`yk-lang`). Use the `useLocale()` hook to access `{ locale, toggle, t }` anywhere in the tree. The `localise()` helper resolves a `string | Record<Locale, string>` to the active language.

**Theme:** Dark/light toggle via `useTheme()`. Active theme stored in `localStorage` (`yk-theme`); applied as `data-theme` on `<html>`. Defaults to `dark`.

**TypeScript:** Strict mode enabled; `noUnusedLocals` and `noUnusedParameters` are enforced — clean up unused code before building.

## Testing

**Stack:** Vitest 3 + jsdom + `@testing-library/react` + `@testing-library/user-event` + `@testing-library/jest-dom`.

**Test files:** co-located `*.test.tsx` next to each component/hook. No snapshots — behavior only.

**Coverage:** 11 test files, 75 tests across all page-section components and hooks.

**Shared helper:** `src/test/helpers.tsx` exports `renderWithProviders(ui, { locale })` — wraps in `<LocaleProvider>` and seeds `localStorage` before render to control locale.

**Global mocks** (applied in `src/test/setup.ts`):
- `localStorage` — in-memory store; call `localStorage.clear()` in `beforeEach` to reset between tests
- `IntersectionObserver` — no-op stub (required by `Reveal`)
- `matchMedia` — stub returning `matches: false`

**Conventions:**
- Prefer `getByRole` over `querySelector` for queries
- Use `getAllByText` when the same string legitimately appears multiple times (e.g. marquee keywords, shared role labels)
- SCSS modules return `{}` in tests (`css: false`) — never assert on hashed class names; assert on behavior and DOM structure instead
- To test a component in a specific locale, pass `{ locale: 'en' }` to `renderWithProviders`; default is `'fr'`
