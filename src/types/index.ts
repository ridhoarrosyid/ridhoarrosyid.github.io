// Interface untuk detail konten di dalam modal
export interface ProjectContent {
  challenge: string;
  solution: string;
  focus: string;
}

export interface ProjectCategory {
  display: string;
  code: string;
}

// Interface utama untuk objek Project
export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  tech: string[];
  shortDesc: string;
  image: string;
  demoLink: string;
  repoLink: string;
  content: ProjectContent;
}
