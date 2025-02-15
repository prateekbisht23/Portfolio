function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="text-gray-400"><a href="./">~/prateek/portfolio</a></div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#learning-path" className="hover:text-primary transition-colors">LearningPath</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
    </nav >

  );
}

export default Navbar;