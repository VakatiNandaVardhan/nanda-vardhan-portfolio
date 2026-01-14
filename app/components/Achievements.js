'use client'

import { Award } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      description: 'Finalist – AI-Driven Condition Monitoring System',
      icon: '🏆',
      color: 'from-yellow-50 to-orange-50 border-yellow-400'
    },
    {
      title: 'Make-a-thon Hackathon (SVCE)',
      description: 'Winner – Automatic Drug Dispenser | ₹10,000 Prize',
      icon: '🥇',
      color: 'from-blue-50 to-indigo-50 border-blue-400'
    },
    {
      title: 'e-Yantra Robotics Competition 2025',
      description: 'Ranked in Top 100 teams nationwide | Received free hardware kit from IIT Bombay',
      icon: '🤖',
      color: 'from-green-50 to-emerald-50 border-green-400'
    },
    {
      title: 'MeitY Grand Challenge Contest',
      description: 'Shortlisted – AirTag-Inspired Circuit Design',
      icon: '⭐',
      color: 'from-purple-50 to-pink-50 border-purple-400'
    },
    {
      title: 'Academic & National Hackathon Recognition',
      description: 'Top 10 Projects in eLSI Hackathon 2024 (out of 504 colleges) | Certificate of Recognition – IIT Bombay e-Yantra Symposium',
      icon: '🎓',
      color: 'from-red-50 to-rose-50 border-red-400'
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <h2 className="section-title">
          <Award className="text-primary-600" size={32} />
          Achievements & Honors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`card bg-gradient-to-br ${achievement.color} border-l-4 text-center hover:scale-105`}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
