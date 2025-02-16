import { FaGithub, FaRegFolder } from 'react-icons/fa';
import { AnimatePresence } from "framer-motion";
import ProjectPopUp from "../components/ProjectPopUp";
import React, { useState } from "react";

function ProjectCard({ title, description, technologies, number, link, openPopup }) {
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

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex gap-2 flex-wrap mb-5">
        {technologies.map((tech, index) => {
          const colorMap = [
            { bg: "bg-[rgb(63,23,25)]", text: "text-[rgb(255,180,186)]" },
            { bg: "bg-[rgb(29,42,69)]", text: "text-[rgb(173,216,230)]" },
            { bg: "bg-[rgb(18,60,36)]", text: "text-[rgb(144,238,144)]" },
            { bg: "bg-[rgb(67,55,18)]", text: "text-[rgb(255,236,139)]" },
            { bg: "bg-[rgb(55,25,69)]", text: "text-[rgb(216,191,216)]" },
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

      {/* Footer - View Project Link */}
      <div className="flex justify-between items-center mt-auto">
        <a href="#" onClick={(e) => { e.preventDefault(); openPopup(link); }} className="text-[rgb(85,158,254)] hover:underline text-sm">
          View Project →
        </a>
        <FaGithub className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}

function Projects() {
  const [popupContent, setPopupContent] = useState(null);

  const projects = [
    {
      title: "Weather App",
      description: "A web application that provides real-time weather information for any location using the OpenWeatherMap API!!",
      technologies: ["React", "TailwindCSS", "Chart.js", "OpenWeatherMap API"],
      link: "https://weather-app-three-gilt-25.vercel.app/",
    },
    {
      title: "Pac-Man Game",
      description: "A classic Pac-Man game clone developed using Java and JavaSwing Framework.",
      technologies: ["Java", "JavaSwing", "Eclipse IDE"],
      link: "https://github.com/prateekbisht23/pacman-game",
    },
    {
      title: "Currency Converter",
      description: "A web application that converts currencies using real-time exchange rates from an external API.",
      technologies: ["React", "TailwindCSS", "Exchange Rate API"],
      link: "https://currencyconvertor-git-main-prateekbisht23s-projects.vercel.app/",
    },
    {
      title: "GitHub Profile Card",
      description: "A dynamic card that displays GitHub profile information using the GitHub API.",
      technologies: ["JavaScript", "HTML", "CSS", "GitHub API"],
      link: "https://prateekbisht23.github.io/GitHub-Profile-Card/",
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
          <ProjectCard key={index} {...project} number={index + 1} openPopup={setPopupContent} />
        ))}
      </div>

      <AnimatePresence>
        {popupContent && (
          <ProjectPopUp content={popupContent} onClose={() => setPopupContent(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
