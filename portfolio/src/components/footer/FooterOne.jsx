import React from "react";
import { Link } from "react-router"; // React Router v7

function FooterOne() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-zinc-800 text-zinc-500 font-mono text-sm overflow-hidden">
      {/* Background: Signature Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40_40] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="flex gap-8 mb-8 text-[11px] uppercase tracking-[0.2em]">
          <Link
            to="/projects"
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="hover:text-white transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/Devendra6969"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/devendrasingh100/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        {/* Footer Bottom / Status Bar */}
        <div className="w-full max-w-2xl border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} Devendra Singh</p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>All Systems Normal</span>
          </div>

          <p>Built in React / Tailwind v4</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterOne;
