import React from 'react';
import BG from "../components/assets/bg.png";
import { NeonGradientCard } from "../components/magicui/neon-gradient-card"; // Correct the import path

const Projects = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center min-h-screen px-4 py-8"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.6)",
        // height: "100vh", // Ensure the component takes the full viewport height
        // width: "100vw",  // Ensure the component takes the full viewport width
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
      <div className="flex flex-col mt-24 md:flex-row justify-center items-start w-full gap-6">
        {/* Project Card 1: Object Detection using YOLO Model */}
        <NeonGradientCard className="max-w-sm items-center justify-center text-center p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-2">Object Detection </h2>
          <p className="text-white mb-4">
            Developed an object detection system using the YOLO v5 model. This project effectively identifies and classifies objects in real-time video streams.
          </p>
        </NeonGradientCard>

        {/* Project Card 2: Course AI using Django, React, GenAI */}
        <NeonGradientCard className="max-w-sm items-center justify-center text-center p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-2">Course AI</h2>
          <p className="text-white mb-4">
            AI-driven course platform using Django and React. Integrated Generative AI to enhance content creation and providing an learning experience.
          </p>
        </NeonGradientCard>

        <NeonGradientCard className="max-w-sm items-center justify-center text-center p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-2">Personal Portfolio</h2>
          <p className="text-white mb-4">
            Designed and developed a personal portfolio website using React and Tailwind CSS. The website showcases my skills, projects, and experience.
          </p>
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default Projects;
