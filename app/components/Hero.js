'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in section-accent">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 leading-tight">
            Vakati Nanda Vardhan
          </h1>
          <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-3">
            Electronics & Communication Engineering Student
          </p>
          <p className="text-lg sm:text-xl text-slate-600">
            Bridging Hardware & Software Through Design
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
          Final-year ECE student passionate about creating intuitive digital experiences. 
          Combining technical expertise in robotics and IoT with user-centered design principles.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/vakatinandavardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md text-slate-600 hover:text-primary-600 hover:shadow-lg transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/vakati-nanda-vardhan-7639b8262/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md text-slate-600 hover:text-primary-600 hover:shadow-lg transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:vakatinandavardhan@gmail.com"
            className="p-3 rounded-full bg-white shadow-md text-slate-600 hover:text-primary-600 hover:shadow-lg transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

        </div>
      </div>
    </section>
  )
}
