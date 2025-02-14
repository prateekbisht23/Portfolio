import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, number }) {
  return (
    <div className="bg-dark rounded-lg p-6 hover:border-primary border border-transparent transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-gray-500">0{number}</span>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm rounded bg-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-blue-500 hover:underline">View Project →</a>
        <FaGithub className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      technologies: ["TypeScript", "Socket.io", "OpenAI"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["Next.js", "GraphQL", "MongoDB"],
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization",
      technologies: ["Vue.js", "D3.js", "Firebase"],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} number={index + 1} />
      ))}
    </div>
  );
}

export default Projects;