import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-40 pb-32 lg:pt-64 lg:pb-48 flex flex-col items-center text-center">
      <div className="max-w-5xl space-y-16">
        <div className="space-y-12">
          <div className="reveal-item inline-flex items-center gap-5 px-10 py-4 rounded-full ultra-glass border-primary-500/50" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-primary-500"></span>
            </span>
            <span className="text-sm font-black text-primary-700 dark:text-primary-300 uppercase tracking-[0.5em]">Engineering Final Year</span>
          </div>
          
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
            <span className="reveal-item block" style={{ animationDelay: '0.2s' }}>Building</span>
            <span className="reveal-item block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 drop-shadow-sm italic px-4" style={{ animationDelay: '0.3s' }}>Systems</span>
            <span className="reveal-item block" style={{ animationDelay: '0.4s' }}>That Think.</span>
          </h1>
          
          <p className="reveal-item text-3xl sm:text-5xl text-slate-700 dark:text-slate-300 leading-tight max-w-4xl mx-auto font-bold tracking-tight" style={{ animationDelay: '0.5s' }}>
            I'm <span className="text-slate-900 dark:text-white font-black border-b-[12px] border-primary-500/30 pb-2">{PERSONAL_INFO.name}</span>. Crafting autonomous robotics and smart hardware ecosystems.
          </p>
        </div>
        
        <div className="reveal-item flex flex-wrap justify-center gap-10" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#projects" 
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="group relative px-16 py-10 bg-slate-900 dark:bg-primary-600 text-white font-black rounded-[3rem] transition-all hover:scale-105 active:scale-95 shadow-[0_40px_80px_-20px_rgba(14,165,233,0.6)] flex items-center gap-5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></span>
            <span className="relative z-10 uppercase text-sm tracking-[0.3em]">View Projects</span>
            <svg className="w-8 h-8 relative z-10 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-16 py-10 ultra-glass text-slate-900 dark:text-white font-black rounded-[3rem] border-white/80 hover:border-primary-500 hover:shadow-2xl transition-all active:scale-95 uppercase text-sm tracking-[0.3em]"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};