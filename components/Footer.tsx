import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-64 pb-32 pt-48 overflow-hidden">
      {/* Footer background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-100/10 to-primary-600/10 dark:via-slate-900/50 dark:to-primary-950/30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 pb-32">
          <div className="md:col-span-6 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-tr from-primary-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">VNV</div>
              <div className="flex flex-col">
                <span className="font-black text-4xl tracking-tighter text-slate-900 dark:text-white uppercase">VNV Engineering</span>
                <span className="text-sm font-bold text-primary-600 uppercase tracking-[0.4em] mt-1 italic">Future-Proof Systems</span>
              </div>
            </div>
            <p className="text-3xl text-slate-700 dark:text-slate-300 font-bold leading-tight max-w-lg italic tracking-tight opacity-80">
              "Architecting autonomous solutions where mechanical precision meets computational intelligence."
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h4 className="text-sm font-black uppercase tracking-[0.5em] text-primary-600 border-b border-primary-500/20 pb-4 inline-block">Sync Hub</h4>
              <div className="flex flex-col gap-8">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-slate-800 dark:text-slate-100 hover:text-primary-600 transition-all flex items-center gap-5 group">
                  GitHub <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-slate-800 dark:text-slate-100 hover:text-primary-600 transition-all flex items-center gap-5 group">
                  LinkedIn <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-sm font-black uppercase tracking-[0.5em] text-indigo-600 border-b border-indigo-500/20 pb-4 inline-block">Direct Terminal</h4>
              <div className="flex flex-col gap-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl font-black text-slate-900 dark:text-white break-all hover:text-primary-600 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-2xl font-black text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
                <div className="pt-4">
                   <p className="text-lg font-bold text-slate-500 uppercase tracking-widest">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 flex flex-col lg:flex-row justify-between items-center gap-12 border-t border-slate-300/50 dark:border-white/10">
          <p className="text-xs font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.5em] text-center lg:text-left">
            &copy; {new Date().getFullYear()} VNV ENGINEERING LAB • BUILT FOR IMPACT
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-4 ultra-glass px-10 py-5 rounded-[2rem] border-white/80 shadow-xl">
              <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
              <span className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-[0.3em]">Core Systems Online</span>
            </div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="p-5 ultra-glass bg-white/40 dark:bg-white/5 rounded-full hover:scale-110 active:scale-90 transition-all border-white/80"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};