import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/shiva4.png";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaGlobeAmericas,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const icons = [
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shivapareek",
      label: "LinkedIn",
      color: "hover:text-yellow-400",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/samrat_edition/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      Icon: FaEnvelope,
      href: "mailto:pareekshiva2004@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.link/wzrfyh",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/shivapareek",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      Icon: FaGlobeAmericas,
      href: "#",
      label: "Website",
      color: "hover:text-yellow-300",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[rgb(0,5,23)] text-white font-inter relative overflow-hidden"
    >
      {/* Glowing Horizontal Line + Code Snippet Header */}
<div className="absolute top-0 left-0 w-full z-20">
  {/* Glowing Horizontal Line */}
  {/* <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 " /> */}

  {/* Code Snippet Text */}
  <div className="absolute top-[25px] left-15 font-mono  sm:text-base text-orange-400 opacity-75">
    <code>
      <span className="text-orange-400">const </span>
      <span className="text-white">about </span>
      <span className="text-orange-400">= () =&gt; {'{'}</span>
    </code>
  </div>
</div>


      {/* Background Blur Elements */}
      <div className="absolute top-15 left-10 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-15 right-10 w-96 h-96 bg-sky-500 opacity-10 rounded-full blur-3xl z-0" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-wrap min-[1025px]:flex-nowrap items-center min-[1025px]:items-start gap-16 relative z-10">
        {/* Image with Border Effect */}
        <div
          className="w-full min-[1025px]:w-[35%] flex justify-center min-[1025px]:justify-start"
          data-aos="fade-right"
        >
          <div className="relative group w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]">
            <div className="absolute inset-0 border-4 border-orange-500 rounded-3xl transform rotate-6 group-hover:rotate-0 transition duration-700" />
            <img
              src={aboutImg}
              alt="Shiva Pareek"
              className="relative rounded-3xl shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="w-full min-[1025px]:w-[65%] space-y-8 px-4 sm:px-6 text-justify"
          data-aos="fade-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text font-josefin">
            Meet Shiva Pareek
          </h1>
          <p className="text-base sm:text-lg text-white md:text-[17px] leading-loose tracking-wide font-poppins">
            Hi, I'm <span className="font-semibold text-orange-400">Shiva Pareek</span>, a 19-year-old tech enthusiast and creative professional. I'm currently pursuing a B.Tech in Computer Science Engineering (4th year). I specialize in web development and video editing. I love solving real-world problems and creating visually stunning digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 pt-4">
            {icons.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-3xl p-3 bg-white/5 rounded-full shadow-md transition duration-300 ${color} hover:scale-110`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
