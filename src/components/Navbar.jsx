import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6">
      <nav className="mx-auto max-w-7xl bg-[rgba(35,42,56,0.615)] backdrop-blur-md rounded-3xl shadow-lg flex items-center justify-between px-6 sm:px-8 py-3 md:py-2.5">
        
        {/* Logo */}
       <div className="text-lg sm:text-xl md:text-2xl font-light select-none whitespace-nowrap">
  <span style={{ fontFamily: "'Times New Roman', serif" }}>
    <span className="text-orange-400">Shiva's</span>{" "}
    <span className="text-white">Portfolio</span>
  </span>
</div>


        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-3xl text-orange-400 focus:outline-none"
        >
          ☰
        </button>

        {/* Menu & GitHub */}
        <div className={`w-full md:w-auto flex-col md:flex-row md:flex items-center justify-end gap-6 transition-all duration-300 ease-in-out ${isOpen ? "flex mt-4" : "hidden md:flex"}`}>
          
          {/* Links */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-center font-poppins">
            {["home", "about", "skills", "education", "projects", "contact"].map((section) => (
              <li key={section}>
               <Link
  to={section}
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active"
  className="text-white hover:text-orange-400 px-3 py-1.5 rounded-md transition-all capitalize cursor-pointer"

  onClick={() => setIsOpen(false)}
>
  {section}
</Link>

              </li>
            ))}
          </ul>

          {/* GitHub Icon */}
          <a
  href="https://github.com/shivapareek"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-2xl p-2 rounded-full transition-all duration-300 hover:text-orange-400 hover:scale-110 "
>
  <FaGithub />
</a>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
