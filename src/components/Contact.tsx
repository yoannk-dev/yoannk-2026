import { useLocale } from '../hooks/useLocale';
import { CONTACT_ROWS } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './Contact.module.scss';

function Arrow() {
  return (
    <svg className={styles.arr} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function L(v: string | { fr: string; en: string }, lang: 'fr' | 'en'): string {
  return typeof v === 'string' ? v : v[lang];
}

export function Contact() {
  const { locale, t } = useLocale();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>06</span>
              {t.sections.contact}
            </h2>
            <span className={`${styles.idx} mono`}>// contact</span>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.lead}>{t.contactLead}</div>
          <div className={styles.big}>
            <a href="mailto:yoannk.dev@gmail.com">yoannk.dev@gmail.com</a>
          </div>
          <div className={styles.clinks}>
            {CONTACT_ROWS.filter((r) => r.href).map((r, i) => (
              <a className={styles.clink} key={i} href={r.href} target={r.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener">
                <span className="mono" style={{ color: 'var(--faint)' }}>{L(r.k, locale)}</span>
                {r.v}<Arrow />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
