import { useLocale } from '../../hooks/useLocale';
import { WRITING } from '../../i18n/translations';
import { Reveal } from '../Reveal';
import styles from './Writing.module.scss';

export function Writing() {
  const { locale, t } = useLocale();

  return (
    <section id="writing">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <h2>
              <span className={`${styles.sectionNumber} mono`}>05</span>
              {/* {t.sections.writing} */}
            </h2>
            <span className={`${styles.sectionLabel} mono`}>// writing</span>
          </div>
        </Reveal>

        <Reveal as="p" delay={1} className={styles.intro}>{t.writingIntro}</Reveal>

        <Reveal as="div" delay={1} className={styles.articleList}>
          {WRITING.map((article, i) => (
            <div className={styles.articleRow} key={i}>
              <div className={styles.title}>{article.title[locale]}</div>
              <div className={styles.articleMeta}>
                <span className={styles.tag}>{article.tag}</span>
                <span className="mono">{t.soon}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
