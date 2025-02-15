import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollThreshold = 5;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsVisible(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-[rgb(24,24,24)] z-50 transition-transform linear duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="text-gray-400 hover:text-gray-300 transition-colors">
              <a href="./">
                <span>~/</span>
                <span className="text-gray-300">prateek</span>
                <span>/portfolio</span>
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">Home</a>
              <a href="#about" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">About</a>
              <a href="#skills" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">Projects</a>
              <a href="#learning-path" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">LearningPath</a>
              <a href="#contact" className="text-gray-400 hover:text-gray-200 transition-all-700 hover:lowercase">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed left-0 w-full h-[3px] z-50 bg-[rgb(41,41,41)] transition-all linear duration-300 ${isVisible ? "top-[56px]" : "top-0"
          }`}
      >
        <div
          className="h-[3px] bg-[rgba(85,159,255,0.9)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
