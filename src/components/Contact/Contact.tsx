import { useLocale } from '../../hooks/useLocale';
import { CONTACT_ROWS } from '../../i18n/translations';
import { localise } from '../../i18n/localise';
import { Arrow } from '../Arrow';
import { Reveal } from '../Reveal';
import styles from './Contact.module.scss';

const emailRow = CONTACT_ROWS.find((row) => row.label === 'EMAIL')!;

export default function Contact() {
  const { locale, t } = useLocale();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <h2>
              <span className={`${styles.sectionNumber} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>06</span>
              {t.sections.contact}
            </h2>
            <span className={`${styles.sectionLabel} mono`}>// contact</span>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.lead}>{t.contactLead}</div>
          <div className={styles.emailBig}>
            <a href={emailRow.href}>{emailRow.value}</a>
          </div>
          <div className={styles.contactLinks}>
            {CONTACT_ROWS.filter((row) => row.href).map((row, i) => (
              <a className={styles.contactLink} key={i} href={row.href} target={row.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                <span className="mono" style={{ color: 'var(--faint)' }}>{localise(row.label, locale)}</span>
                {row.value}<Arrow className={styles.arrow} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
