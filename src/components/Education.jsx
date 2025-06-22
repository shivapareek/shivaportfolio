import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendar } from "react-icons/fa";

// Timeline Card Component
const TimelineItem = ({ year, title, institution, details }) => (
  <div className="relative pl-10 pb-12 last:pb-0">
    <span className="absolute left-[15px] top-2 w-3 h-3 bg-orange-400 rounded-full shadow-md z-10" />
    <span className="absolute left-[20px] top-4 w-[2px] bottom-[-12px] bg-orange-400/40 z-0" />
    <div className="bg-white/5 backdrop-blur-lg border border-orange-300/10 p-5 rounded-xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2 text-orange-400">
        <FaCalendar />
        <h3 className="text-sm font-medium">{year}</h3>
      </div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="text-sm text-white/80">{institution}</p>
      {details && <p className="text-sm text-white/60 mt-1">{details}</p>}
    </div>
  </div>
);

// Main Section
const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="education"
      className="py-32 px-6 bg-[rgb(0,5,23)] text-orange-400 font-inter relative overflow-hidden"
    >
      {/* Top Dev Line + Snippet */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm opacity-60" />
        <div className="absolute top-[25px] left-15 font-mono  sm:text-base text-orange-400 opacity-75">
          <code>
            <span className="text-orange-400">const </span>
            <span className="text-white">education </span>
            <span className="text-orange-400">= () =&gt; {'{'}</span>
          </code>
        </div>
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text mb-2 leading-tight">
  Education & Experience
</h2>

          <p className="italic text-gray-300 mb-6">My learning & working timeline</p>

        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Education</h2>
            <TimelineItem
              year="2022 - 2026"
              title="B.Tech - Computer Science"
              institution="UEM Jaipur"
              details="GPA: 8.41"
            />
            <TimelineItem
              year="2022"
              title="Senior Secondary"
              institution="Impulse Career Institute"
              details="82.4%"
            />
            <TimelineItem
              year="2020"
              title="Secondary Education"
              institution="Bansal Institute"
              details="81%"
            />
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Experience</h2>
            <TimelineItem
              year="Jul '24 - Sep '24"
              title="Android Dev Intern"
              institution="EduSkills (AICTE)"
            />
            <TimelineItem
              year="Jan '25 - Feb '25"
              title="Web Dev Intern"
              institution="CodSoft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
