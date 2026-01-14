'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form. In production, this would send your message.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <Mail className="text-primary-600" size={32} />
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat 
              about robotics, IoT, and innovative technology solutions.
            </p>

            <div className="space-y-5">

              <a
                href="mailto:vakatinandavardhan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-slate-700 font-semibold">vakatinandavardhan@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/vakatinandavardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <Github size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">GitHub</p>
                  <p className="text-slate-700 font-semibold">@vakatinandavardhan</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vakati-nanda-vardhan-7639b8262/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                  <Linkedin size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <p className="text-slate-700 font-semibold">Vakati Nanda Vardhan</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 font-medium text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2 font-medium text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                * This is a demo form. In production, messages would be sent via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
