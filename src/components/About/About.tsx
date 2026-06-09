import { useLocale } from '../../hooks/useLocale';
import { ABOUT_META } from '../../i18n/translations';
import { localise } from '../../i18n/localise';
import { Reveal } from '../Reveal';
import styles from './About.module.scss';

export default function About() {
  const { locale, t } = useLocale();

  return (
    <section id="about">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`}>01</span>
              {t.sections.about}
            </h2>
            <span className={`${styles.idx} mono`}>// profile</span>
          </div>
        </Reveal>

        <div className={styles.about}>
          <Reveal>
            <div>
              {t.aboutBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal as="div" delay={1} className={styles.meta}>
            {ABOUT_META.map((item, i) => (
              <div className={styles.row} key={i}>
                <div className={`${styles.mono}`}>{localise(item.label, locale)}</div>
                <div className={styles.v}>{localise(item.value, locale)}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
