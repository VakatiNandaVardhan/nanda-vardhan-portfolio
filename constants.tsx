import React from 'react';
import { Project, SkillCategory, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Vakati Nanda Vardhan",
  location: "Nellore, Andhra Pradesh, India",
  email: "vakatinandavardhan@gmail.com",
  phone: "+91 9490422206",
  github: "https://github.com/vakatinandavardhan/",
  linkedin: "https://www.linkedin.com/in/vakati-nanda-vardhan-7639b8262/",
  summary: "I am a final-year Electronics and Communication Engineering student with hands-on experience in robotics, embedded systems, industrial automation, IoT, and computer vision. I have worked extensively with ROS, industrial robots, sensor-based systems, and real-time monitoring solutions through hackathons and academic projects.",
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Driven Condition-Based Monitoring for Tunnel Booster Fans",
    description: "IoT + AI-based monitoring system for predictive maintenance.",
    longDescription: "Smart India Hackathon 2024 – Finalist project. Developed an IoT + AI-based monitoring system using live sensor data analysis for predictive maintenance of metro tunnel ventilation systems.",
    tags: ["IoT", "AI", "Sensors", "Predictive Maintenance"],
    icon: "🌪️"
  },
  {
    title: "Autonomous Rover with LIDAR Mapping",
    description: "ROS-based rover for environment mapping and navigation.",
    longDescription: "Designed and built a ROS-based rover focused on real-world robotics applications. Implemented teleoperation and autonomous navigation concepts utilizing LIDAR for accurate environment mapping.",
    tags: ["ROS", "LIDAR", "Robotics", "Navigation"],
    icon: "🏎️"
  },
  {
    title: "Gesture-Based Robot Control System",
    description: "Hand gestures via MediaPipe and OpenCV.",
    longDescription: "Implemented a system for controlling robot movement using hand gestures. Features real-time joint status display and an integrated emergency stop for safety.",
    tags: ["Computer Vision", "MediaPipe", "OpenCV"],
    icon: "✋"
  },
  {
    title: "Automatic Drug Dispenser",
    description: "QR code and computer vision dispensing system.",
    longDescription: "Winner – Make-a-thon Hackathon (SVCE). Reduced human error in medication delivery using a QR code and computer vision-based system for precise drug dispensing.",
    tags: ["Healthcare", "Computer Vision", "Automation"],
    icon: "💊"
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "C", "Data Structures & Algorithms", "Git & Version Control", "MySQL"],
  },
  {
    category: "Robotics & Automation",
    skills: ["ROS1 (Noetic)", "Doosan A0509", "LIDAR Mapping", "Teleoperation", "Gesture Control", "Voice Control"],
  },
  {
    category: "Computer Vision & AI",
    skills: ["OpenCV", "MediaPipe", "Machine Learning", "Vision Processing"],
  },
  {
    category: "Embedded Systems & IoT",
    skills: ["Microcontrollers", "Sensors", "Condition Monitoring", "Circuit Design"],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    title: "Smart India Hackathon 2024", 
    subtitle: "Finalist - National Level Innovation Competition",
    year: "2024"
  },
  { 
    title: "Winner – Make-a-thon Hackathon (SVCE)", 
    subtitle: "Secured 1st Place with a cash prize of ₹10,000",
    year: "2024"
  },
  { 
    title: "eYantra Robotics Competition 2025", 
    subtitle: "Ranked in Top 100 teams in Stage 1 & received hardware kit from IIT Bombay",
    year: "2025"
  },
  { 
    title: "Recognition & Top 10 Projects", 
    subtitle: "eLSI Hackathon 2024 - Shortlisted for final symposium at IIT Bombay",
    year: "2024"
  },
];

export const EDUCATION_DATA = [
  {
    degree: "B.E Electronics and Communication Engineering",
    institution: "R.M.K Engineering College, Chennai",
    period: "Oct 2022 - Present",
    score: "CGPA 8.14/10.0",
    location: "Chennai"
  },
  {
    degree: "Higher Secondary Education (BIEAP)",
    institution: "Narayana Junior College, Nellore",
    period: "2020 - 2022",
    score: "Percentage 86.6%",
    location: "Nellore"
  },
  {
    degree: "Secondary Education (BSEAP)",
    institution: "Ravindra Bharathi School, Nellore",
    period: "2020",
    score: "Percentage 100%",
    location: "Nellore"
  }
];