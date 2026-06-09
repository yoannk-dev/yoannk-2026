export type Locale = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      stack: 'Stack',
      projects: 'Projects',
      writing: 'Writing',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for work',
      statementPre: 'Senior',
      statementBold: 'Front-End Engineer',
      statementPost: 'based in Paris.',
      statementLine2: '15 years building fast, accessible web interfaces with',
      cta: 'Get in touch',
      seeWork: 'See my work',
      expLabel: 'Experience',
      expValue: 'years in frontend',
      stackLabel: 'Stack',
    },
    about: {
      title: 'About',
      p1: "I'm a frontend engineer with 15 years of experience crafting intuitive, performant web interfaces. I specialize in React and TypeScript, focusing on clean code, accessibility, and user experience.",
      p2: 'Currently based in Paris, I work with teams to solve complex frontend challenges and deliver pixel-perfect implementations that scale.',
      locationLabel: 'Location',
      emailLabel: 'Email',
      availableLabel: 'Available',
      availableValue: 'For new opportunities',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          years: '2021–Present',
          role: 'Senior Frontend Engineer',
          company: 'Tech Startup Inc.',
          description: 'Leading frontend architecture and mentoring junior engineers on React best practices.',
          tags: ['React', 'TypeScript', 'Vite', 'SCSS'],
        },
        {
          years: '2018–2021',
          role: 'Frontend Engineer',
          company: 'Digital Agency Co.',
          description: 'Developed responsive web applications and optimized performance for 100k+ users.',
          tags: ['React', 'JavaScript', 'CSS-in-JS', 'Testing'],
        },
        {
          years: '2015–2018',
          role: 'Junior Frontend Developer',
          company: 'Web Design Studio',
          description: 'Built interactive UI components and maintained legacy systems during migration to React.',
          tags: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
        },
      ],
    },
    stack: {
      title: 'Stack',
      frontendLabel: 'Frontend',
      toolsLabel: 'Tools & Dev',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View project',
      items: [
        { title: 'Design System', description: 'Comprehensive component library for internal use' },
        { title: 'E-Commerce Platform', description: 'Modern storefront with real-time inventory' },
        { title: 'Analytics Dashboard', description: 'Real-time metrics visualization and reporting' },
        { title: 'Mobile App', description: 'Cross-platform mobile application' },
        { title: 'CMS Platform', description: 'Headless CMS with API-first approach' },
        { title: 'Video Streaming', description: 'Adaptive bitrate streaming platform' },
      ],
    },
    writing: {
      title: 'Writing',
      intro: 'Thoughts on frontend engineering, design systems, and web performance.',
      readTime: 'min',
      items: [
        { title: 'Building Performant React Applications', date: 'March 2024', readTime: '8 min' },
        { title: 'CSS Grid vs Flexbox: When to Use What', date: 'February 2024', readTime: '5 min' },
        { title: 'Accessibility-First Design Principles', date: 'January 2024', readTime: '7 min' },
        { title: 'TypeScript Patterns for Large Codebases', date: 'December 2023', readTime: '10 min' },
      ],
    },
    contact: {
      title: 'Get in touch',
      lead: "Let's work together on your next project.",
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    marquee: ['React', 'TypeScript', 'JavaScript', 'Frontend', 'Web Design', 'CSS', 'Performance', 'Accessibility'],
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      stack: 'Stack',
      projects: 'Projets',
      writing: 'Articles',
      contact: 'Contact',
    },
    hero: {
      available: 'Disponible',
      statementPre: 'Ingénieur',
      statementBold: 'Front-End Senior',
      statementPost: 'basé à Paris.',
      statementLine2: '15 ans à concevoir des interfaces web rapides et accessibles avec',
      cta: 'Me contacter',
      seeWork: 'Voir mes projets',
      expLabel: 'Expérience',
      expValue: 'ans en frontend',
      stackLabel: 'Stack',
    },
    about: {
      title: 'À propos',
      p1: "Ingénieur frontend avec 15 ans d'expérience dans la conception d'interfaces web intuitives et performantes. Je me spécialise en React et TypeScript, avec un focus sur la qualité du code, l'accessibilité et l'expérience utilisateur.",
      p2: "Basé à Paris, je collabore avec des équipes pour résoudre des défis frontend complexes et livrer des implémentations pixel-perfect qui passent à l'échelle.",
      locationLabel: 'Localisation',
      emailLabel: 'Email',
      availableLabel: 'Disponible',
      availableValue: 'Pour de nouvelles opportunités',
    },
    experience: {
      title: 'Expérience',
      items: [
        {
          years: '2021–Présent',
          role: 'Ingénieur Frontend Senior',
          company: 'Tech Startup Inc.',
          description: "Direction de l'architecture frontend et accompagnement des ingénieurs juniors sur les bonnes pratiques React.",
          tags: ['React', 'TypeScript', 'Vite', 'SCSS'],
        },
        {
          years: '2018–2021',
          role: 'Ingénieur Frontend',
          company: 'Digital Agency Co.',
          description: "Développement d'applications web responsives et optimisation des performances pour plus de 100 000 utilisateurs.",
          tags: ['React', 'JavaScript', 'CSS-in-JS', 'Testing'],
        },
        {
          years: '2015–2018',
          role: 'Développeur Frontend Junior',
          company: 'Web Design Studio',
          description: "Conception de composants UI interactifs et maintenance de systèmes legacy lors de la migration vers React.",
          tags: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
        },
      ],
    },
    stack: {
      title: 'Stack',
      frontendLabel: 'Frontend',
      toolsLabel: 'Outils & Dev',
    },
    projects: {
      title: 'Projets',
      viewProject: 'Voir le projet',
      items: [
        { title: 'Design System', description: 'Bibliothèque de composants complète pour usage interne' },
        { title: 'Plateforme E-Commerce', description: 'Boutique moderne avec inventaire en temps réel' },
        { title: 'Dashboard Analytics', description: 'Visualisation et reporting de métriques en temps réel' },
        { title: 'Application Mobile', description: 'Application mobile multiplateforme' },
        { title: 'Plateforme CMS', description: 'CMS headless avec approche API-first' },
        { title: 'Streaming Vidéo', description: 'Plateforme de streaming à débit adaptatif' },
      ],
    },
    writing: {
      title: 'Articles',
      intro: 'Réflexions sur le développement frontend, les design systems et la performance web.',
      readTime: 'min',
      items: [
        { title: 'Créer des applications React performantes', date: 'Mars 2024', readTime: '8 min' },
        { title: 'CSS Grid vs Flexbox : quand utiliser quoi', date: 'Février 2024', readTime: '5 min' },
        { title: "L'accessibilité comme principe de conception", date: 'Janvier 2024', readTime: '7 min' },
        { title: 'Patterns TypeScript pour de grandes codebases', date: 'Décembre 2023', readTime: '10 min' },
      ],
    },
    contact: {
      title: 'Me contacter',
      lead: 'Travaillons ensemble sur votre prochain projet.',
    },
    footer: {
      rights: 'Tous droits réservés.',
      backToTop: 'Haut de page',
    },
    marquee: ['React', 'TypeScript', 'JavaScript', 'Frontend', 'Web Design', 'CSS', 'Performance', 'Accessibilité'],
  },
} as const;

export type Translations = typeof translations.en;
