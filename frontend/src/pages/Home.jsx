import React, { useEffect, useState } from "react";
import profile from "../components/assets/profile.jpg";
import ShinyText from "../components/Shinytext"; // Import the ShinyText component

const Home = ({ id }) => {
  const name = "Mugilan";
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <section id={id} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${profile})`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center">
        <h1 className="text-5xl font-bold mb-4 flex leading-[1.2] overflow-visible">
          <ShinyText text={name} speed={3} className="text-5xl font-bold" />
        </h1>
        <h2
          className="text-3xl mb-8 leading-[1.2] overflow-visible"
          style={{
            background: "linear-gradient(to right, yellow, white)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Software Developer
        </h2>
        <p className="text-xl max-w-4xl font-bold text-center text-white p-4">
          I'm a passionate software developer with a keen interest in building innovative solutions
        </p>
      </div>
    </section>
  );
};

export default Home;
