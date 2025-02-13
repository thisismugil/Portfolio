import { Link } from "react-router-dom";
import profile from "../components/assets/profile.jpg"; // Adjust path if necessary
import { useEffect, useState } from "react";

function Home() {
  const name = "Mugilan".split(""); // Split name into an array of letters
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${profile})`,
          backgroundSize: "80%", // Zoomed out by 30%
          backgroundPosition: "center",
          filter: "brightness(0.6)", // Darken image for readability
        }}
      ></div>

      {/* Content on top of the background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center">
        {/* Animated Name with Gradient */}
        <h1 className="text-5xl font-bold mb-4 flex leading-[1.2] overflow-visible">
          {name.map((letter, index) => (
            <span
              key={index}
              className={`inline-flex transition-opacity duration-500 ${
                animated ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                background: "linear-gradient(to right, gray, white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingBottom: "5px", // Prevents text cut-off
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle with Gradient */}
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

        <p className="text-xl max-w-4xl font-bold text-center text-white p-4 ">
          I'm a passionate software developer with a keen interest in building innovative solutions
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/about"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Click here to know more
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Any queries? Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
