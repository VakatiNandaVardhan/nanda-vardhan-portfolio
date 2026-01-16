
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Impact', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex flex-col items-center ${
      scrolled ? 'pt-4' : 'pt-8'
    }`}>
      {/* Scroll Progress Bar */}
      {scrolled && (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-slate-100 dark:bg-slate-900">
          <div 
            className="h-full bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}

      <div className={`transition-all duration-700 flex items-center justify-between px-8 ${
        scrolled 
          ? 'w-[95%] md:w-max ultra-glass rounded-full py-2.5 shadow-2xl border-white/20 dark:border-white/5 group' 
          : 'w-full max-w-7xl px-10'
      }`}>
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="group flex items-center gap-4">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-600 rounded-xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-1000 shadow-lg"></div>
            <span className="relative z-10 font-black text-lg text-white">VNV</span>
          </div>
          {!scrolled && <span className="font-black text-xl text-slate-900 dark:text-white tracking-tighter">NANDA VARDHAN</span>}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                scrolled 
                  ? 'hover:bg-primary-600 hover:text-white text-slate-600 dark:text-slate-300' 
                  : 'hover:text-primary-600 text-slate-700 dark:text-slate-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2"></div>
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleDarkMode} className="p-2.5 ultra-glass rounded-full active:scale-90">
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 ultra-glass rounded-full active:scale-90">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 md:hidden`}>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-80 mesh-bg dark:bg-slate-950 p-10 flex flex-col gap-6 shadow-2xl border-l border-white/10">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black">VNV</div>
               <span className="font-black tracking-tighter">PORTAL</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-3 ultra-glass rounded-full rotate-90 transition-transform hover:scale-110">✕</button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="text-2xl font-black p-6 ultra-glass border-white/20 rounded-3xl hover:bg-primary-600 hover:text-white transition-all transform active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
