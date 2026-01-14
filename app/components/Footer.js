'use client'

import { Heart, Code } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 bg-slate-900 text-white">
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span>Built with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>using</span>
            <Code size={16} className="text-primary-400" />
            <span>Next.js, React & Tailwind CSS</span>
          </div>

          <div className="text-slate-400 text-sm">
            © {currentYear} Vakati Nanda Vardhan. All rights reserved.
          </div>

          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#about" className="hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}