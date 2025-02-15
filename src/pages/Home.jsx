import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Mail, Coffee } from "lucide-react";
import { motion } from "framer-motion";


function Home() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} className="min-h-[calc(100vh-3.5rem)] w-[100vw] flex justify-around px-7 py-30 mt-10">
      <div className="space-y-8 mt-4">
        <div className="flex items-center gap-3.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <div className="px-2 py-1 text-sm rounded-full bg-green-500/20 text-green-500">
            Available for hire
          </div>
        </div>

        <h1 className="text-6xl font-bold flex gap-7 select-none">
          <span className="text-blue-500">&lt;</span>
          <div
            className="hover:cursor-pointer"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? (
              <span className="text-gray-400 transition-opacity duration-300"> Hello World! </span>
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
        <div className="text-gray-400 font-mono">
          <p>
            <span className="text-gray-500">// Reminder to CODE...</span>
          </p>
          <p>
            <span className="text-purple-400">const</span> quote =
            <span className="text-green-400"> "Code! Create! Conquer!"</span>;
          </p>
        </div>

      </div>
      <div className="gap-4 flex flex-col items-center justify-center bg-[rgb(20,20,20)] border border-[#292929] shadow-sm shadow-[rgba(85,159,255,0.3)] px-6 rounded-xl">
        <div className="bg-[rgb(24,24,24)] rounded-full w-40 h-40 p-1 hover:p-1.5 border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg">
          <img src="src/assets/profile-pic.png" alt="Profile-pic" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="bg-[rgb(24,24,24)] rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">STUDENT</p>
            <h4 className="font-medium text-gray-300 text-lg">Computer Science, B.Tech.</h4>
            <p className="text-gray-400 text-base">GGSIPU, Delhi</p>
            <div className='flex justify-between'>
              <p className="text-sm text-gray-500 italic">2022 - 2026</p>
              <p className="text-sm text-gray-500 hover:cursor-pointer">Resume</p>
            </div>
          </div>
        </div>

        <div className="bg-[rgb(24,24,24)] w-[100%] rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
          <div className="flex justify-evenly">
            <a href="https://github.com/prateekbisht23" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prateek-bisht-7a062a258/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:prateekbisht04@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/__prateek.23_/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/PrateekB04" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://buymeacoffee.com/prateekbisht" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Coffee size={24} />
            </a>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Home;
