import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }} className="w-[100vw] my-10 bg-[rgb(38,38,38)] p-15">
      <div className="w-full border-b border-[#474747] flex items-center mb-10 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-sm font-extralight">about.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">×</span>
          </div>
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
        </div>

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
    </motion.div>
  );
}

export default About;