"use client";

import { MoveUpRight, Square } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const sectionRef = useRef();
  const textRef = useRef();
  const videoRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate text and video container
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        videoRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            onEnter: () => videoRef.current.play(),
            onLeave: () => videoRef.current.pause(),
            onEnterBack: () => videoRef.current.play(),
            onLeaveBack: () => videoRef.current.pause(),
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full  sticky top-0 p-4 flex flex-col md:flex-row bg-neutral-100 gap-5 md:gap-0"
    >
      {/* Left Text Section */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col justify-center gap-10"
      >
        <div className="flex gap-1 font-semibold">
          <Square />
          <p>Zeenath</p>
        </div>
        <div>
          <h2 className="text-left tracking-tight text-6xl capitalize font-extrabold text-black">
            Defining the next generation of gaming
          </h2>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <Link
            className=" flex gap-2 bg-neutral-400 hover:bg-white transition border border-neutral-300 w-3/6 md:w-1/6 justify-center items-center p-3 rounded-lg font-bold text-white hover:text-neutral-400 text-lg"
            href={"/"}
          >
            Explore <MoveUpRight />
          </Link>
        </div>
      </div>

      {/* Right Video Section */}
      <div className="w-full md:w-4/6 p-4 rotate-1 bg-gradient-to-bl from-[#540707] via-black to-[#840B0B] rounded-xl">
        <video
          ref={videoRef}
          className="w-full rounded-2xl opacity-90 shadow-lg"
          muted
          playsInline
          preload="none"
        >
          <source src="/home/parentandchild.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default AboutMe;
