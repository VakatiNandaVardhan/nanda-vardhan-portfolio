import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-24 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
              LET'S <br />
              <span className="text-primary-600">CONNECT.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-bold max-w-md">
              Whether it's a project inquiry, a technical discussion, or just a hello, I'm always open to high-impact collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-8 ultra-glass rounded-[2rem] border-white/60 group hover:border-primary-500 transition-all">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Direct Email</span>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-2xl font-black text-slate-900 dark:text-white break-all hover:text-primary-600 transition-colors block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="p-8 ultra-glass rounded-[2rem] border-white/60 group hover:border-indigo-500 transition-all">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Mobile Terminal</span>
              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-2xl font-black text-slate-900 dark:text-white hover:text-indigo-600 transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="ultra-glass rounded-[3.5rem] border-white/80 dark:border-white/5 p-12 sm:p-16 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20 space-y-8">
                 <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mx-auto text-4xl animate-bounce">✓</div>
                 <h3 className="text-4xl font-black">Message Transmitted.</h3>
                 <p className="text-xl text-slate-500 font-bold">I will respond to your inquiry shortly.</p>
                 <button onClick={() => setSubmitted(false)} className="px-10 py-4 ultra-glass border-slate-200 font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all rounded-2xl">Send New Transmission</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Identification</label>
                    <input 
                      type="text" required value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-8 py-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all font-bold text-lg"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                    <input 
                      type="email" required value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-8 py-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all font-bold text-lg"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Your Message</label>
                  <textarea 
                    rows={6} required value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-8 py-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-primary-500 outline-none transition-all font-bold text-lg resize-none"
                    placeholder="Describe your vision or inquiry..."
                  />
                </div>
                <button 
                  type="submit" disabled={isSubmitting}
                  className="w-full py-6 bg-slate-900 dark:bg-primary-600 text-white font-black text-lg rounded-[2rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-4 group"
                >
                  {isSubmitting ? 'SYNCING...' : 'INITIATE CONTACT'}
                  {!isSubmitting && <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};