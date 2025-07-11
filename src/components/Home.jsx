import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/shiva2.jpg";
import { FaPhone } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const Home = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 1000 });

    const typed = new Typed("#typed-text", {
      strings: [
        "Web Developer",
        "Coder",
        "Web Designer",
        "Video Editor",
        "Content Creator",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen text-white font-poppins flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-[rgb(0,5,23)]"
    >
      {/* Animation injected directly */}
      <style>{`
        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(255, 165, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 12px 2px rgba(255, 165, 0, 0.5);
          }
        }
        .animate-border-glow {
          animation: borderGlow 2s infinite ease-in-out;
        }
      `}</style>

      {/* 🔲 Stylish Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 [transform:rotate(5deg)] bg-[linear-gradient(to_right,rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,165,0,0.1)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* 🟧 Orange Glow */}
      <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] bg-orange-500 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* 🟦 Blue Glow */}
      <div className="absolute top-[30%] right-[8%] w-[250px] h-[250px] bg-sky-500 opacity-25 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 🌟 Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Image */}
       <div
  className="w-full md:w-1/3 flex justify-center md:justify-end mt-28 md:mt-0"
  data-aos="fade-right"
>

          <img
            src={heroImage}
            alt="Shiva Pareek"
            className="w-2/3 sm:w-1/2 md:w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg z-10"
          />
        </div>

        {/* Text */}
        <div
          className="w-full md:flex-1 text-center md:text-left space-y-4 flex flex-col items-center md:items-start px-2 sm:px-4"
          data-aos="fade-left"
        >
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl leading-normal">
            Hi, My name is{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">
              Shiva Pareek
            </span>
            <br />
            and I am a passionate
            <br />
            <span
              id="typed-text"
              className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text"
            ></span>
          </h1>

          {/* 🔘 Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4 flex-wrap">
            {/* Download Button */}
         <>
  <style>{`
    @keyframes sweepBorder {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}</style>

  <a
    href="https://drive.google.com/file/d/1gByaWsjLK7jFmntRa0KbN2toPGoKPN_M/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 min-w-[180px] text-sm sm:text-base md:text-lg font-medium rounded-full bg-black overflow-hidden group transition-transform duration-300 hover:scale-105"
  >
    {/* Glowing border sweep */}
    <span
      className="absolute top-0 left-0 h-full w-full z-0"
      style={{
        background:
          "linear-gradient(120deg, transparent, #fb923c, transparent)",
        animation: "sweepBorder 2s linear infinite",
      }}
    ></span>

    {/* Inner dark mask */}
    <span className="absolute inset-0 m-[2px] rounded-full bg-[rgb(0,5,23)] z-10"></span>

    {/* Icon + Gradient Text */}
    <span className="relative z-20 flex items-center">
      <HiOutlineArrowDownTray className="text-2xl mr-2 text-orange-400" />
      <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        Download CV
      </span>
    </span>
  </a>
</>

      <>
  <a
    href="#contact"
    className="relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 min-w-[180px] text-sm sm:text-base md:text-lg font-medium rounded-full bg-black overflow-hidden group transition-transform duration-300 hover:scale-105"
  >
    <span
      className="absolute top-0 left-0 h-full w-full z-0"
      style={{
        background:
          "linear-gradient(120deg, transparent, #fb923c, transparent)",
        animation: "sweepBorder 2s linear infinite",
      }}
    ></span>

    <span className="absolute inset-0 m-[2px] rounded-full bg-[rgb(0,5,23)] z-10"></span>

    <span className="relative z-20 flex items-center">
      <FaPhone className="text-xl mr-2 text-orange-400" />
      <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        Contact Me
      </span>
    </span>
  </a>
</>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
