import React, { useState } from 'react';

const About = () => {
  const [isPopped, setIsPopped] = useState(null);

  const handleClick = (field) => {
    setIsPopped(field === isPopped ? null : field);
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-yellow-500 to-gray-500 px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Heyy!! Guys this is what Mugilan is about
      </h1>
      <div className="flex flex-col space-y-6">
        {/* Card 1: My Journey */}
        <div
          className={`relative rounded-lg shadow-lg p-8 cursor-pointer transform transition-all duration-300 ${
            isPopped === 'journey' ? 'scale-105' : 'scale-100'
          } bg-gradient-to-r from-purple-500 to-pink-500`}
          onClick={() => handleClick('journey')}
          title="Qurious ? Then why are you waiting for click here"
          >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            From Passion to Proficiency: My Journey as a Software Developer
          </h2>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isPopped === 'journey' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="text-white text-lg space-y-2 pt-2">
              <p>
                My journey into the world of software development started with a deep curiosity
                about how technology powers the digital world around us. What began as an interest
                soon transformed into a passion for building solutions that bridge the gap between
                complex backend logic and seamless user experiences.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-6">Mastering the Craft</p>
              <p>
                Over the years, I have honed my skills in various programming languages and
                frameworks, constantly striving to stay updated with the latest trends and best
                practices in the industry. This journey has been both challenging and rewarding,
                pushing me to grow both professionally and personally.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-6">Real-World Experience</p>
              <p>
              During my five-month internship as a software developer,
              I gained hands-on experience working on real-world projects, 
              collaborating with teams, and solving challenges that refined my problem-solving skills. 
              This phase not only solidified my technical expertise but also strengthened my ability to adapt, learn, and innovate.
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-6">Exploring AI & Beyond</p>
              <p>
              While my core expertise lies in web development,
              I have also explored the fascinating world of AI and Machine Learning, 
              gaining foundational knowledge that inspires me to integrate intelligent solutions into applications. 
              This curiosity drives me to keep learning and evolving, staying ahead in the ever-changing tech landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Why I Chose This Domain */}
        <div
          className={`relative rounded-lg shadow-lg p-8 cursor-pointer transform transition-all duration-300 ${
            isPopped === 'domain' ? 'scale-105' : 'scale-100'
          } bg-gradient-to-r from-green-500 to-yellow-500`}
          onClick={() => handleClick('domain')}
          title="Learn about my motivation!"
        >
          <h2 className="text-2xl font-bold text-black mb-4">Why I Chose This Domain</h2>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isPopped === 'domain' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="text-white text-lg space-y-4 pt-4">
              <p>Explanation of why you chose your professional domain and what drives your passion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
