import React from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Portfolio() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${sectionId}" not found.`);
    }
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Mugilan's Portfolio</div>
          <div className="space-x-4">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      <Home id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default Portfolio;
