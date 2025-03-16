import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const ConnectWithMe = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href="https://www.linkedin.com/in/mugilangc12" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-300"
        data-tooltip-id="linkedin-tooltip"
        data-tooltip-content="LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      <Tooltip id="linkedin-tooltip" place="top" />

      <a
        href="https://github.com/thisismugil" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-300"
        data-tooltip-id="github-tooltip"
        data-tooltip-content="GitHub"
      >
        <FaGithub size={32} />
      </a>
      <Tooltip id="github-tooltip" place="top" />

      <a
        href="https://www.instagram.com/ixm_mugil_" // Replace with your Instagram URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-300"
        data-tooltip-id="instagram-tooltip"
        data-tooltip-content="Instagram"
      >
        <FaInstagram size={32} />
      </a>
      <Tooltip id="instagram-tooltip" place="top" />
    </div>
  );
};

export default ConnectWithMe;
