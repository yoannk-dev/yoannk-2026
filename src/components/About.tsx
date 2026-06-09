import { useLocale } from '../hooks/useLocale';
import { ABOUT_BODY, ABOUT_META } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './About.module.scss';

function L(v: string | { fr: string; en: string }, lang: 'fr' | 'en'): string {
  return typeof v === 'string' ? v : v[lang];
}

export function About() {
  const { locale, t } = useLocale();

  return (
    <section id="about">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>01</span>
              {t.sections.about}
            </h2>
            <span className={`${styles.idx} mono`}>// profile</span>
          </div>
        </Reveal>

        <div className={styles.about}>
          <Reveal>
            <div>
              {ABOUT_BODY[locale].map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal as="div" d={1} className={styles.meta}>
            {ABOUT_META.map((m, i) => (
              <div className={styles.row} key={i}>
                <div className={`${styles.mono}`}>{L(m.k, locale)}</div>
                <div className={styles.v}>{L(m.v, locale)}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
