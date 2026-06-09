import styles from './Contact.module.scss';

const LINKS = [
  { label: 'Email', href: 'mailto:y.kermet@gmail.com', icon: '✉' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'GitHub', href: '#', icon: '⚙' },
  { label: 'Twitter', href: '#', icon: '𝕏' },
];

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>Get in touch</h2>
          <span className={styles.idx}>(06)</span>
        </div>

        <div className={styles.contact}>
          <p className={styles.lead}>Let's work together on your next project.</p>
          <div className={styles.big}>
            <a href="mailto:y.kermet@gmail.com">y.kermet@gmail.com</a>
          </div>

          <div className={styles.clinks}>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.clink}
                title={link.label}
              >
                {link.icon} {link.label}
                <span className={styles.arr}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
