import { useLocale } from '../hooks/useLocale';
import styles from './Experience.module.scss';

export function Experience() {
  const { t } = useLocale();
  const x = t.experience;

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>{x.title}</h2>
          <span className={styles.idx}>(02)</span>
        </div>

        <div className={styles.xpContainer}>
          {x.items.map((exp, idx) => (
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
