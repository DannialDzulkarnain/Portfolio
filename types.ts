
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  dates: string;
  bulletPoints: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
}
