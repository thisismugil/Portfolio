import React from 'react';
import BG from "../components/assets/bg.jpeg";

function Projects({ id }) {
  return (
    <div
      id={id}
      className="container mx-auto px-4 py-8"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.6)",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
      <p className="text-lg text-gray-600">
        Here you'll showcase your notable projects, including descriptions and links to live demos or repositories.
      </p>
    </div>
  );
}

export default Projects;
