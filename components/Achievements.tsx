
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

export const Achievements: React.FC = () => {
  return (
    <div className="space-y-24 py-16">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-6">
          <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
          <span className="text-sm font-black text-primary-600 uppercase tracking-[0.5em]">Milestones</span>
          <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
        </div>
        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
          Recognition & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-primary-600 to-blue-600">Impact.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ACHIEVEMENTS.map((ach, idx) => (
          <div 
            key={idx} 
            className="p-12 ultra-glass border-white/60 dark:border-white/10 rounded-[4rem] hover:border-primary-500 transition-all group relative overflow-hidden hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all"></div>
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                 <div className="w-16 h-16 ultra-glass bg-white/20 dark:bg-white/5 rounded-[1.5rem] flex items-center justify-center text-primary-600 text-3xl shadow-lg border-white/60">
                   🏆
                 </div>
                 {ach.year && <span className="text-sm font-black text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-5 py-2 rounded-full border border-primary-500/20">{ach.year}</span>}
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">{ach.title}</h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-bold tracking-tight">{ach.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
