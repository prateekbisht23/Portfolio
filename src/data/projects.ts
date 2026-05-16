import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "invoicely",
    title: "Invoicely",
    description: "Simple and easy to use invoice generator where you can create beautiful and professional invoices in minutes.",
    longDescription: "Invoicely is a simple and easy to use invoice generator to create beautiful and professional invoices in minutes. Proudly open-source and built for speed.",
    liveLink: "https://invoicely.gg",
    githubLink: "https://github.com/prateekbisht23/invoicely",
    image: "",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "cloudpad",
    title: "CloudPad",
    description: "Real-time text and file-sharing platform for instant cross-device sharing.",
    longDescription: "A lightweight, real-time text and file-sharing platform. Allows users to create unique URLs to instantly share text and files on other devices.",
    liveLink: "https://cloudpad-mya5.onrender.com/",
    githubLink: "https://github.com/prateekbisht23/CloudPad",
    image: "",
    tags: ["Python", "Django", "Supabase", "JavaScript"],
  },
  {
    id: "code-focus",
    title: "CodeFocus",
    description: "VS Code extension to analyze and group related files to reduce navigation overhead.",
    longDescription: "A Visual Studio Code extension to analyze file dependencies and dependents for faster navigation in large TypeScript/JavaScript codebases.",
    liveLink: "https://marketplace.visualstudio.com/items?itemName=prateekbisht.code-focus",
    githubLink: "https://github.com/prateekbisht23/code-focus",
    image: "",
    tags: ["TypeScript", "VS Code Extension", "Productivity"],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
