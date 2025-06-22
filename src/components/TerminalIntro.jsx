import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TerminalIntro = () => {
  return (
    <section className="relative bg-[rgb(0,5,23)] text-orange-400 font-mono px-4 pt-20 pb-10 flex flex-col items-center justify-start overflow-hidden z-0">

      {/* 🔹 Subtle Static Glow on Right Side (Fixed Positioning & Layer) */}
      <div className="absolute top-40 left-45 w-[200px] h-[200px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-[120px] opacity-60 z-[-1]" />
      {/* <div className="absolute bottom-20 right-45 w-[200px] h-[200px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-[120px] opacity-60 z-[-1]" /> */}

      {/* 🔸 Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 z-10 mb-8">
        Terminal Intro
      </h2>

      {/* 🧾 Terminal Box */}
      <div className="max-w-3xl w-full relative rounded-xl p-6 md:p-10 border-l-4 border-orange-500/60 bg-white/5 backdrop-blur-md shadow-[0_0_25px_#fb923c11] z-10">

        {/* Decorative Code Start Line */}
        <div className="absolute top-4 left-6 text-sm text-orange-500 opacity-80">
          <code>
            <span className="text-orange-400">const </span>
            <span className="text-white">terminal </span>
            <span className="text-orange-400">= () =&gt; {'{'}</span>
          </code>
        </div>

        {/* Terminal Content */}
        <div className="mt-14 ml-6">

          {/* whoami */}
          <p className="mb-2">
            <span className="text-orange-500">&gt;</span> whoami
          </p>
          <p className="mb-6 pl-4 text-orange-300 text-lg">
            <Typewriter
              words={["Hello, I'm Shiva Pareek", "A Developer, Designer, Dreamer"]}
              loop={false}
              cursor
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </p>

          {/* skills */}
          <p className="mb-2">
            <span className="text-orange-500">&gt;</span> skills
          </p>
          <p className="pl-4 text-orange-300 text-lg">
            <Typewriter
              words={["React.js", "JavaScript", "Firebase", "TailwindCSS", "3D Renders"]}
              loop={false}
              cursor
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </p>
        </div>

        {/* Closing Bracket */}
        <div className="mt-10 ml-6 text-sm text-orange-500 opacity-70">
          <code>{'}'}</code>
        </div>
      </div>
    </section>
  );
};

export default TerminalIntro;
