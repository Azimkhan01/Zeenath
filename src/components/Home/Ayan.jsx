"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Ayan() {
  const container = useRef();
  const imageRef = useRef([]);
  const leftRef = useRef();

  const images = ["/home/ayyanfront.jpg"];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, { opacity: 0, scale: 1.05 });
      gsap.set(leftRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=50%", // reduced for smoother mobile scroll
          scrub: true,
          // pin: true,
        },
      });

      tl.to(leftRef.current, { opacity: 1, y: 0, duration: 1 }, 0);

      imageRef.current.forEach((img, i) => {
        tl.to(img, { opacity: 1, scale: 1, duration: 1 }, i * 1.2 + 0.5)
          .to(img, { opacity: 1, scale: 1, duration: 1 }, i * 1.2 + 1.2);
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="sticky top-0 flex flex-col-reverse md:flex-row min-h-screen bg-white overflow-hidden"
    >
      {/* Left Section */}
      <div
        ref={leftRef}
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-20 bg-blue-100 space-y-5"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Ayyan Khan
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700">
          Full Stack Developer
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-md">
          Passionate about building scalable web solutions and crafting elegant
          user experiences with cutting-edge technologies.
        </p>

        {/* Socials */}
        <div className="flex space-x-5 pt-6 justify-center md:justify-start">
          <a
            href="https://github.com"
            target="_blank"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex gap-2 justify-center items-center relative bg-blue-200">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => (imageRef.current[index] = el)}
            className="p-4 md:p-0 inset-0 flex justify-center items-center opacity-0 "
          >
            <img
              src={item}
              alt={`Ayyan ${index}`}
            //   width={1000}
            //   height={1000}
              className=" rounded-2xl shadow-xl object-cover w-5/6"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ayan;
