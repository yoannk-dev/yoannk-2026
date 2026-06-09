import { useLocale } from '../hooks/useLocale';
import { WRITING } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './Writing.module.scss';

export function Writing() {
  const { locale, t } = useLocale();

  return (
    <section id="writing">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>05</span>
              {t.sections.writing}
            </h2>
            <span className={`${styles.idx} mono`}>// writing</span>
          </div>
        </Reveal>

        <Reveal as="p" d={1} className={styles.pintro}>{t.writingIntro}</Reveal>

        <Reveal as="div" d={1} className={styles.wlist}>
          {WRITING.map((w, i) => (
            <div className={styles.wrow} key={i}>
              <div className={styles.t}>{w.t[locale]}</div>
              <div className={styles.metaR}>
                <span className={styles.tag}>{w.tag}</span>
                <span className="mono">{t.soon}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
