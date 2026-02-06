import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProjectCard from "../components/card/ProjectCard";

function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black relative">
      <Navbar />

      {/* Signature Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 max-w-6xl">
        {/* Page Header */}
        <div className="mb-20 border-b border-zinc-800 pb-8">
          <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
            <span className="w-2 h-2 bg-zinc-700"></span>
            <span>Project Archive</span>
            <span>•</span>
            <span>Selected Works</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase italic">
            Works_
          </h1>
        </div>

        {/* Manual Grid Placement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
          <ProjectCard
            id="01"
            title="DocShield"
            category="System Architecture"
            description="Automated document verification system integrating React.js and REST APIs for real-time authentication[cite: 20, 21]."
            tech={["React.js", "Tailwind CSS", "JavaScript", "REST APIs"]}
            link="https://github.com/Devendra6969/DocShield"
            year="2025"
          />

          <ProjectCard
            id="02"
            title="Currency Converter"
            category="FinTech Tool"
            description="Real-time currency exchange platform utilizing custom React hooks for optimized data fetching and state management."
            tech={["React.js", "JavaScript", "REST API", "Tailwind CSS"]}
            link="https://github.com/Devendra6969/currency-converter"
            year="2024"
          />

          <ProjectCard
            id="03"
            title="TO-DO Task Manager"
            category="Daily Tool"
            description="Helps you manage you daily goals on your screen and make you more productive"
            tech={["React", "Js", "HTML", "Context-API"]}
            link="https://github.com/Devendra6969/New_React_Project/tree/main/todo-app"
            year="2025"
          />
          <ProjectCard
            id={crypto.randomUUID()}
            title=""
            category=""
            description="Comming Soon"
            tech={["React", "JS"]}
            link="#"
            year="2026"
          />
        </div>

        {/* Footer Statistics */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          <span>VIT Bhopal // 2026 [cite: 5, 12]</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>System Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;