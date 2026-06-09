import { useLocale } from '../../hooks/useLocale';
import { CONTACT_ROWS } from '../../i18n/translations';
import { localise } from '../../i18n/localise';
import { Arrow } from '../Arrow';
import { Reveal } from '../Reveal';
import styles from './Contact.module.scss';

const emailRow = CONTACT_ROWS.find((r) => r.k === 'EMAIL')!;

export default function Contact() {
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
            <a href={emailRow.href}>{emailRow.v}</a>
          </div>
          <div className={styles.clinks}>
            {CONTACT_ROWS.filter((r) => r.href).map((r, i) => (
              <a className={styles.clink} key={i} href={r.href} target={r.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                <span className="mono" style={{ color: 'var(--faint)' }}>{localise(r.k, locale)}</span>
                {r.v}<Arrow className={styles.arr} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
