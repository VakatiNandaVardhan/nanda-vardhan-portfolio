
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../constants';

const SkillCard: React.FC<{ cat: typeof SKILLS[0], index: number }> = ({ cat, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`group p-12 ultra-glass rounded-[4rem] transition-all duration-700 hover:border-primary-500 hover:shadow-[0_30px_60px_-15px_rgba(14,165,233,0.15)] hover:-translate-y-4 reveal-on-scroll ${inView ? 'is-visible' : ''} border-white/10`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center gap-10 mb-14">
        <div className="w-24 h-24 ultra-glass rounded-[2.5rem] flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl border-white/20 bg-white/5">
          {index === 0 ? '💻' : index === 1 ? '🤖' : index === 2 ? '👁️' : '🔌'}
        </div>
        <div>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">{cat.category}</h3>
          <div className="h-2 w-20 bg-gradient-to-r from-primary-600 to-indigo-500 rounded-full mt-3 group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {cat.skills.map((skill, sIdx) => (
          <div 
            key={sIdx} 
            className="px-8 py-5 ultra-glass border-white/10 text-sm font-black text-slate-800 dark:text-slate-200 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:scale-110 transition-all rounded-[2rem] cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <div className="space-y-24 py-16">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center gap-5">
          <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
          <span className="text-xs font-black text-primary-600 uppercase tracking-[0.5em]">Capabilities</span>
          <span className="w-16 h-1.5 bg-primary-600 rounded-full"></span>
        </div>
        <h2 className="text-6xl sm:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
          Engineered <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-600">Competencies.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl font-medium text-2xl leading-relaxed tracking-tight">
          A robust technical framework developed through intense academic rigor and hackathon pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SKILLS.map((cat, idx) => (
          <SkillCard key={idx} cat={cat} index={idx} />
        ))}
      </div>
    </div>
  );
};
