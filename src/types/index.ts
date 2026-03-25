import type { ReactNode } from "react";

// Interface untuk detail konten di dalam modal
export interface ProjectContent {
  challenge: string;
  solution: string;
  focus: string;
}

// Interface utama untuk objek Project
export interface Project {
  id: number;
  category: string;
  title: string;
  tags: string[];
  icon: ReactNode; // Menggunakan ReactNode karena kita menyimpan komponen icon (misal: <Code2 />)
  content: ProjectContent;
}
