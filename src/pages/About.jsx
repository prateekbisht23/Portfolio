import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <div className="w-[100vw] my-10 bg-[rgb(38,38,38)] p-15">
      <div className="w-full border-b border-[#474747] flex items-center mb-10">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4">
          <span className="text-[#e2dfdf] text-sm font-extralight">about.js</span>
          <div className="w-2 h-2 bg-[rgb(115,115,115)] rounded-full"></div>
        </div>
      </div>
      <div className="bg-[rgb(23,23,23)] space-y-7 px-7 py-8 rounded-tl-xl rounded-br-xl">
        <div className="col-span-2 space-y-4">
          <p className='text-[rgb(133,132,132)] mb-7 text-sm leading-relaxed'>/** * <span className='font-bold '>About Me</span> * A passionate developer with a love for clean code * and efficient solutions!! */</p>

          <p><span className='text-[rgb(205,112,255)]'>const</span> <span className='text-[rgb(112,192,255)]'>developer</span> = &#123;</p>
          <div className='ml-7 space-y-3'>
            <p><span className='text-[rgb(9,194,102)]'>name:</span> <span className='text-[rgb(248,138,0)]'>'Prateek Bisht'</span>,</p>
            <p><span className='text-[rgb(9,194,102)]'>title:</span> <span className='text-[rgb(248,138,0)]'>'Full Stack Developer'</span>,</p>
            <p><span className='text-[rgb(9,194,102)]'>skills:</span> <span className='text-[rgb(248,138,0)]'>&#91; 'JavaScript', 'React', 'Java', 'Python' &#93;</span>,</p>
            <p><span className='text-[rgb(9,194,102)]'>description:</span> <span className='text-[rgb(248,138,0)]'>`</span></p>
            <p className='ml-7 text-[rgb(190,190,190)]'>Turning ideas into functional, elegant code. I specialize in crafting required web solutions with a deep passion for clean architecture, efficiency, and user experience. Whether it's front-end magic or back-end logic, I bring ideas to life through seamless development!!
            </p>
            <p className='text-[rgb(248,138,0)]'>`</p>
            <p><span className='text-[rgb(9,194,102)]'>education:</span> <span className='text-[rgb(248,138,0)]'>'Computer Science Engineering, GGSIPU, 2022-2026'</span>,</p>
          </div>
          <p>&#125;;</p>

          {/* <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </div> */}
        </div>

        {/* <div className="space-y-6">
          <div className="bg-dark rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Technologies I Love</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="bg-dark rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Computer Science, BS</h4>
                <p className="text-gray-400">University of California</p>
                <p className="text-sm text-gray-500">2013 - 2017</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-[rgb(38,38,38)] rounded-lg p-6 border border-[rgb(61,61,61)] hover:border-[hsl(0,1%,31%)] transition-colors flex justify-center gap-70">
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-2xl font-medium text-[rgb(85,159,255)]">9+</span>
            <span className="text-xs">Projects Completed</span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-2xl font-medium text-[rgb(85,159,255)]">100%</span>
            <span className="text-xs">Efficient Work</span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-2xl font-medium text-[rgb(85,159,255)]">24/7</span>
            <span className="text-xs">Devlopment Mode</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;