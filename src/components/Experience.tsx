import styles from './Experience.module.scss';

const EXPERIENCES = [
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
];

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>Experience</h2>
          <span className={styles.idx}>(02)</span>
        </div>

        <div className={styles.xpContainer}>
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={styles.xpRow}>
              <div className={styles.yr}>{exp.years}</div>
              <div className={styles.content}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.co}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {exp.company}
                  </a>
                  <span className={styles.arr}>↗</span>
                </div>
                <div className={styles.dsc}>{exp.description}</div>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
