'use client'

import { Code, Cpu, Brain, Microchip } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="text-primary-600" size={28} />,
      skills: [
        'Python',
        'C',
        'Data Structures & Algorithms',
        'Git & Version Control',
        'MySQL'
      ]
    },
    {
      title: 'Robotics & Automation',
      icon: <Cpu className="text-primary-600" size={28} />,
      skills: [
        'ROS (Noetic)',
        'Industrial Robot Control',
        'LIDAR Mapping & Navigation',
        'Teleoperation',
        'Gesture-Based Control'
      ]
    },
    {
      title: 'Computer Vision & AI',
      icon: <Brain className="text-primary-600" size={28} />,
      skills: [
        'OpenCV',
        'MediaPipe',
        'Machine Learning Fundamentals',
        'Speech Recognition (Vosk)',
        'Real-Time Vision Systems'
      ]
    },
    {
      title: 'Embedded Systems & IoT',
      icon: <Microchip className="text-primary-600" size={28} />,
      skills: [
        'Microcontroller Programming',
        'Sensor Interfacing',
        'IoT-Based Monitoring Systems',
        'Circuit Design',
        'Hardware Integration'
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <h2 className="section-title">
          <Code className="text-primary-600" size={32} />
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
