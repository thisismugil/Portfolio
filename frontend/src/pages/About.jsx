import React, { useState, useEffect } from 'react';
import BG from "../components/assets/bg.png";
import { IconCloudDemo } from "../components/IconCloudDemo"; // Adjust the import path as needed

// Sample skills data - replace with your actual skills
const leftSkills = [
  { name: "Tailwind CSS", percentage: 80 },
  { name: "React", percentage: 70 },
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 75 },
  { name: "Mongo DB", percentage: 75 },
  { name: "Figma", percentage: 70 },
];

const rightSkills = [
  { name: "Python", percentage: 85 },
  { name: "Django", percentage: 85 },
  { name: "Flask", percentage: 80 },
  { name: "JavaScript", percentage: 60 },
  { name: "Git", percentage: 80 },
  { name: "Postman", percentage: 75 },
];

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{name}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-xl font-bold text-green-400 mb-4">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
};

const About = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id={id}
      className="flex flex-col items-center min-h-screen px-6 py-9"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.6)",
        height: "auto", // Allow height to adjust based on content
        width: "100vw",  // Ensure the component takes the full viewport width
      }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-10">My Skills</h2>

      <div className={`flex flex-col md:flex-row justify-center items-center gap-8 flex-grow w-full px-4 ${isMobile ? 'mobile-layout' : ''}`}>
        {/* Left Card */}
        <div className={`w-full md:w-1/3 transition-opacity duration-1000 ${isMobile ? 'mobile-fade-in' : ''}`}>
          <SkillCard title="Development Skills" skills={leftSkills} />
        </div>

        {/* Center IconCloud */}
        <div className="w-full md:w-1/3 flex justify-center items-center my-8 md:my-0">
          <IconCloudDemo />
        </div>

        {/* Right Card */}
        <div className={`w-full md:w-1/3 transition-opacity duration-1000 ${isMobile ? 'mobile-fade-in' : ''}`}>
          <SkillCard title="Technical Skills" skills={rightSkills} />
        </div>
      </div>
    </div>
  );
};

export default About;
