import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TerminalIntro from "./components/TerminalIntro";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TerminalIntro />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
