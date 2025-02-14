import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

const PortfolioIDE = () => {
  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-semibold">Explorer</h2>
        <div className="mt-4">
          <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
            <FaFolder /> <span>Projects</span>
          </div>
          <div className="ml-4 mt-2">
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
              <FaFile /> <span>index.js</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
              <FaFile /> <span>about.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="h-12 bg-gray-700 flex items-center px-4 text-sm">
          <span className="text-gray-400">/home/portfolio/index.js</span>
        </div>

        {/* Code Editor Simulation */}
        <div className="flex-1 bg-gray-900 p-4 text-green-400 font-mono text-sm">
          <p>// Welcome to my portfolio</p>
          <p>const name = "Your Name";</p>
          <p>const role = "Full Stack Developer";</p>
          <p>console.log(`Hello, I am Prateek Bisht, a Web Developer`);</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIDE;
