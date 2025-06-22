import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[rgb(0,5,23)] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-400">About</h2>
          <p>
            Hi, My name is <span className="text-orange-400">Shiva Pareek</span> and I am a passionate <em>Web Developer and Video Editor!</em>
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
            <li><a href="#education" className="hover:text-orange-400">Education</a></li>
            <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Services</h2>
          <ul className="space-y-2">
            <li><a href="#contact" className="hover:text-orange-400">Web Design</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Web Development</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Video Editing</a></li>
            <li><a href="#contact" className="hover:text-orange-400">3D Render</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Have a Question?</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><FaLocationDot className="text-orange-400" /> Jaipur, Rajasthan, India (Bharat)</li>
            <li className="flex items-center gap-3"><FaPhone className="text-orange-400" /> <a href="tel:+919950394696">+91 9950394696</a></li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-orange-400" /> <a href="mailto:pareekshiva2004@gmail.com">pareekshiva2004@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        Copyright © 2025 All rights reserved by <span className="text-orange-400">Shiva Pareek</span>
      </div>
    </footer>
  );
};

export default Footer;
