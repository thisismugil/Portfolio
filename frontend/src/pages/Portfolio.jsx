import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      console.warn(`Element with id "${sectionId}" not found.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <nav className="fixed top-0 w-full text-green p-4 z-20 bg-gray-800 bg-opacity-75">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Mugilan's Portfolio</div>
          <div className="space-x-4">
            <button
              className={`border rounded-lg px-4 py-2 shadow-lg ${activeSection === "home" ? "bg-white text-gray-800" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className={`border rounded-lg px-4 py-2 shadow-lg ${activeSection === "about" ? "bg-white text-gray-800" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className={`border rounded-lg px-4 py-2 shadow-lg ${activeSection === "experience" ? "bg-white text-gray-800" : ""}`}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className={`border rounded-lg px-4 py-2 shadow-lg ${activeSection === "projects" ? "bg-white text-gray-800" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className={`border rounded-lg px-4 py-2 shadow-lg ${activeSection === "contact" ? "bg-white text-gray-800" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
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
