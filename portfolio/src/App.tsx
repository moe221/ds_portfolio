import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillsBanner from './components/SkillsBanner';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <SkillsBanner />
        <About />
        <Projects />
        <CV />
        <Contact />
      </main>
    </Layout>
  );
}

export default App;
