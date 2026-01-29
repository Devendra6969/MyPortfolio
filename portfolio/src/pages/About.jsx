import React from 'react'
import Navbar from '../components/navbar/Navbar';
import AboutCard from '../components/card/AboutCard';

function About() {
  return (
    <div className="h-screen w-full bg-linear-to-tl from-black via-gray-950 to-black text-white">
      
      <Navbar />
      <AboutCard />
    </div>
  );
}

export default About