export interface TechVideo {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  fallbackGradient: string;
  themeColor: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'pos' | 'web3d' | 'ai' | 'enterprise';
  role: string;
  desc: string;
  fullDesc: string;
  metrics?: string[];
  keyFeatures: string[];
  tags: string[];
  thumbUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails: string;
  year: string;
  client: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'backend' | 'frontend' | 'ai' | 'devops' | 'database';
  categoryLabel: string;
  iconName: string;
  level: string; // e.g. "Senior / Production"
  experience: string; // e.g. "5+ Yrs"
  description: string;
  accentColor: string;
  relatedProjects: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  techTags: string[];
}
