import React from "react";
import Navbar from "../components/navbar/Navbar";
import AboutCard from "../components/card/AboutCard";

function Home() {
  const githubUser = "Devendra6969";
  // Default URL (Green colors)
  const chartUrl = `https://ghchart.rshah.org/${githubUser}`;

  return (
    // Changed to solid background matching your theme (No Linear Gradient)
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center">
      <Navbar />


      <div className="w-full flex justify-center mt-8 mb-16 relative z-10">
        <AboutCard />
      </div>


      <div className="w-full max-w-5xl px-6 pb-20 relative z-10">
        <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-8 ml-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Live Contribution Log</span>
        </div>


        <div className="w-full overflow-x-auto">
          <img
            src={chartUrl}
            alt="GitHub Contribution Calendar"
            className="w-full h-auto min-w-[700px] opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>


      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
    </div>
  );
}

export default Home;
