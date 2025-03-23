import React from 'react';
import BG from "../components/assets/bg.png";

const Experience = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center min-h-screen px-4 py-8"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.6)",
        height: "100vh", // Ensure the component takes the full viewport height
        width: "100vw",  // Ensure the component takes the full viewport width
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-6">Experience</h1>

      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-6">
        {/* Internship 1: Software Developer at SNS IHub */}
        <div className="bg-blend-screen bg-opacity-90 p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-2">Software Developer Intern</h2>
          <h3 className="text-lg font-medium text-white mb-1">SNS IHub</h3>
          <p className="text-sm text-white mb-4">October 2023 – Present</p>
          <ul className="list-disc pl-6 text-white">
            <li>Worked on both frontend and backend development using Python Django and React.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Implemented responsive design principles to ensure optimal user experience across devices.</li>
            <li>Participated in code reviews and contributed to improving code quality and maintainability.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Experience;
