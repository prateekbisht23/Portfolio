import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ message }) => (
  <div className="flex items-center bg-[rgb(38,38,38)] text-gray-200 px-4 py-3 rounded-lg border border-[#999999] shadow-lg">
    <span className="whitespace-pre-line">{message}</span>
  </div>
);


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_z46noqh",
        "template_rmmjaiw",
        formData,
        "x2mgppKXLCck1C6eh"
      )
      .then(() => {
        toast(<CustomToast message={`>_ Heads up!\nYour inquiry has been sent`} />, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          className: "bg-transparent shadow-none p-0 m-0", // Remove default styles
          bodyClassName: "p-0 m-0",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        toast(<CustomToast message={">_ Something went wrong!\nPlease try again."} />, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          className: "bg-transparent shadow-none p-0 m-0",
          bodyClassName: "p-0 m-0",
        });
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="w-[100vw] my-30 py-8 px-15">
      <div className="w-full border-b border-[#474747] flex items-center mb-10">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4">
          <span className="text-[#d8d8d8] text-sm font-extralight">contact.jsx</span>
          <div className="w-2 h-2 bg-[rgb(115,115,115)] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-7 mx-45">
        <div className="flex flex-col text-sm text-[#4f4f4f]">
          <span>/**</span>
          <span className="ml-2.5">* Contact Form Component</span>
          <span className="ml-2.5">* @returns &#123;JSX.Element&#125;</span>
          <span className="ml-2.5">*/</span>
        </div>
        <div className="w-[90%] bg-[rgb(38,38,38)] p-8 rounded-lg shadow-lg border border-[#474747]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2 font-extralight">const name = </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="'Your Name'"
                  className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">const email = </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="'your@email.com'"
                  className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">const subject = </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="'Project Inquiry'"
                className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">const message = </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="'Your message here...'"
                rows="6"
                className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg 
                hover:bg-blue-700 transition-colors flex items-center 
                justify-center gap-2 font-extralight"
              >
                Send Message <span className="text-2xl">&rarr;</span>
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
