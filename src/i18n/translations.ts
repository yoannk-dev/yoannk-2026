import type { Locale } from '../types/locale';

export const translations = {
  fr: {
    nav: {
      work: 'Parcours',
      stack: 'Stack',
      projects: 'Projets',
      // writing: 'Écrits',
      contact: 'Contact',
    },
    hero: {
      role: 'Senior Front-End Engineer',
      available: 'Disponible pour de nouveaux projets',
      contactCta: 'Écrivez-moi',
      statement: 'Je conçois et construis des interfaces web rapides, accessibles et durables — surtout en **React** & **TypeScript**.',
    },
    sections: {
      about: 'Profil',
      work: 'Parcours',
      stack: 'Stack & compétences',
      projects: 'Projets',
     // writing: 'Écrits',
      contact: 'Travaillons ensemble',
    },
    now: 'À Paris',
    yearsLabel: 'ans d\'expérience',
    rolesLabel: 'entreprises',
    stackLabel: 'stack principale',
    componentsLabel: 'composants livrés',
    viewSite: 'Voir le site',
    live: 'En ligne',
    soon: 'Bientôt',
    projectsIntro: 'Ce que je construis. Section régulièrement mise à jour.',
    writingIntro: 'Des notes sur le front-end, la performance, l\'architecture et l\'IA. Premiers articles à venir.',
    contactLead: 'Une idée, un poste, un café ?',
    backTop: 'Haut de page',
    colophon: 'Conçu & codé à Paris. Space Grotesk + JetBrains Mono.',
    rights: 'Tous droits réservés.',
    themeLight: 'Clair',
    themeDark: 'Sombre',
    aboutBody: [
      '15 ans d\'expérience sur des plateformes à fort trafic — immobilier et e-commerce. Expert React & TypeScript, « AI enthusiast », avec une forte sensibilité pour l\'architecture front-end, la performance et l\'expérience utilisateur.',
      'À l\'aise autant dans un rôle d\'exécution que de leadership technique.',
    ],
  },
  en: {
    nav: {
      work: 'Work',
      stack: 'Stack',
      projects: 'Projects',
      writing: 'Writing',
      contact: 'Contact',
    },
    hero: {
      role: 'Senior Front-End Engineer',
      available: 'Available for new projects',
      contactCta: 'Get in touch',
      statement: 'I design and build fast, accessible, long-lasting web interfaces — mostly with **React** & **TypeScript**.',
    },
    sections: {
      about: 'Profile',
      work: 'Experience',
      stack: 'Stack & skills',
      projects: 'Projects',
      writing: 'Writing',
      contact: 'Let\'s work together',
    },
    now: 'In Paris',
    yearsLabel: 'years of experience',
    rolesLabel: 'companies',
    stackLabel: 'core stack',
    componentsLabel: 'components shipped',
    viewSite: 'View site',
    live: 'Live',
    soon: 'Soon',
    projectsIntro: 'What I\'m building. Section regularly updated.',
    writingIntro: 'Notes on front-end, performance, architecture and AI. First articles coming soon.',
    contactLead: 'An idea, a role, a coffee?',
    backTop: 'Back to top',
    colophon: 'Designed & coded in Paris. Space Grotesk + JetBrains Mono.',
    rights: 'All rights reserved.',
    themeLight: 'Light',
    themeDark: 'Dark',
    aboutBody: [
      '15 years on high-traffic platforms — real estate and e-commerce. React & TypeScript expert, AI enthusiast, with a strong feel for front-end architecture, performance and user experience.',
      'Equally at ease executing or leading technically.',
    ],
  },
} as const satisfies Record<Locale, object>;

export type Translations = typeof translations.fr | typeof translations.en;

export const STATS = [
  { value: '15', labelKey: 'yearsLabel'      },
  { value: '5',  labelKey: 'rolesLabel'      },
  { value: '∞',  labelKey: 'componentsLabel' },
] as const;

export const KEYWORDS = [
  'React', 'TypeScript', 'Next.js', 'Performance', 'Architecture', 'IA', 'Micro-frontend', 'Design systems',
];

export const EXPERIENCE = [
  {
    period: '2023 — 2026',
    role: { fr: 'Senior Frontend Engineer', en: 'Senior Frontend Engineer' },
    company: 'Groupe SeLoger · AVIV Group',
    url: 'https://myselogerpro.com',
    description: {
      fr: 'Lead frontend de l\'équipe Portfolio (MySeLoger Pro) — la console de gestion des biens pour les pros de l\'immobilier. Architecture micro-frontend, nouvelles features, mentorat de juniors, guilde IA',
      en: 'Frontend lead of the Portfolio team (MySeLoger Pro) — the property-management console for real-estate pros. Micro-frontend architecture, junior mentoring, AI tooling integration.',
    },
    tags: ['React', 'Angular', 'TypeScript', 'Micro-frontend', 'Testing Library', 'Webpack'],
  },
  {
    period: '2022 — 2023',
    role: { fr: 'Frontend Engineer', en: 'Frontend Engineer' },
    company: 'Drouot Immobilier',
    url: 'https://drouot.immo',
    description: {
      fr: 'Plateforme d\'enchères immobilières en temps réel, développée from scratch : interface d\'enchères live (WebSockets) et moteur de recherche avancé.',
      en: 'Real-time real-estate auction platform built from scratch: live bidding UI (WebSockets) and an advanced search engine.',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'E2E'],
  },
  {
    period: '2020 — 2022',
    role: { fr: 'Co-fondateur & Lead Full-Stack freelance', en: 'Co-founder & Lead Full-Stack' },
    company: 'One More Time',
    url: '',
    description: {
      fr: 'Plateforme e-commerce de vêtements vintage. WordPress/WooCommerce headless, GraphQL, intégrations Algolia & Stripe, front Vue/Nuxt. + prestations freelance en parallèle.',
      en: 'Vintage clothing e-commerce platform. Headless WordPress/WooCommerce, GraphQL, Algolia & Stripe integrations, Vue/Nuxt front-end. + parallel freelance work.',
    },
    tags: ['Vue', 'Nuxt', 'GraphQL', 'Algolia', 'Stripe', 'Headless WP'],
  },
  {
    period: '2014 — 2020',
    role: { fr: 'Frontend Engineer & Product Manager', en: 'Frontend Engineer & Product Manager' },
    company: 'Birchbox / Blissim',
    url: 'https://blissim.fr',
    description: {
      fr: 'Responsable frontend : évolutions produit, intégrations marketing & éditoriales, management de l\'équipe front. PM de 2018 à 2020 : roadmaps trimestrielles, user stories, coordination design/dev/data.',
      en: 'Frontend lead: product evolutions, marketing & editorial integrations, managing the front-end team. PM 2018–2020: quarterly roadmaps, user stories, design/dev/data coordination.',
    },
    tags: ['React', 'WordPress', 'jQuery', 'Product'],
  },
  {
    period: '2008 — 2014',
    role: { fr: 'Frontend Engineer', en: 'Frontend Engineer' },
    company: 'Brainsonic · Digital Brotherhood · AF83',
    url: '',
    description: {
      fr: 'Premières années en agence digitale : intégration, projets clients à fort trafic, fondations du métier.',
      en: 'Early agency years: integration, high-traffic client projects, learning the craft from the ground up.',
    },
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
];

export const STACK_GROUPS = [
  { heading: { fr: 'Core',          en: 'Core'          }, items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { heading: { fr: 'Frameworks',    en: 'Frameworks'    }, items: ['Next.js', 'Angular', 'Vue', 'Nuxt', 'Ruby on Rails'] },
  { heading: { fr: 'Architecture',  en: 'Architecture'  }, items: ['Front-end architecture', 'Micro-frontend', 'Performance web', 'WebSockets'] },
  { heading: { fr: 'Au-delà du code', en: 'Beyond code' }, items: ['Coding assisté par IA', 'Mentorat & leadership', 'Vision produit (ex-PM)', 'Testing & E2E'] },
];

export const PROJECTS = [
  { name: { fr: 'Vinyles', en: 'Vinyles' }, blurb: { fr: 'Une application de suivi de collection de disques vinyles personnelle conçue avec Rails 8.1', en: 'A personal vinyl record collection tracker built with Rails 8.1' }, href: 'https://vinyles.yoann-k.com/', img: "/projects/vinyles.jpg" },
  { name: { fr: 'Gambit', en: 'Gambit' }, blurb: { fr: 'Lancez-vous dans une partie d\'échecs à deux, en vrai. (Utilisez un téléphone ou une tablette)', en: 'Get into a game of chess for two, in the real life. (Use a phone or a tablet)' }, href: 'https://chess.yoann-k.com/', img: "/projects/gambit.jpg" },
  { name: { fr: 'TS Fullstack Starter', en: 'TS Fullstack Starter' }, blurb: { fr: 'Monorepo TypeScript avec Next.js, tRPC, Prisma, Tailwind CSS, Turborepo et pnpm', en: 'TypeScript monorepo boilerplate with Next.js, tRPC, Prisma, Tailwind CSS, Turborepo & pnpm workspaces' }, href: 'https://github.com/yoannk-dev/ts-fullstack-starter', img: "/projects/starter.jpg" },
  { name: { fr: 'Drouot.immo', en: 'Drouot.immo' }, blurb: { fr: 'Une plateforme responsive construite de zéro, une architecture front-end scalable et maintenable. Enchères en direct', en: 'A responsive platform built from scratch, a scalable front-end architecture. Live Auction.' }, href: 'https://drouot.immo', img: "/projects/drouot-immo.jpg" },
  { name: { fr: 'Blissim', en: 'Blissim' }, blurb: { fr: 'Interface React/Next.js basée sur l\'API WordPress headless, afin de sortir du modèle monolithique classique', en: 'Built a React/Next.js front-end powered by the WordPress headless API, moving away from WordPress\'s traditional monolithic model.' }, href: 'https://blissim.fr', img: "/projects/blissim.jpg" },
];

export const WRITING = [
  { title: { fr: 'Micro-frontends sans la douleur',    en: 'Micro-frontends without the pain'      }, tag: 'Architecture' },
  { title: { fr: 'Mesurer (vraiment) la perf React',   en: 'Measuring React performance (for real)' }, tag: 'Performance'  },
  { title: { fr: 'Coder avec l\'IA, pas contre elle',  en: 'Coding with AI, not against it'         }, tag: 'AI'           },
];

export const ABOUT_META = [
  { label: { fr: 'FORMATION',   en: 'EDUCATION'   }, value: 'M1 Info-Comm · Univ. Nice-Sophia Antipolis' },
  { label: { fr: 'DISTINCTION', en: 'AWARD'        }, value: 'UX Awards 2016 · Best mobile journey' },
  { label: { fr: 'LANGUES',     en: 'LANGUAGES'    }, value: { fr: 'Français (natif) · Anglais (pro)', en: 'French (native) · English (pro)' } },
];

export const CONTACT_ROWS = [
  { label: 'EMAIL',                         value: 'yoannk.dev@gmail.com',    href: 'mailto:yoannk.dev@gmail.com' },
  { label: { fr: 'LIEU', en: 'BASED' },    value: 'Paris, Île-de-France',  href: '' },
  { label: 'LINKEDIN',                      value: 'in/yoannkermet',        href: 'https://linkedin.com/in/yoannkermet' },
  { label: 'GITHUB',                        value: 'yoannk-dev',            href: 'https://github.com/yoannk-dev' },
];
