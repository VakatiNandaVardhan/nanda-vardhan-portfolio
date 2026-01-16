export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  achievements?: string[];
  link?: string;
  image?: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  year?: string;
  reward?: string;
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  location: string;
}
