import React from "react";
import { Link } from "react-router";

function FooterOne() {
  return (
    <footer
      className="footer footer-center p-10 text-slate-300 border-t border-white/10"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 0%, #000000 70%, #010133 100%)",
      }}
    >
      <nav className="grid grid-flow-col gap-6 font-mono text-sm tracking-widest uppercase">
        <Link
          className="link link-hover hover:text-blue-400 transition-colors"
          to="/Projects"
        >
          Projects
        </Link>
        <Link className="link link-hover hover:text-blue-400 transition-colors">
          Skills
        </Link>
        <Link
          to="/Contact"
          className="link link-hover hover:text-blue-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://github.com/Devendra6969"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            className="hover:scale-125 transition-transform hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
      </nav>

      <aside className="opacity-50 text-xs">
        <p>
          Copyright © {new Date().getFullYear()} — Designed & Built by
          <span className="text-blue-500 font-bold ml-1">Devendra Singh</span>
        </p>
      </aside>
    </footer>
  );
}

export default FooterOne;
