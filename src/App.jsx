import { useEffect } from 'react';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import { useReveal } from './hooks/useReveal';
import './App.css';

export default function App() {
  useReveal();

  // Soft page-load fade
  useEffect(() => {
    document.body.style.opacity = '0';
    const t = setTimeout(() => {
      document.body.style.transition = 'opacity 300ms ease';
      document.body.style.opacity = '1';
    }, 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
