import React from "react";
import { Link } from "react-router"; // React Router v7

function About() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black overflow-hidden pt-20">
      {/* Background: Signature grid pattern and subtle corner glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800 rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section: High Contrast & Monospace */}
          <header className="mb-16 space-y-6">
            <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
              <span>Profile</span>
              <span>•</span>
              <span>UP, IN</span>
            </div>

            {/* IMAGE REPLACING THE NAME TEXT */}
            {/* UPDATED: Larger Size + B&W to Color Effect */}
            <div className="py-4">
              <img
                src="ProfileImage.png"
                alt="Devendra Singh"
                className="h-32 md:h-48 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>

            <p className="text-zinc-500 font-mono text-lg lowercase">
              /Devendra/ • engineer • product builder
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Bio */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6 text-zinc-400 text-xl leading-relaxed border-l border-zinc-800 pl-8">
                <p>
                  I consider myself a
                  <strong className="text-zinc-200">
                    part-time developer and full-time problem solver
                  </strong>
                  , driven by a passion for building practical and scalable
                  solutions. I enjoy translating real-world challenges into
                  efficient technical implementations. I have actively
                  participated in multiple hackathons, contributed to college
                  technical fests, regularly engage with industry blogs, and am
                  currently sharing my own technical insights through writing.
                </p>

                <p>
                  Professionally, I gained experience as an{" "}
                  <strong className="text-zinc-200">
                    AI Model Trainer (Freelance)
                  </strong>{" "}
                  at{" "}
                  <Link
                    to="https://outlier.ai"
                    target="_blank"
                    className="text-white hover:text-zinc-500 underline underline-offset-4 transition-colors"
                  >
                    Outlier AI
                  </Link>{" "}
                  , where I executed RLHF workflows to refine Generative AI
                  models.
                </p>
              </div>

              {/* Action Buttons: Segmented Brutalist Style */}
              <div className="flex flex-col sm:flex-row gap-0 border border-zinc-800 w-fit">
                <a
                  href="/26_jan.pdf"
                  download="Devendra_Singh_Resume.pdf"
                  className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-colors text-center"
                >
                  Download CV
                </a>
                <Link
                  to="/projects"
                  className="px-10 py-4 border-t sm:border-t-0 sm:border-l border-zinc-800 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:bg-zinc-900 transition-colors text-center"
                >
                  See Archive
                </Link>
              </div>
            </div>

            {/* Right Column: Tech Stack Grid */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
                Core Stack
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Tailwind",
                  "JavaScript",
                  "Python",
                  "C++",
                  "SQL",
                  "Docker",
                  "Git",
                  "DSA",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 text-[11px] font-mono border border-zinc-900 bg-zinc-900/30 text-zinc-500 hover:border-zinc-700 hover:text-zinc-200 transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="pt-8 space-y-2">
                <div className="h-[1] w-full bg-zinc-900"></div>
                <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest leading-loose">
                  Expected Graduation: 2026
                  <br />
                  Specialization: AI / ML
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
