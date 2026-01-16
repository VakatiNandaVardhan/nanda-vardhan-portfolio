import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  const cardGradients = [
    'from-sky-100/40 via-blue-50/20 to-white/10 dark:from-sky-900/10 dark:via-blue-900/5 dark:to-transparent',
    'from-violet-100/40 via-indigo-50/20 to-white/10 dark:from-violet-900/10 dark:via-indigo-900/5 dark:to-transparent',
    'from-teal-100/40 via-emerald-50/20 to-white/10 dark:from-teal-900/10 dark:via-emerald-900/5 dark:to-transparent',
    'from-rose-100/40 via-pink-50/20 to-white/10 dark:from-rose-900/10 dark:via-pink-900/5 dark:to-transparent',
  ];

  const accentColors = [
    'text-sky-700 bg-sky-100/60 border-sky-200 dark:text-sky-300 dark:bg-sky-900/40 dark:border-sky-800',
    'text-violet-700 bg-violet-100/60 border-violet-200 dark:text-violet-300 dark:bg-violet-900/40 dark:border-violet-800',
    'text-teal-700 bg-teal-100/60 border-teal-200 dark:text-teal-300 dark:bg-teal-900/40 dark:border-teal-800',
    'text-rose-700 bg-rose-100/60 border-rose-200 dark:text-rose-300 dark:bg-rose-900/40 dark:border-rose-800',
  ];

  return (
    <div className="space-y-40 py-24 px-4 overflow-visible">
      <div className="max-w-5xl mx-auto space-y-12 text-center overflow-visible">
        <div className="flex items-center gap-8 justify-center reveal-item">
          <span className="w-24 h-2 bg-primary-600 rounded-full"></span>
          <span className="text-sm font-black text-primary-600 uppercase tracking-[0.6em]">Innovations</span>
          <span className="w-24 h-2 bg-primary-600 rounded-full"></span>
        </div>
        <h2 className="text-6xl sm:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight pb-4 reveal-item" style={{ animationDelay: '0.2s' }}>
          Hardware <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 italic px-4 lg:px-8 inline-block">Breakthroughs.</span>
        </h2>
        <p className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 font-bold leading-relaxed max-w-4xl mx-auto tracking-tight reveal-item" style={{ animationDelay: '0.4s' }}>
          Converting high-level algorithms into physical motion. My work bridges the gap between digital intelligence and mechanical reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 overflow-visible">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className={`group relative h-full ultra-glass rounded-[3.5rem] sm:rounded-[5rem] border-white/80 dark:border-white/10 overflow-visible transition-all duration-1000 hover:shadow-3xl hover:-translate-y-8 p-8 sm:p-16 flex flex-col justify-between bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} reveal-item`}
            style={{ animationDelay: `${0.2 * idx}s` }}
          >
            <div className="space-y-10 sm:space-y-16 relative z-10">
              <div className="flex justify-between items-start gap-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 ultra-glass bg-white/60 dark:bg-white/5 rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center text-4xl sm:text-7xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shrink-0">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-2 justify-end max-w-[180px] sm:max-w-[280px] pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-2xl text-[9px] sm:text-[11px] font-black uppercase tracking-widest border border-white/40 shadow-sm transition-colors ${accentColors[idx % accentColors.length]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 sm:space-y-10">
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 transition-all duration-700 leading-tight lg:leading-[1.1] pr-2 break-words hyphens-auto">
                  {project.title}
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-snug font-bold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity pr-2 sm:pr-4">
                  {project.longDescription}
                </p>
              </div>
            </div>
            
            <div className="pt-12 sm:pt-16 mt-auto border-t border-slate-300/30 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <div className="flex gap-4">
                 <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                 <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-500 shadow-lg"></div>
                 <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500 shadow-lg"></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};