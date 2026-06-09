import { useTheme } from './hooks/useTheme';
import { LocaleProvider } from './context/LocaleProvider';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
// import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './App.module.scss';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <LocaleProvider>
      <div className={styles.app}>
        <TopBar theme={theme} onThemeToggle={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Stack />
          <Projects />
          {/* <Writing /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
