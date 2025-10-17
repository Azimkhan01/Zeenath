"use client";

import React from "react";
import { Users, Briefcase, Heart, Star, DollarSign } from "lucide-react";
import Link from "next/link";
import Payment from "./Payment";

function Contact() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Join Our Foundation */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-700 text-white p-6 relative">
        {/* Floating icons */}
        <Star className="absolute top-10 left-10 w-6 h-6 text-yellow-300 opacity-80" />
        <DollarSign className="absolute bottom-20 right-16 w-6 h-6 text-green-300 opacity-80" />

        <Users size={70} className="mb-5 drop-shadow-lg" />
        <h1 className="text-5xl md:text-6xl font-bold mb-3 text-center">Join Our Foundation</h1>
        <p className="text-indigo-100 text-lg md:text-xl mb-6 max-w-lg text-center">
          Become part of a community working toward meaningful impact. Connect with like-minded people, attend events, and help us grow our initiatives.
        </p>
        <Link
          href="/join-us"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Join Now
        </Link>
      </div>

      {/* Get Employed */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-cyan-500 to-sky-600 text-white p-6 relative">
        {/* Floating icons */}
        <Star className="absolute top-16 right-10 w-6 h-6 text-yellow-200 opacity-80" />
        <DollarSign className="absolute bottom-10 left-16 w-6 h-6 text-green-200 opacity-80" />

        <Briefcase size={70} className="mb-5 drop-shadow-lg" />
        <h1 className="text-5xl md:text-6xl font-bold mb-3 text-center">Get Employed</h1>
        <p className="text-cyan-100 text-lg md:text-xl mb-6 max-w-lg text-center">
          Explore opportunities and unlock your next professional chapter. We help you find jobs, internships, and skill-building workshops to advance your career.
        </p>
        <Link
          href="/get-employed"
          className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Apply
        </Link>
      </div>

      {/* Donate */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 text-white p-6 relative">
        {/* Floating icons */}
        <Star className="absolute top-10 right-10 w-6 h-6 text-yellow-200 opacity-80" />
        <DollarSign className="absolute bottom-16 left-12 w-6 h-6 text-green-200 opacity-80" />

        <Heart size={70} className="mb-5 drop-shadow-lg" />
        <h1 className="text-5xl md:text-6xl font-bold mb-3 text-center">Donate</h1>
        <p className="text-orange-100 text-lg md:text-xl mb-6 max-w-lg text-center">
          Your small act of kindness fuels big change. Support our mission and help us provide resources, education, and opportunities to those in need.
        </p>
        <Link
          href="/donate"
          className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Donate Now
        </Link>
      </div>

      {/* Payment Component */}
      <div className="flex flex-col justify-center items-center bg-gray-900 text-white p-6 relative">
        {/* Floating icons */}
        <Star className="absolute top-8 left-8 w-6 h-6 text-yellow-400 opacity-80" />
        <DollarSign className="absolute bottom-8 right-8 w-6 h-6 text-green-400 opacity-80" />

        <Payment />
      </div>
    </section>
  );
}

export default Contact;
