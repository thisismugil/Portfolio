import React from 'react';
import BG from "../components/assets/bg.png";
import { IconCloudDemo } from "../components/IconCloudDemo"; // Adjust the import path as needed

const About = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center min-h-screen px-6 py-9"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.6)",
        height: "100vh", // Ensure the component takes the full viewport height
        width: "100vw",  // Ensure the component takes the full viewport width
      }}
    >

      <div className="flex justify-center w-full flex-grow">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default About;
