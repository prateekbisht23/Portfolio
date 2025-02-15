import { FaGithub, FaRegFolder } from 'react-icons/fa';

function ProjectCard({ title, description, technologies, number }) {
  return (
    <div
      className="rounded-xl p-6 hover:border-primary border border-[rgb(70,70,70)] 
                 transition-all backdrop-blur-2xl bg-[rgb(23,23,23)] 
                 flex flex-col justify-between overflow-hidden"
    >
      {/* Title & Number */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <FaRegFolder className="text-blue-400 text-lg" />
          <h3 className="text-lg font-light text-[rgb(229,229,229)] truncate">
            {title}
          </h3>
        </div>
        <span className="text-gray-500">0{number}</span>
      </div>

      {/* Description - Fixed size */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
        {description}
      </p>

      <div className="flex gap-2 flex-wrap mb-5">
        {technologies.map((tech, index) => {

          const colorMap = [
            { bg: "bg-[rgb(63,23,25)]", text: "text-[rgb(255,180,186)]" }, // Dark red → Light pink
            { bg: "bg-[rgb(29,42,69)]", text: "text-[rgb(173,216,230)]" }, // Dark blue → Light blue
            { bg: "bg-[rgb(18,60,36)]", text: "text-[rgb(144,238,144)]" }, // Dark green → Light green
            { bg: "bg-[rgb(67,55,18)]", text: "text-[rgb(255,236,139)]" }, // Dark yellow → Light yellow
            { bg: "bg-[rgb(55,25,69)]", text: "text-[rgb(216,191,216)]" }, // Dark purple → Light lavender
          ];

          const randomColor = colorMap[Math.floor(Math.random() * colorMap.length)];


          return (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-extralight ${randomColor.bg} ${randomColor.text} 
                    rounded-full shadow-md transition-all hover:scale-105`}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Footer - Link & Icon */}
      <div className="flex justify-between items-center mt-auto">
        <a href="#" className="text-[rgb(85,158,254)] hover:underline text-sm">
          View Project →
        </a>
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
    <div className="w-[100vw] my-30 py-15 px-15 bg-[rgb(38,38,38)]">
      <div className="w-full border-b border-[#474747] flex items-center mb-10 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-sm font-extralight">projects.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">×</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} number={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Projects;