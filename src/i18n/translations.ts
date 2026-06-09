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
    soon: 'Bientôt',
    projectsIntro: 'Des mini-sites et expériences que je construis ici. Chacun ouvrira sa propre page dès qu\'il sera prêt.',
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
    soon: 'Soon',
    projectsIntro: 'Mini-sites and experiments I build here. Each opens its own page once it\'s ready.',
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
  { n: '15', labelKey: 'yearsLabel'      },
  { n: '5',  labelKey: 'rolesLabel'      },
  { n: '∞',  labelKey: 'componentsLabel' },
] as const;

export const KEYWORDS = [
  'React', 'TypeScript', 'Next.js', 'Performance', 'Architecture', 'IA', 'Micro-frontend', 'Design systems',
];

export const EXPERIENCE = [
  {
    yr: '2023 — 2026',
    role: { fr: 'Senior Frontend Engineer', en: 'Senior Frontend Engineer' },
    co: 'Groupe SeLoger · AVIV Group',
    url: 'https://myselogerpro.com',
    dsc: {
      fr: 'Lead frontend de l\'équipe Portfolio (MySeLoger Pro) — la console de gestion des biens pour les pros de l\'immobilier. Architecture micro-frontend, nouvelles features, mentorat de juniors, guilde IA',
      en: 'Frontend lead of the Portfolio team (MySeLoger Pro) — the property-management console for real-estate pros. Micro-frontend architecture, junior mentoring, AI tooling integration.',
    },
    tags: ['React', 'Angular', 'TypeScript', 'Micro-frontend', 'Testing Library', 'Webpack'],
  },
  {
    yr: '2022 — 2023',
    role: { fr: 'Frontend Engineer', en: 'Frontend Engineer' },
    co: 'Drouot Immobilier',
    url: 'https://drouot.immo',
    dsc: {
      fr: 'Plateforme d\'enchères immobilières en temps réel, développée from scratch : interface d\'enchères live (WebSockets) et moteur de recherche avancé.',
      en: 'Real-time real-estate auction platform built from scratch: live bidding UI (WebSockets) and an advanced search engine.',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'E2E'],
  },
  {
    yr: '2020 — 2022',
    role: { fr: 'Co-fondateur & Lead Full-Stack freelance', en: 'Co-founder & Lead Full-Stack' },
    co: 'One More Time',
    url: '',
    dsc: {
      fr: 'Plateforme e-commerce de vêtements vintage. WordPress/WooCommerce headless, GraphQL, intégrations Algolia & Stripe, front Vue/Nuxt. + prestations freelance en parallèle.',
      en: 'Vintage clothing e-commerce platform. Headless WordPress/WooCommerce, GraphQL, Algolia & Stripe integrations, Vue/Nuxt front-end. + parallel freelance work.',
    },
    tags: ['Vue', 'Nuxt', 'GraphQL', 'Algolia', 'Stripe', 'Headless WP'],
  },
  {
    yr: '2014 — 2020',
    role: { fr: 'Frontend Engineer & Product Manager', en: 'Frontend Engineer & Product Manager' },
    co: 'Birchbox / Blissim',
    url: 'https://blissim.fr',
    dsc: {
      fr: 'Responsable frontend : évolutions produit, intégrations marketing & éditoriales, management de l\'équipe front. PM de 2018 à 2020 : roadmaps trimestrielles, user stories, coordination design/dev/data.',
      en: 'Frontend lead: product evolutions, marketing & editorial integrations, managing the front-end team. PM 2018–2020: quarterly roadmaps, user stories, design/dev/data coordination.',
    },
    tags: ['React', 'WordPress', 'jQuery', 'Product'],
  },
  {
    yr: '2008 — 2014',
    role: { fr: 'Frontend Engineer', en: 'Frontend Engineer' },
    co: 'Brainsonic · Digital Brotherhood · AF83',
    url: '',
    dsc: {
      fr: 'Premières années en agence digitale : intégration, projets clients à fort trafic, fondations du métier.',
      en: 'Early agency years: integration, high-traffic client projects, learning the craft from the ground up.',
    },
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
];

export const STACK_GROUPS = [
  { h: { fr: 'Core',          en: 'Core'          }, items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { h: { fr: 'Frameworks',    en: 'Frameworks'    }, items: ['Next.js', 'Angular', 'Vue', 'Nuxt'] },
  { h: { fr: 'Architecture',  en: 'Architecture'  }, items: ['Front-end architecture', 'Micro-frontend', 'Performance web', 'WebSockets'] },
  { h: { fr: 'Au-delà du code', en: 'Beyond code' }, items: ['Coding assisté par IA', 'Mentorat & leadership', 'Vision produit (ex-PM)', 'Testing & E2E'] },
];

export const PROJECTS = [
  { name: { fr: 'Projet 01', en: 'Project 01' }, blurb: { fr: 'Expérience à venir', en: 'Experiment coming soon' }, href: '' },
  { name: { fr: 'Projet 02', en: 'Project 02' }, blurb: { fr: 'Expérience à venir', en: 'Experiment coming soon' }, href: '' },
  { name: { fr: 'Projet 03', en: 'Project 03' }, blurb: { fr: 'Expérience à venir', en: 'Experiment coming soon' }, href: '' },
];

export const WRITING = [
  { t: { fr: 'Micro-frontends sans la douleur',    en: 'Micro-frontends without the pain'      }, tag: 'Architecture' },
  { t: { fr: 'Mesurer (vraiment) la perf React',   en: 'Measuring React performance (for real)' }, tag: 'Performance'  },
  { t: { fr: 'Coder avec l\'IA, pas contre elle',  en: 'Coding with AI, not against it'         }, tag: 'AI'           },
];

export const ABOUT_META = [
  { k: { fr: 'FORMATION',   en: 'EDUCATION'   }, v: 'M1 Info-Comm · Univ. Nice-Sophia Antipolis' },
  { k: { fr: 'DISTINCTION', en: 'AWARD'        }, v: 'UX Awards 2016 · Best mobile journey' },
  { k: { fr: 'LANGUES',     en: 'LANGUAGES'    }, v: { fr: 'Français (natif) · Anglais (pro)', en: 'French (native) · English (pro)' } },
];

export const CONTACT_ROWS = [
  { k: 'EMAIL',                         v: 'yoannk.dev@gmail.com',    href: 'mailto:yoannk.dev@gmail.com' },
  { k: { fr: 'LIEU', en: 'BASED' },    v: 'Paris, Île-de-France',  href: '' },
  { k: 'LINKEDIN',                      v: 'in/yoannkermet',        href: 'https://linkedin.com/in/yoannkermet' },
  { k: 'GITHUB',                        v: 'yoannk-dev',            href: 'https://github.com/yoannk-dev' },
];
