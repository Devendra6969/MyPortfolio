import React, { useState } from "react";
import { Link } from "react-router"; // React Router v7

export default function AboutCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = (centerY - y) / 30; // Subtle high-end tilt
    const rotateY = (x - centerX) / 30;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 selection:bg-white selection:text-black"
      style={{ perspective: "1200px" }}
    >

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotate}
        className="relative z-10 transition-transform duration-300 ease-out px-4"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="max-w-xl p-8 md:p-12 bg-zinc-900/40 border border-zinc-800 backdrop-blur-xs shadow-[24px_24px_0px_rgba(0,0,0,0.4)]">
          {/* Header Metadata */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="flex justify-between items-center mb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>
            <span>v2.0.26 // IST</span>
          </div>

          {/* Name & Title */}
          <header style={{ transform: "translateZ(60px)" }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter italic">
              Devendra Singh
            </h1>
            <p className="text-sm font-mono text-zinc-400 mb-8 lowercase opacity-80">
              /Devendra/ • full-stack developer • India
            </p>
          </header>

          {/* Bio Section */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="space-y-6 text-zinc-400 text-lg border-l border-zinc-800 pl-6 mb-12"
          >
            <p className="leading-relaxed">
              <span className="text-white font-semibold">Namaste 🙏🏻</span>
              <br />I am a normal person who loves to solve
              real-world problems through code. I also like to solve my own
              problems or build projects according to my needs. Whether it's
              optimizing a daily workflow or architecting a complex solution, I
              am always ready to build.
            </p>
          </div>

          {/* Segmented Button Block */}
          <div
            style={{ transform: "translateZ(80px)" }}
            className="flex flex-col sm:flex-row gap-0 border border-zinc-800"
          >
            <Link
              to="/Projects"
              className="flex-1 px-8 py-4 bg-white text-black text-center font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-zinc-200 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/Contact"
              className="flex-1 px-8 py-4 bg-transparent text-white text-center font-bold uppercase text-[11px] tracking-[0.2em] border-t sm:border-t-0 sm:border-l border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              Let's Connect
            </Link>
          </div>

          {/* Footer Decoration */}
          <footer className="mt-12 flex justify-between items-end">
            <div className="space-y-1">

              <div className="h-px w-8 bg-zinc-700"></div>
              <p className="text-[9px] font-mono text-zinc-600 uppercase">
                VIT Bhopal // 2026
              </p>
            </div>
            <p className="text-[9px] font-mono text-zinc-700 tracking-widest text-right uppercase">
              Uttar Pradesh // India
              <br />
              EST. 2026
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
