"use client";

import React, { useRef } from "react";
import { Square } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const imgRefs = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;

    // Parallax heading
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: -50,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // Parallax for images
    imgRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: i % 2 === 0 ? 150 : -150, opacity: 0.8, scale: 1.1 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" w-full h-screen backdrop-blur-md sticky top-0 bg-gradient-to-br from-purple-400 to-purple-300 flex justify-center items-center overflow-hidden"
    >
      <div className="relative flex justify-center items-center flex-col w-4/5 md:w-1/2">
        <h2 className="text-black flex gap-2 self-start font-bold text-lg md:text-xl mb-4">
          <Square /> Zeenath Foundation
        </h2>

        <p
          ref={headingRef}
          className="text-purple-900 text-5xl  lg:text-8xl font-extrabold text-center capitalize tracking-tight leading-tight"
        >
          Explore and work make world's humanity prize of kingdom
        </p>

        {/* Images with parallax */}
        <div
          ref={(el) => (imgRefs.current[0] = el)}
          className="absolute w-46 lg:w-52 -top-40 -left-40 lg:-left-80 -rotate-6"
        >
          <img src="/home/labor.jpg" className="rounded-xl shadow-xl" />
        </div>
        <div
          ref={(el) => (imgRefs.current[1] = el)}
          className="absolute w-46 lg:w-52 -bottom-40 -left-40 lg:-left-80 rotate-6"
        >
          <img src="/home/labor.jpg" className="rounded-xl shadow-xl" />
        </div>
        <div
          ref={(el) => (imgRefs.current[2] = el)}
          className="absolute w-46 lg:w-52 -top-40 -right-40 lg:-right-80 rotate-6"
        >
          <img src="/home/labor.jpg" className="rounded-xl shadow-xl" />
        </div>
        <div
          ref={(el) => (imgRefs.current[3] = el)}
          className="absolute w-46 lg:w-52 -bottom-40 -right-40 lg:-right-80 -rotate-6"
        >
          <img src="/home/labor.jpg" className="rounded-xl shadow-xl" />
        </div>
      </div>
    </section>
  );
}

export default About;
