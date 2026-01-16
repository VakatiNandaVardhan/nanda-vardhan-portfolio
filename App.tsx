
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dynamic Blobs with increased vibrancy */}
      <div className="absolute top-[-5%] left-[-5%] w-[65%] h-[65%] bg-blue-400/30 dark:bg-blue-600/10 rounded-full blur-[160px] animate-float-complex"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-400/30 dark:bg-purple-900/10 rounded-full blur-[160px] animate-float-complex-reverse"></div>
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-pink-400/25 dark:bg-pink-900/10 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-400/30 dark:bg-cyan-600/5 rounded-full blur-[130px] animate-float-slow"></div>
      
      {/* Floating Glass Spheres and Objects */}
      <div className="absolute top-[15%] right-[15%] w-64 h-64 glass-shard rotate-12 animate-float-complex hidden lg:block opacity-70"></div>
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 ultra-glass rounded-full animate-float-complex hidden lg:block opacity-60 shadow-2xl border-white/60"></div>
      <div className="absolute top-[60%] left-[8%] w-32 h-32 ultra-glass rounded-[3rem] -rotate-45 animate-float-complex-reverse hidden lg:block opacity-50 shadow-2xl"></div>
      <div className="absolute top-[35%] right-[2%] w-24 h-24 ultra-glass rounded-2xl rotate-45 animate-float-complex hidden lg:block opacity-40 border-white/50"></div>
      <div className="absolute bottom-[40%] right-[5%] w-40 h-40 glass-shard rotate-[160deg] animate-float-complex-reverse hidden lg:block opacity-55"></div>
      
      {/* Texture & Pattern Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.8px,transparent_0.8px)] dark:bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
    </div>
  );
};

interface RevealSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ id, children, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`relative z-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
    >
      {children}
    </section>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen transition-colors duration-700 bg-transparent">
      <BackgroundElements />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-64">
        <RevealSection id="hero">
          <Hero />
        </RevealSection>
        
        <RevealSection id="about">
          <Experience />
        </RevealSection>
        
        <RevealSection id="skills">
          <Skills />
        </RevealSection>
        
        <RevealSection id="projects">
          <Projects />
        </RevealSection>
        
        <RevealSection id="achievements">
          <Achievements />
        </RevealSection>
        
        <RevealSection id="contact" className="pb-40">
          <Contact />
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;
