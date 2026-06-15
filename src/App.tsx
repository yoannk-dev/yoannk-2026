import { useTheme } from './hooks/useTheme';
import { LocaleProvider } from './context/LocaleProvider';

import Cursor from './components/Cursor';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Stack from './components/Stack/Stack';
import Projects from './components/Projects/Projects';
// import { Writing } from './components/Writing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { Analytics } from '@vercel/analytics/react';

import styles from './App.module.scss';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <LocaleProvider>
      <Cursor />
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
      <Analytics />
    </LocaleProvider>
  );
}
