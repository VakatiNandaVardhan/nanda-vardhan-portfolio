import React from 'react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="py-32 space-y-56">
      {/* --- REFINED NARRATIVE SECTION --- */}
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4 group justify-center lg:justify-start">
            <span className="w-12 h-1 bg-primary-600 rounded-full"></span>
            <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.8em]">Core Profile</span>
          </div>
          <h3 className="text-6xl sm:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] text-center lg:text-left">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">ENGINEER</span> <br />
            <span className="italic font-light text-slate-400 dark:text-slate-600">BEHIND THE CODE.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-bold leading-relaxed tracking-tight">
            <p>
              I am a final-year Electronics and Communication student who thrives at the intersection of <span className="text-slate-900 dark:text-white underline decoration-primary-500/30 decoration-8 underline-offset-4">physical hardware</span> and <span className="text-slate-900 dark:text-white underline decoration-indigo-500/30 decoration-8 underline-offset-4">digital logic</span>.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              With a background rooted in ROS1 mapping and industrial robot control, I bring a unique perspective to systems—focusing on clarity, real-time feedback, and mission-critical reliability.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg font-medium opacity-80 border-l-4 border-slate-200 dark:border-slate-800 pl-8 italic text-slate-600 dark:text-slate-400">
              "My mission is to build autonomous systems that aren't just functional, but reliable under the most demanding industrial conditions."
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Robotics", "Embedded Systems", "UI/UX Awareness", "Computer Vision"].map((tag) => (
                <div key={tag} className="px-5 py-2.5 ultra-glass rounded-xl border-white/40 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-primary-600 hover:border-primary-500 transition-all cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- REFINED ACADEMIC LADDER --- */}
      <div className="space-y-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-6">
             <div className="inline-flex items-center gap-4">
               <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
               <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.8em]">Progression</span>
             </div>
             <h3 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-[0.85]">
               ACADEMIC <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-600 italic">MILESTONES.</span>
             </h3>
           </div>
           <p className="text-slate-500 dark:text-slate-400 font-bold text-xl max-w-sm">
             A timeline of rigorous study and consistent performance across top-tier institutions.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col h-full ultra-glass rounded-[3.5rem] transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 border-white/80 dark:border-white/10 p-12 overflow-hidden"
            >
              {/* Background index indicator */}
              <span className="absolute -top-10 -left-6 text-[12rem] font-black text-slate-100 dark:text-white/[0.03] select-none leading-none pointer-events-none">
                {idx + 1}
              </span>
              
              <div className="flex-1 space-y-10 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 ultra-glass rounded-2xl flex items-center justify-center text-2xl shadow-lg border-white/60">
                    {idx === 0 ? '🎓' : idx === 1 ? '🏫' : '📖'}
                  </div>
                  <div className="h-1 w-12 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                </div>

                <div className="space-y-5">
                  <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.3em] block">{edu.period}</span>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight group-hover:text-primary-600 transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-bold leading-tight italic">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{edu.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-auto relative z-10">
                <div className="inline-flex items-center gap-4 px-6 py-4 ultra-glass bg-white/60 dark:bg-slate-900/80 rounded-2xl border border-emerald-500/20 shadow-xl group-hover:border-emerald-500/50 transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-base font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};