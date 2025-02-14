function Contact() {
    return (
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
  
          <div>
            <label className="block text-gray-400 mb-2">Subject</label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Your message here..."
              rows="6"
              className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;