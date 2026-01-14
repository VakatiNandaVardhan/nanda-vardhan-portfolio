'use client'

import { Rocket } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AI-Driven TBF Monitoring System',
      description:
        'Developed an AI-integrated monitoring system for Tunnel Booster Fans in underground metro stations. Analyzes live sensor data to predict maintenance needs, reducing manpower costs and improving safety and efficiency.',
      tech: ['IoT', 'Machine Learning', 'Python', 'Sensor Networks', 'Real-time Analytics'],
      achievement: 'Smart India Hackathon 2024 Finalist',
      category: 'IoT + AI'
    },
    {
      title: 'e-Yantra Robotics Competition 2025',
      description:
        'Participated in the IIT Bombay e-Yantra Robotics Competition 2025. Ranked among the top 100 teams nationwide and received a free hardware robotics kit from IIT Bombay.',
      tech: ['Robotics', 'Embedded Systems', 'Control Systems', 'Programming'],
      achievement: 'Top 100 Teams – Free Hardware Kit from IIT Bombay',
      category: 'Robotics Competition'
    },
    {
      title: 'Autonomous Rover with LIDAR',
      description:
        'Building an autonomous rover using LIDAR for environment mapping and navigation. Implementing teleoperation and autonomous navigation concepts using ROS for real-world applications.',
      tech: ['ROS', 'LIDAR', 'Navigation', 'Mapping', 'Python'],
      achievement: null,
      category: 'Robotics'
    },
    {
      title: 'Gesture-Based Robot Control',
      description:
        'Implemented gesture recognition using MediaPipe and OpenCV for intuitive robot control. Real-time UI displays joint angles and status with emergency stop functionality for safety.',
      tech: ['Computer Vision', 'MediaPipe', 'OpenCV', 'Python', 'Real-time Processing'],
      achievement: null,
      category: 'Computer Vision'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          <Rocket className="text-primary-600" size={32} />
          Featured Projects
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-gradient-to-br from-white to-primary-50 border-t-4 border-primary-500 hover:scale-[1.03] transition-transform duration-200"
            >
              <div className="mb-3">
                <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {project.achievement && (
                <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-xs text-yellow-800 font-semibold">
                    🏆 {project.achievement}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white text-slate-700 rounded text-xs border border-primary-200"
                  >
                    {tech}
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
