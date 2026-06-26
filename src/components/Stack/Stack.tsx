import { useLocale } from '../../hooks/useLocale';
import { STACK_GROUPS } from '../../i18n/translations';
import { Reveal } from '../Reveal';
import styles from './Stack.module.scss';

export default function Stack() {
  const { locale, t } = useLocale();

  return (
    <section id="stack">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <h2>
              <span className={`${styles.sectionNumber} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>03</span>
              {t.sections.stack}
            </h2>
            <span className={`${styles.sectionLabel} mono`}>// stack</span>
          </div>
        </Reveal>

        <Reveal as="div" delay={1} className={styles.stackgrid}>
          {STACK_GROUPS.map((group, i) => (
            <div className={styles.cell} key={i}>
              <h4 className="mono">{typeof group.heading === 'string' ? group.heading : group.heading[locale]}</h4>
              <ul>
                {group.items.map((skill) => <li key={skill} className={styles.cellItem}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
