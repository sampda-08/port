import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Sampda Patmase</h2>

        

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sampdapatmase/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sampda Patmase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
