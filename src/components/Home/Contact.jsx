"use client";

import React, { useState } from "react";
import { Users, Briefcase, Heart, RotateCw, Sparkles } from "lucide-react";
import Link from "next/link";

const Card = ({
  icon: Icon,
  title,
  desc,
  backPoints,
  link,
  colorFrom,
  colorVia,
  colorTo,
  actionLabel,
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      className="relative w-80 h-[420px] [perspective:1000px] cursor-pointer select-none"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={toggleFlip}
    >
      {/* 3D Flip Container */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center rounded-2xl shadow-2xl p-6 text-white bg-gradient-to-br ${colorFrom} ${colorVia} ${colorTo} hover:scale-105 transition-transform [backface-visibility:hidden]`}
        >
          <Icon size={60} className="mb-4 drop-shadow-lg" />
          <h2 className="text-3xl font-bold mb-3 text-center">{title}</h2>
          <p className="text-sm text-center opacity-90 mb-5">{desc}</p>
          <Link
            href={link}
            className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            Explore
          </Link>
          <button
            onClick={toggleFlip}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <RotateCw className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-gradient-to-tr ${colorFrom} ${colorVia} ${colorTo} p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]`}
        >
          <Sparkles size={50} className="mb-3 opacity-90" />
          <h3 className="text-2xl font-bold mb-3 text-white text-center">{title}</h3>

          <ul className="text-sm text-center mb-4 space-y-2 text-white/90">
            {backPoints.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>

          <Link
            href={link}
            className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            {actionLabel}
          </Link>

          <button
            onClick={toggleFlip}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <RotateCw className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <section className="min-h-screen backdrop-blur-md flex flex-col items-center justify-center gap-10 md:gap-20 bg-neutral-950 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
        Get Involved
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Card
          icon={Users}
          title="Join Our Foundation"
          desc="Be part of a community that drives real change and connects people with purpose."
          backPoints={[
            "Work with passionate volunteers.",
            "Attend social events and workshops.",
            "Grow your network and skills.",
          ]}
          link="/join-us"
          actionLabel="Join Now"
          colorFrom="from-indigo-500"
          colorVia="via-purple-600"
          colorTo="to-fuchsia-700"
        />

        <Card
          icon={Briefcase}
          title="Get Employed"
          desc="Find career opportunities, internships, and workshops to boost your future."
          backPoints={[
            "Apply for curated job listings.",
            "Get resume and interview support.",
            "Access free learning sessions.",
          ]}
          link="/get-employed"
          actionLabel="Apply Today"
          colorFrom="from-teal-400"
          colorVia="via-cyan-500"
          colorTo="to-sky-600"
        />

        <Card
          icon={Heart}
          title="Donate"
          desc="Your kindness fuels change. Support education and empowerment today."
          backPoints={[
            "Fund children’s education programs.",
            "Provide meals and shelter to families.",
            "Support healthcare for underprivileged groups.",
          ]}
          link="/donate"
          actionLabel="Donate Now"
          colorFrom="from-orange-400"
          colorVia="via-red-500"
          colorTo="to-rose-600"
        />
      </div>
    </section>
  );
}

export default Contact;
