import React, { useState } from 'react';
import BG from "../components/assets/bg.png";
import ConnectWithMe from "../components/ConnectWithMe";
import { ShinyButton } from "../components/magicui/shiny-button";
import confetti from "canvas-confetti";

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showConnect, setShowConnect] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConnectClick = () => {
    setShowConnect((prevShowConnect) => !prevShowConnect);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://cyr86t0k58.execute-api.ap-southeast-2.amazonaws.com/mugil/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        triggerConfetti(); // Trigger confetti animation on success
      } else {
        setResponseMessage(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while sending the message.');
    }
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`,
        filter: "brightness(0.6)",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">Work Together !!</h1>
      <p className="text-lg text-gray-200 mb-6 text-center"></p>

      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 mt-10 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
        {responseMessage && <p className="mt-4 text-green-500 text-center">{responseMessage}</p>}
      </form>
      <div className='mt-5 max-w-xl'>
        <ShinyButton onClick={handleConnectClick}>
          {showConnect ? "Hide " : "Connect with me"}
        </ShinyButton>
        {showConnect && <ConnectWithMe />}
      </div>
    </div>
  );
}

export default Contact;
