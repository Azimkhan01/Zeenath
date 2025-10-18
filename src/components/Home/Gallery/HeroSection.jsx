"use client";

import { ArrowDownNarrowWide, SquareActivity } from "lucide-react";
import React, { useRef } from "react";

function HeroSection() {
  const memoriesRef = useRef(null);

  const handleScrollDown = () => {
    if (memoriesRef.current) {
      memoriesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white relative overflow-hidden"
        onClick={handleScrollDown}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_50%)]" />

        <div className="flex items-center mb-6 z-10">
          <p className="flex items-center gap-2 text-lg md:text-2xl font-medium">
            <SquareActivity /> Zeenath Foundation
          </p>
        </div>

        <h1 className="text-center text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tl from-purple-200 via-gray-100 to-pink-300 animate-gradientMove drop-shadow-lg">
          Our Wonderful Memories
          <span className="text-blue-300">.</span>
        </h1>

        <button
          onClick={handleScrollDown}
          className="mt-10 text-6xl font-extrabold text-white drop-shadow-md animate-bounce hover:scale-110 transition-transform duration-300"
        >
          <ArrowDownNarrowWide />
        </button>

        <p className="absolute bottom-6 text-sm opacity-70">
          Click anywhere to scroll ↓
        </p>
      </section>

    
    </>
  );
}

export default HeroSection;
