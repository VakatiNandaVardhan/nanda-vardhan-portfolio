'use client'

import { User, GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <User className="text-primary-600" size={32} />
          About Me
        </h2>

        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            I'm a final-year Electronics and Communication Engineering student at RMK Engineering College 
            with a strong foundation in software development, robotics, and embedded systems. My journey has 
            been driven by a passion for solving real-world problems through innovative technology solutions.
          </p>

          <p>
            As a <span className="font-semibold text-primary-600">Smart India Hackathon 2024 Finalist</span> and hackathon winner, I've developed hands-on experience 
            working with ROS, industrial robots, sensor-based systems, and AI-integrated monitoring solutions. 
            My projects span from gesture-controlled robots to IoT-based condition monitoring systems.
          </p>

          <p>
            Currently, I'm transitioning into UI/UX design to combine my technical background with user-centered 
            design principles. I believe great products are built at the intersection of technology and thoughtful 
            design, and I'm excited to contribute to creating intuitive, accessible digital experiences.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="card bg-gradient-to-br from-primary-50 to-white border-l-4 border-primary-500">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary-600 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Education</p>
                  <p className="text-sm text-slate-600">B.E. in Electronics & Communication</p>
                  <p className="text-sm text-slate-600">RMK Engineering College</p>
                  <p className="text-sm text-primary-600 font-semibold mt-1">CGPA: 8.14</p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-white border-l-4 border-primary-500">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-600 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Location</p>
                  <p className="text-sm text-slate-600">Nellore, Andhra Pradesh</p>
                  <p className="text-sm text-slate-600">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}