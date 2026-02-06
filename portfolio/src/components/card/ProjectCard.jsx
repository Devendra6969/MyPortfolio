import React from "react";

function ProjectCard({ id = crypto.randomUUID(), title="Comming Soon", category="", description="", tech="", link="", year=Date.now() }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative bg-[#0a0a0a] p-12 hover:bg-zinc-900 transition-colors duration-500 flex flex-col justify-between h-[400px] border-b border-r border-zinc-800"
    >
      {/* Top Section: ID & Year */}
      <div className="flex justify-between items-start mb-8 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
        <span>No. {id}</span>
        <span>{year}</span>
      </div>

      {/* Middle Section: Content */}
      <div className="space-y-6 z-10">
        <div>
          <h3 className="text-xs font-mono text-zinc-500 mb-2">{category}</h3>
          <h2 className="text-3xl font-bold text-white group-hover:underline decoration-zinc-700 underline-offset-4 decoration-1 transition-all">
            {title}
          </h2>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      {/* Bottom Section: Tech Stack & Arrow */}
      <div className="flex justify-between items-end mt-8">
        <div className="flex gap-2 flex-wrap">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 border border-zinc-800 text-[9px] font-mono text-zinc-500 uppercase group-hover:border-zinc-600 group-hover:text-zinc-300 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow Icon that slides in on hover */}
        <div className="w-8 h-8 flex items-center justify-center bg-white text-black opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>

      {/* Hover Grid Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] pointer-events-none transition-opacity duration-500"></div>
    </a>
  );
}

export default ProjectCard;
