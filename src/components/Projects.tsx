import styles from './Projects.module.scss';

const PROJECTS = [
  {
    id: 1,
    title: 'Design System',
    badge: 'React',
    description: 'Comprehensive component library for internal use',
    live: false,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    badge: 'Full Stack',
    description: 'Modern storefront with real-time inventory',
    live: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    badge: 'React',
    description: 'Real-time metrics visualization and reporting',
    live: false,
  },
  {
    id: 4,
    title: 'Mobile App',
    badge: 'React Native',
    description: 'Cross-platform mobile application',
    live: false,
  },
  {
    id: 5,
    title: 'CMS Platform',
    badge: 'Node.js',
    description: 'Headless CMS with API-first approach',
    live: false,
  },
  {
    id: 6,
    title: 'Video Streaming',
    badge: 'React',
    description: 'Adaptive bitrate streaming platform',
    live: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>Projects</h2>
          <span className={styles.idx}>(04)</span>
        </div>

        <div className={styles.cards}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.live ? styles.live : ''}`}
            >
              <div className={styles.top}>
                <div className={styles.n}>{String(project.id).padStart(2, '0')}</div>
                <span className={styles.badge}>{project.badge}</span>
              </div>

              <h3>{project.title}</h3>
              <p className={styles.blurb}>{project.description}</p>

              {project.live && (
                <div className={styles.go}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    View project
                  </a>
                  <span className={styles.arr}>↗</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
