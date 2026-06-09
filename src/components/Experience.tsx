import { useLocale } from '../hooks/useLocale';
import { EXPERIENCE } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './Experience.module.scss';

function Arrow() {
  return (
    <svg className={styles.arr} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Experience() {
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
          {EXPERIENCE.map((it, i) => (
            <Reveal as="article" className={styles.xpRow} key={i} d={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className={`${styles.yr} mono`}>{it.yr}</div>
              <div className={styles.role}>{it.role[locale]}</div>
              {it.url
                ? <a className={styles.co} href={it.url} target="_blank" rel="noopener">{it.co}<Arrow /></a>
                : <div className={styles.co} style={{ color: 'var(--muted)' }}>{it.co}</div>}
              <div className={styles.dsc}>{it.dsc[locale]}</div>
              <div className={styles.tags} style={{ gridColumn: '2' }}>
                {it.tags.map((tag) => (
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
