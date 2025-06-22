import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import myProjectImg from "../assets/my-web3.png";
import faceVisionImg from "../assets/uemfacevision.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Samrat Dzns: Ecommerce Website",
      description:
        "A 3D renders and graphic design website offering digital assets for YouTube thumbnails, logos, banners, and posters. Special focus on 3D game-related content and resources.",
      image: myProjectImg,
      link: "https://shivapareek.github.io/samratdzns-ecommerce/",
    },
    {
      title: "UEM FaceVision: Face Detection System",
      description:
        "A face recognition-based photo management system using FastAPI, React, Firebase, and Dlib/FaceNet. Features include role-based access (Admin/User), secure login, face matching, and photo organization.",
      image: faceVisionImg,
      link: "https://github.com/ShivaPareek/uem-facevision",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[rgb(0,5,23)] text-orange-400 font-inter relative overflow-hidden"
    >
      {/* Top Line + Code Snippet */}
      <div className="absolute top-0 left-0 w-full z-20">
          {/* <div className="h-[1px]  mt-2 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 " /> */}
  <div className="absolute top-[25px] left-15 font-mono  sm:text-base text-orange-400 opacity-75">
          <code>
            <span className="text-orange-400">const </span>
            <span className="text-white">projects </span>
            <span className="text-orange-400">= () =&gt; {'{'}</span>
          </code>
        </div>
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto relative z-10">
     <div data-aos="fade-up" className="text-center mb-20 px-4">
  <h2 className="text-4xl md:text-5xl font-bold leading-[1.4] text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text mb-4">
    My Projects
  </h2>
  <p className="italic text-gray-300 mb-2 md:mb-6">Some highlights of my work</p>
</div>



        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white/5 border border-orange-400/10 rounded-2xl overflow-hidden shadow-md transition duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="w-full aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div data-aos="fade-up" className="text-center mt-16">
          <a
            href="https://github.com/ShivaPareek"
            target="_blank"
            rel="noopener noreferrer"
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
              <FaGithub className="text-xl mr-2 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                See More on GitHub
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
