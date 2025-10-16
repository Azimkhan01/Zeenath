"use client";

import { Square, Handshake } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Server() {
  const sectionRef = useRef();
  const cardRefs = useRef([]);
  const headingRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );

      // Animate each card
      cardRefs.current.forEach((card, i) => {
        const img = card.querySelector("img");
        const text = card.querySelector(".card-text");

        // Parallax for image (different speed)
        gsap.to(img, {
          y: i % 2 === 0 ? 50 : -50, // how much it moves
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Text fade in
        gsap.fromTo(
          text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { title: "Food", desc: "Helping That Give Energy.", image: "/home/helpingwithfood.jpg" },
    { title: "Water", desc: "Clean & Safe Water Supply.", image: "/home/cleanWater.jpg" },
    { title: "Career", desc: "Help People to Get Employment.", image: "/home/emp.png" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0A0E11] h-auto backdrop-blur-2xl flex flex-col gap-8 justify-center items-center py-16 px-4 md:px-16 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col gap-3 text-center md:text-left">
        <p className="flex gap-2 text-white font-bold items-center">
          <Square /> Zeenath Foundation
        </p>
        <h1
          ref={headingRef}
          className="text-3xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          What & How We Serve ?
        </h1>
      </div>

      {/* Cards */}
      <div className="relative flex flex-col md:flex-row w-full md:w-4/6 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative flex-1 flex flex-col items-center md:items-start gap-4"
          >
            {/* Image */}
            <div className="w-full md:w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="card-text text-center md:text-left">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                {item.desc}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link
          href="/joinUs"
          className="group bg-neutral-300/30 px-5 py-3 rounded-lg font-semibold text-white hover:text-neutral-800 hover:bg-white transition-all flex gap-2 items-center"
        >
          Join Us
          <Handshake className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
        </Link>
      </div>
    </section>
  );
}

export default Server;
