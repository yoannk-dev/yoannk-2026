import { useLocale } from '../hooks/useLocale';
import styles from './Projects.module.scss';

const BADGES = ['React', 'Full Stack', 'React', 'React Native', 'Node.js', 'React'];
const LIVE = [false, true, false, false, false, true];

export function Projects() {
  const { t } = useLocale();
  const p = t.projects;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>{p.title}</h2>
          <span className={styles.idx}>(04)</span>
        </div>

        <div className={styles.cards}>
          {p.items.map((project, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${LIVE[idx] ? styles.live : ''}`}
            >
              <div className={styles.top}>
                <div className={styles.n}>{String(idx + 1).padStart(2, '0')}</div>
                <span className={styles.badge}>{BADGES[idx]}</span>
              </div>

              <h3>{project.title}</h3>
              <p className={styles.blurb}>{project.description}</p>

              {LIVE[idx] && (
                <div className={styles.go}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {p.viewProject}
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
