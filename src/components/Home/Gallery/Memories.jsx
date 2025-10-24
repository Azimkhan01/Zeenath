"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

function Memories() {
  // 🔹 Ads Array (currently empty)
  const ads = [
    // {
    //   id: 1,
    //   title: "Explore Our New Campaign 🌍",
    //   desc: "Join hands in making education accessible to all.",
    //   link: "https://example.com/campaign",
    //   img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    // },
  ];

  // 🔹 State for active reel
  const [active, setActive] = useState(null);

  // 🔹 Show ad every few cards (only if ads exist)
  const shouldShowAd = (index) => ads.length > 0 && index % 8 === 5;

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-200 to-sky-300 py-10 relative">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4">
        {Array.from({ length: 50 }).map((_, index) => {
          const isEven = index % 2 === 0;

          // Pick random ad safely
          const ad =
            ads.length > 0 ? ads[Math.floor(Math.random() * ads.length)] : null;

          return (
            <React.Fragment key={index}>
              {/* Memory Card */}
              <div
                onClick={() => setActive(index)}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src="https://media.istockphoto.com/id/1482773020/photo/3d-human-brain-with-connection-dots-and-plexus-lines-artificial-intelligence-and-deep.jpg?b=1&s=612x612&w=0&k=20&c=BanGgfZrddbdmQI-0p7_nqBaqtY5SDV4Re-i4w-bqLA="
                  alt={`Memory ${index + 1}`}
                  className="object-cover rounded-xl w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] transform group-hover:scale-105 transition-transform duration-500"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col justify-end p-3 sm:p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    isEven ? "sm:opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-semibold">
                    {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-[10px] sm:text-xs mt-1 opacity-90">
                    Capturing a moment of creativity and thought ✨
                  </p>
                </div>
              </div>

              {/* Random Ads (only if ads exist) */}
              {shouldShowAd(index) && ad && (
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row mt-4 hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={ad.img}
                    alt={ad.title}
                    className="w-full sm:w-[40%] h-[180px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-purple-700">
                      {ad.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{ad.desc}</p>
                    <a
                      href={ad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 🔹 Fullscreen Reel View */}
      {active !== null && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 transition-all duration-700">
          <div className="relative w-[90%] sm:w-[70%] lg:w-[50%] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/1482773020/photo/3d-human-brain-with-connection-dots-and-plexus-lines-artificial-intelligence-and-deep.jpg?b=1&s=612x612&w=0&k=20&c=BanGgfZrddbdmQI-0p7_nqBaqtY5SDV4Re-i4w-bqLA="
              alt="Memory Reel"
              className="w-full h-[80vh] object-cover"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
              <h2 className="text-2xl font-bold">Beautiful Memory ✨</h2>
              <p className="text-sm opacity-80">
                A timeless capture of our joyful journey together.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Memories;
