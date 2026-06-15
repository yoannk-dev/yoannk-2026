# yoann-k.com

My personal portfolio website — built with React 18, TypeScript, and Vite.

## Tech stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Styling:** SCSS Modules + design tokens (`src/styles/_variables.scss`)
- **i18n:** Custom context-based solution, two locales (`fr` / `en`), persisted in `localStorage`
- **Theme:** Dark / light toggle, persisted in `localStorage`, applied as `data-theme` on `<html>`
- **Testing:** Vitest 3 + Testing Library + jsdom
- **Package manager:** pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Type-check + production build |
| `pnpm preview` | Preview production build locally |
| `pnpm c:test` | Run test suite |
| `pnpm c:type` | TypeScript type-check |
| `pnpm c:lint` | ESLint |

## Project structure

```
src/
├── components/       # Page sections (Hero, About, Experience, Projects, Stack, Contact, Footer, TopBar)
│   └── Reveal.tsx    # Scroll-reveal wrapper
├── context/          # LocaleProvider
├── hooks/            # useLocale, useTheme, useScrollReveal
├── i18n/             # Translations (fr/en), locale context, localise helper
├── styles/           # SCSS design tokens
├── test/             # Vitest setup and shared helpers
└── types/            # Shared TypeScript types
```

## License

All rights reserved — Yoann Kermet.
