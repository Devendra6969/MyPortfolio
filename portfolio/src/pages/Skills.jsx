import React from "react";

function Skills() {
  // Ordered by: Languages, Frontend, Backend/Tools
  const skillIcons = [
    { src: "ISO_C++_Logo.svg.png", label: "C++" },
    { src: "Python-logo-notext.svg.png", label: "Python" },
    { src: "Javascript_badge.svg.png", label: "JavaScript" },
    { src: "HTML5_logo_and_wordmark.svg.png", label: "HTML5" },
    { src: "CSS3_logo_and_wordmark.svg.png", label: "CSS3" },
    { src: "react-svgrepo-com.svg", label: "React" },
    { src: "next-js-svgrepo-com.svg", label: "Next.js" },
    { src: "tailwind-svgrepo-com.svg", label: "Tailwind" },
    { src: "SQL_Image.svg.png", label: "SQL" },
    { src: "docker-svgrepo-com.svg", label: "Docker" },
    { src: "github-142-svgrepo-com.svg", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black py-24 relative overflow-hidden">
      {/* Background: Signature grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header Section: Technical & Brutalist */}
        <div className="mb-20 border-b border-zinc-800 pb-8">
          <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            <span className="w-2 h-2 bg-zinc-700"></span>
            <span>Inventory</span>
            <span>•</span>
            <span>v.2026</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
            Tech Stack
          </h2>
        </div>

        {/* The Grid Inventory System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-zinc-800">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="group relative border-r border-b border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors duration-300 aspect-square flex flex-col items-center justify-center p-6"
            >
              {/* Corner Accents (Technical Flourish) */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
              <div className="absolute top-2 right-2 text-[8px] font-mono text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                REQ
              </div>

              {/* Icon Container */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={skill.src}
                  alt={skill.label}
                  className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Label (Only visible on hover or kept subtle) */}
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.label}
              </span>
            </div>
          ))}

          {/* Empty Grid Cells to fill row (Optional Aesthetic Choice) */}
          <div className="hidden lg:block border-r border-b border-zinc-800 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] hover:animate-shimmer"></div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>System Architecture // 2026</p>
          <p>Verified Modules</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
