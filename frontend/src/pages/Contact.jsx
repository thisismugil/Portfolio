import React from 'react';
import BG from "../components/assets/bg.jpeg";

function Contact({ id }) {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600">
        This page will contain a contact form and your professional contact information.
      </p>
    </div>
  );
}

export default Contact;
