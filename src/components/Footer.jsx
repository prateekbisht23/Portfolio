import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 mt-auto py-6">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 text-gray-300 text-center">

        <div className="w-[95%] border-b border-[rgba(255,255,255,0.1)] pb-6">
          Have an exciting idea? Let’s build something awesome together!! 🚀
        </div>

        <div className="w-[95%] flex justify-between items-center py-4">
        <div className="flex space-x-6">
          <a
            href="https://github.com/prateekbisht23"
            className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prateek-bisht-7a062a258/"
            className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:prateekbisht04@gmail.com"
            className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://x.com/PrateekB04"
            className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={18} />
          </a>
        </div>

        <div className="flex items-center space-x-2 text-sm text-[rgb(106,106,106)]">
          <span className="text-[rgb(85,159,255)]">const</span>madeWith = &#91;'{<FaHeart className="text-red-500" />}', 'Code', 'Coffee'&#93;;
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
