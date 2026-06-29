import { useLocale } from '../../hooks/useLocale';
import { EXPERIENCE } from '../../i18n/translations';
import { Arrow } from '../Arrow';
import { Reveal } from '../Reveal';
import styles from './Experience.module.scss';

export default function Experience() {
  const { locale, t } = useLocale();

  return (
    <section id="work">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <h2>
              <span className={`${styles.sectionNumber} mono`}>02</span>
              {t.sections.work}
            </h2>
            <span className={`${styles.sectionLabel} mono`}>// experience</span>
          </div>
        </Reveal>

        <div>
          {EXPERIENCE.map((job, i) => (
            <Reveal as="article" className={styles.xpRow} key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className={`${styles.period} mono`}>{job.period}</div>
              <div className={styles.role}>{job.role[locale]}</div>
              {job.url
                ? <a className={styles.company} href={job.url} target="_blank" rel="noopener">{job.company}<Arrow className={styles.arrow} /></a>
                : <div className={`${styles.company} ${styles.companyMuted}`}>{job.company}</div>}
              <div className={styles.description}>{job.description[locale]}</div>
              <div className={styles.tags}>
                {job.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
