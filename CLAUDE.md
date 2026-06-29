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

React 19 + TypeScript + Vite personal portfolio site.

**Source layout (`src/`):**
- `components/` — Page-section components (Hero, About, Experience, Projects, Stack, Writing, Contact, Footer, TopBar) plus shared primitives (`Arrow.tsx`, `Reveal.tsx`). Some sections split into sub-components within their folder (e.g. `Hero/` contains `Clock.tsx`, `Marquee.tsx`, `ProfilePicture.tsx`, each with their own `.module.scss`).
- `context/` — React context providers (`LocaleProvider.tsx`)
- `hooks/` — Custom React hooks (`useLocale.ts`, `useScrollReveal.ts`, `useTheme.ts`)
- `i18n/` — Internationalisation: `localeContext.ts` (context shape), `localise.ts` (helper), `translations.ts` (fr/en strings)
- `types/` — Shared TypeScript type definitions (`locale.ts`)
- `assets/styles/` — SCSS partials: `_variables.scss` (design tokens), `_mixins.scss` (shared mixins), `_reset.scss` (global reset), `_reveal.scss` (scroll-reveal animation), `_hero-load.scss` (hero entrance animation)

**Path alias:** `@` resolves to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling:** SCSS modules (`.module.scss`) per component; global entry point is `src/index.scss` (fonts, tokens, theme); shared partials in `src/assets/styles/` loaded via `@use`; component SCSS modules import mixins with `@use '../../assets/styles/mixins' as *`.

**i18n:** Two locales (`fr` | `en`). `LocaleProvider` stores the active locale in `localStorage` (`yk-lang`). Use the `useLocale()` hook to access `{ locale, toggle, t }` anywhere in the tree. The `localise()` helper resolves a `string | Record<Locale, string>` to the active language. Context is exposed via the React 19 shorthand `<LocaleContext value={...}>` (no `.Provider`).

To mark words as bold inside a translated string, wrap them with `**word**` (e.g. `"mostly with **React** & **TypeScript**."`). Parse at render time with the `parseBold()` helper in `Hero.tsx`, which splits on that pattern and wraps matched tokens in `<strong>`.

**Theme:** Dark/light toggle via `useTheme()`. Active theme stored in `localStorage` (`yk-theme`); applied as `data-theme` on `<html>`. Defaults to `dark`.

**TypeScript:** Strict mode enabled; `noUnusedLocals` and `noUnusedParameters` are enforced — clean up unused code before building.

## Coding rules

**No inline styles in JSX.** Never use `style={{ ... }}` on JSX elements. All styles must live in the component's `.module.scss` file as named classes. If a style variant is needed, add a dedicated class (e.g. `.companyMuted`, `.clockValue`) and apply it via `className`.

**No ref mutations during render** (`react-hooks/refs`). Never read or write `ref.current` in the component body. Only access refs in event handlers or `useEffect`.

**No self-reference inside `useCallback`** (`react-hooks/immutability`). For recursive animation loops, use a ref wrapper: store the callback in a `useRef`, have the `useCallback` call `animateRef.current`, and sync the ref in a `useEffect`. See `ProfilePicture.tsx` for the pattern.

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
