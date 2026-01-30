import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-zinc-950 to-gray-950 text-white font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-900 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-green-500 uppercase mb-2">
              About Me
            </h2>
            <h1 className="text-5xl font-extrabold leading-tight">
              <strong>Namaste 🙏🏻</strong>
              <br /> I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-rose-400">
                Devendra Singh
              </span>
            </h1>
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a final-year student at{" "}
              <span className="text-white font-semibold">VIT Bhopal</span>. I
              describe myself as a{" "}
              <strong className="text-cyan-200">
                part-time developer and full-time coder
              </strong>
              .
            </p>
            <p>
              I have worked on many projects during my college journey—from
              AI-powered tools to responsive web apps—and I continue to build
              and learn every single day.
            </p>
            <p>
              Professionally, I have gained experience as a{" "}
              <strong>Freelance AI Model Trainer</strong> at{" "}
              <span className="text-white">
                <Link to="https://outlier.ai"
                 target="_blank"
                 className="text-blue-600"
                 
                 >
                  Outlier
                </Link>
              </span>
              , where I optimized code generation models and refined RLHF
              workflows.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "Tailwind v4",
              "C++",
              "Python",
              "DSA",
              "OOPs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium text-blue-100 bg-blue-950/40 border border-blue-800/50 rounded-full hover:bg-blue-900/60 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="/26_jan.pdf"
              download="Devendra_Singh_Resume.pdf"
              className="px-8 py-3 bg-linear-to-r from-blue-700 to-rose-800 rounded-xl font-bold text-white shadow-lg shadow-rose-900/20 hover:scale-105 active:scale-95 transition-transform"
            >
              Download CV
            </a>

            {/* FIXED: Link handles the styling and navigation directly */}
            <Link
              to="/projects"
              className="px-8 py-3 bg-linear-to-r from-blue-700 to-rose-800 rounded-xl font-bold text-white shadow-lg shadow-rose-900/20 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
            >
              See My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
