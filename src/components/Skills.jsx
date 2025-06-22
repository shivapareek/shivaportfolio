import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import cppIcon from "../assets/c-.png";
import pythonIcon from "../assets/python.png";
import javaIcon from "../assets/java.png";
import aeIcon from "../assets/after-effects.png";
import prIcon from "../assets/premiere-pro.png";

const SkillBar = ({ icon, name, percent }) => (
  <li className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-6 h-6" />
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <h4 className="font-semibold text-white">{percent}%</h4>
    </div>
    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-700"
        style={{
          width: `${percent}%`,
          borderRadius: "999px",
        }}
      ></div>
    </div>
  </li>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[rgb(0,5,23)] text-orange-400 font-inter relative overflow-hidden"
    >
      {/* Top Glowing Line + Code */}
      <div className="absolute top-0 left-0 w-full z-20">
          {/* <div className="h-[1px]  mt-2 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 " /> */}
  <div className="absolute top-[25px] left-15 font-mono  sm:text-base text-orange-400 opacity-75">
          <code>
            <span className="text-orange-400">const </span>
            <span className="text-white">skills </span>
            <span className="text-orange-400">= () =&gt; {'{'}</span>
          </code>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text mb-2">
            Tech Arsenal
          </h2>
          <p className="italic text-gray-300 mt-2">Tools I bend to my will</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ul className="group backdrop-blur-2xl bg-white/5 p-6 rounded-2xl border border-yellow-400/10 shadow-[0_0_30px_#f97316]/10 hover:shadow-orange-500/20 transition duration-300">
            <SkillBar icon={htmlIcon} name="HTML" percent={86} />
            <SkillBar icon={cssIcon} name="CSS" percent={76} />
            <SkillBar icon={jsIcon} name="JavaScript" percent={54} />
            <SkillBar icon={cppIcon} name="C/C++" percent={60} />
          </ul>

          <ul className="group backdrop-blur-2xl bg-white/5 p-6 rounded-2xl border border-yellow-400/10 shadow-[0_0_30px_#f97316]/10 hover:shadow-orange-500/20 transition duration-300">
            <SkillBar icon={pythonIcon} name="Python" percent={40} />
            <SkillBar icon={javaIcon} name="Java" percent={52} />
            <SkillBar icon={aeIcon} name="After Effects" percent={84} />
            <SkillBar icon={prIcon} name="Premiere Pro" percent={73} />
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Skills;
