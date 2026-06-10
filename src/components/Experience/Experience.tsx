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
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>02</span>
              {t.sections.work}
            </h2>
            <span className={`${styles.idx} mono`}>// experience</span>
          </div>
        </Reveal>

        <div>
          {EXPERIENCE.map((job, i) => (
            <Reveal as="article" className={styles.xpRow} key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className={`${styles.yr} mono`}>{job.period}</div>
              <div className={styles.role}>{job.role[locale]}</div>
              {job.url
                ? <a className={styles.co} href={job.url} target="_blank" rel="noopener">{job.company}<Arrow className={styles.arr} /></a>
                : <div className={styles.co} style={{ color: 'var(--muted)' }}>{job.company}</div>}
              <div className={styles.dsc}>{job.description[locale]}</div>
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
