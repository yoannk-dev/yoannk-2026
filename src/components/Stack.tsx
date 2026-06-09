import { useLocale } from '../hooks/useLocale';
import { STACK_GROUPS } from '../i18n/translations';
import { Reveal } from './Reveal';
import styles from './Stack.module.scss';

export function Stack() {
  const { locale, t } = useLocale();

  return (
    <section id="stack">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>03</span>
              {t.sections.stack}
            </h2>
            <span className={`${styles.idx} mono`}>// stack</span>
          </div>
        </Reveal>

        <Reveal as="div" d={1} className={styles.stackgrid}>
          {STACK_GROUPS.map((g, i) => (
            <div className={styles.cell} key={i}>
              <h4 className="mono">{typeof g.h === 'string' ? g.h : g.h[locale]}</h4>
              <ul>
                {g.items.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
