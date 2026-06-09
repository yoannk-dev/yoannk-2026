import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';
import { LocaleProvider } from './context/LocaleProvider';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './App.module.scss';

export default function App() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  return (
    <LocaleProvider>
      <div className={styles.app} data-theme={theme}>
        <TopBar theme={theme} onThemeToggle={toggle} />
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
