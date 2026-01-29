import React, { useState } from "react";
import { Link } from "react-router";

function AboutCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Function to calculate tilt based on mouse position
  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    // Adjust these numbers (20) to make the tilt more or less aggressive
    const rotateX = (centerY - y) / 20;
    const rotateY = (x - centerX) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="hero min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 100%, #000000 78%, #010133 100%)",
        perspective: "1000px", // Necessary for 3D depth
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotate}
        className="hero-content text-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glassmorphism Card with 3D layers */}
        <div className="max-w-2xl p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-t-white/20">
          {/* Text elements are pushed "forward" in 3D space using translateZ */}
          <h1
            style={{ transform: "translateZ(50px)" }}
            className="text-6xl font-black text-white mb-4 tracking-tighter"
          >
            Hello, I'm <span className="text-blue-500">Devendra</span>
          </h1>

          <h2
            style={{ transform: "translateZ(30px)" }}
            className="text-xl font-mono text-blue-400 mb-6 uppercase tracking-widest animate-pulse"
          >
          Full-Stack Developer
          </h2>

          <p
            style={{ transform: "translateZ(20px)" }}
            className="text-slate-300 text-lg leading-relaxed mb-8"
          >
           I am a learner who is passionate about building intelligent systems, scalable web
            applications, and solving real-world problems with code.
          </p>

          <div
            style={{ transform: "translateZ(40px)" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg">
                View My Work
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
