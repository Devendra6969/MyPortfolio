import React, { useState } from "react";
import { NavLink } from "react-router"; // React Router v7

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEmail = () => {

    window.location.href =
      "mailto:ds493133@gmail.com?subject=Inquiry&body=Hi Devendra,";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Skills", path: "/Skills" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* --- LOGO: Brutalist Style --- */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity"
          >
            Devendra
            <span className="text-zinc-500 font-mono text-xs ml-2">.v7</span>
          </NavLink>
        </div>


        <div className="hidden lg:flex items-center bg-zinc-900 border border-zinc-800 p-1">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-200 ${
                      isActive
                        ? "bg-white text-black font-bold"
                        : "text-zinc-500 hover:text-white hover:bg-zinc-800"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Availability
            </span>
            <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Ready to Hire
            </span>
          </div>

          <button
            onClick={handleEmail}
            className="px-6 py-2.5 bg-white text-black font-bold uppercase text-[11px] tracking-widest hover:bg-zinc-200 transition-colors rounded-none shadow-[4px_4px_0px_rgba(82,82,91,0.5)] active:translate-x-[2] active:translate-y-[2] active:shadow-none"
          >
            Hire Me
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 border border-zinc-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY: Full screen minimalist --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-8 lg:hidden">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl font-light"
            >
              &times;
            </button>
          </div>
          <ul className="mt-12 space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold text-white hover:italic transition-all"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-zinc-800 pt-8">
            <p className="font-mono text-zinc-500 text-xs uppercase tracking-widest">
              VIT Bhopal // 2026
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
