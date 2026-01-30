import React, { useState } from "react";
import { NavLink } from "react-router"; // Using 'react-router' as requested

function Navbar() {
  // 1. LOGIC: Define state and functions INSIDE the component
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEmail = () => {
    window.location.href = "mailto:ds493133@gmail.com?subject=Hello&body=Hi";
  };

  const closeMobileMenu = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur(); // Unfocus the dropdown to close it
    }
    setIsMobileMenuOpen(false);
  };

  // 2. DATA: Define your navigation links
  const navLinks = [
    { name: "Home", path: "/" }, // Changed to "/" to match your main.jsx router
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Skills", path: "/Skills" },
    { name: "Contact", path: "/Contact" },
  ];

  // 3. RENDER: The complete JSX structure
  return (
    <div className="navbar fixed top-0 z-50 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 md:px-8 transition-all duration-300">
      {/* --- LEFT SIDE: Mobile Menu & Logo --- */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu Items */}
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-2xl bg-gray-900 border border-white/10 rounded-box w-64 text-white"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-400 font-bold bg-white/5"
                      : "hover:text-cyan-300"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="btn btn-ghost text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform"
        >
          Devendra.
        </NavLink>
      </div>

      {/* --- CENTER: DESKTOP MENU --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-base font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-white hover:bg-white/5 transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400 font-bold border-b-2 border-cyan-400 rounded-none pb-1"
                      : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* --- RIGHT: CTA BUTTON --- */}
      <div className="navbar-end">
        <button
          onClick={handleEmail}
          className="relative px-6 py-2.5 font-bold text-white rounded-full bg-linear-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
