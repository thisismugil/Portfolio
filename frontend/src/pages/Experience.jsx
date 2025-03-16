import React from 'react';
import BG from "../components/assets/bg.jpeg";

function Experience({ id }) {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Experience</h1>
      <p className="text-lg text-gray-600">
        This section will contain your work experience, internships, and any other relevant professional experience.
      </p>
    </div>
  );
}

export default Experience;
