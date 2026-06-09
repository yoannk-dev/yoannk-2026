import { useLocale } from '../hooks/useLocale';
import { PROJECTS } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './Projects.module.scss';

function Arrow() {
  return (
    <svg className={styles.arr} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Projects() {
  const { locale, t } = useLocale();

  return (
    <section id="projects">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>04</span>
              {t.sections.projects}
            </h2>
            <span className={`${styles.idx} mono`}>// projects</span>
          </div>
        </Reveal>

        <Reveal as="p" d={1} className={styles.pintro}>{t.projectsIntro}</Reveal>

        <Reveal as="div" d={1} className={styles.cards}>
          {PROJECTS.map((p, i) => {
            const live = !!p.href;
            if (live) {
              return (
                <a className={`${styles.card} ${styles.live}`} key={i} href={p.href}>
                  <div className={styles.top}>
                    <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.badge}>Live</span>
                  </div>
                  <h3>{p.name[locale]}</h3>
                  <div className={styles.blurb}>{p.blurb[locale]}</div>
                  <span className={styles.go}>{t.viewSite}<Arrow /></span>
                </a>
              );
            }
            return (
              <div className={styles.card} key={i}>
                <div className={styles.top}>
                  <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.badge}>{t.soon}</span>
                </div>
                <h3>{p.name[locale]}</h3>
                <div className={styles.blurb}>{p.blurb[locale]}</div>
                <span className={styles.go}>{t.soon}<Arrow /></span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
