"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  const container = useRef();
  const leftTextRef = useRef();
  const rightTextRef = useRef();
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  const middleRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Initial state
      gsap.set([leftTextRef.current, rightTextRef.current, middleRef.current], {
        opacity: 0,
        y: 40,
      });
      gsap.set([leftImgRef.current, rightImgRef.current], {
        opacity: 0,
        scale: 1.1,
      });

      // Animation sequence
      tl.to(leftImgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          leftTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          middleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          rightImgRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          rightTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-gray-100">
      <div className="min-h-screen md:h-screen w-full flex flex-col md:flex-row justify-between items-center mt-26 md:mt-0 gap-4 px-4">
        {/* Left Section */}
        <div className="w-full p-2 md:p-0 md:w-2/6 rounded-2xl h-4/6 flex justify-center items-center relative overflow-hidden">
          <img
            ref={leftImgRef}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src="/home/indianpoor.jpg"
            alt="India need help"
          />
          <div ref={leftTextRef} className="relative z-10 px-4 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight leading-snug drop-shadow-lg">
              We Are Working <br /> But <br /> We Can't
            </h1>
          </div>
        </div>

        {/* Middle Section */}
        <div
          ref={middleRef}
          className="w-full p-1 md:p-0 md:w-2/6 h-4/6 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden"
        >
          <div className="max-w-3xl px-6 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#042C53] via-[#3F7C5E] to-[#037BB0] bg-[length:200%_200%] text-transparent bg-clip-text animate-gradientMove">
              Zeenath Foundation
            </h1>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Empowering communities through education, compassion, and
              progress.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:bg-purple-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        </div>

        {/* Right Section */}
        <div className="w-full p-2 md:p-0 md:w-2/6 h-4/6 rounded-xl flex justify-center items-center relative overflow-hidden">
          <img
            ref={rightImgRef}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src="/home/labor.jpg"
            alt="India need help"
          />
          <div ref={rightTextRef} className="relative z-10 px-4 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight leading-snug drop-shadow-lg">
              We Are Building <br /> But <br /> We Struggle
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
