import React from "react";

function Skills() {
  const skillIcons = [
    "HTML5_logo_and_wordmark.svg.png",
    "CSS3_logo_and_wordmark.svg.png",
    "Javascript_badge.svg.png",
    "tailwind-svgrepo-com.svg",
    "react-svgrepo-com.svg",
    "ISO_C++_Logo.svg.png",
    "Python-logo-notext.svg.png",
    "next-js-svgrepo-com.svg",
    "SQL_Image.svg.png",
    "docker-svgrepo-com.svg",
    "github-142-svgrepo-com.svg",
  ];

  return (
    <div
      className="py-16 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Added a subtle header to frame the section */}
        <h2 className="text-center text-slate-400 font-light tracking-[0.5em] uppercase mb-16 animate-pulse">
          Technical Arsenal
        </h2>

        <ul className="flex flex-wrap justify-center gap-12">
          {skillIcons.map((src, index) => (
            <li
              key={index}
              className="group relative flex items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 hover:scale-125 hover:border-blue-500/50 hover:bg-white/10"
              style={{
                animation: `ultraFloat 4s ease-in-out ${index * 0.3}s infinite`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>

              <img
                src={src}
                alt="skill-logo"
                className="h-24 w-24 object-contain transition-all duration-500 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes ultraFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
