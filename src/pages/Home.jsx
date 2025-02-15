import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      <div className="space-y-8 ml-25">
        <div className="flex items-center gap-3.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <div className="px-2 py-1 text-sm rounded-full bg-green-500/20 text-green-500">
            Available for hire
          </div>
        </div>

        <h1 className="text-6xl font-bold flex gap-7">
          <span className="text-blue-500">&lt;</span>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <span className="text-gray-400 transition-opacity duration-300 "> Hello World! </span>
            ) : (
              " Prateek Bisht "
            )}
          </div>
          <span className="text-blue-500">/&gt;</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl">
          I'm a full-stack developer specializing in building
          exceptional digital experiences!!
        </p>

        <div className="space-x-4">
          <a href="#projects" className="inline-block px-6 py-3 bg-[rgb(29,42,69)] text-[rgb(85,159,255)] rounded-lg border border-[rgb(36,51,84)] hover:bg-[rgb(25,36,61)] hover:border-[rgb(44,59,91)] hover:text-[rgb(100,167,255)] transition-colors">View My Work</a>
          <a href="#contact" className="inline-block px-6 py-3 border border-gray-700 rounded-lg hover:border-[rgb(52,71,111)] hover:bg-[rgb(25,25,25)] transition-colors">Contact Me</a>
        </div>

        <div className="mt-16 font-mono text-gray-600">
          <div className="text-sm">class Developer extends Human {'{'}</div>
          <div className="pl-4 text-sm">
            const skills = ['JavaScript', 'React', 'Node.js', 'Python'];
            <br />
            const passion = 'Building exceptional digital experiences';
          </div>
          <div className="text-sm">{'}'}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
