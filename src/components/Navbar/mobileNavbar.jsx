"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function MobileNavbar({ page }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <div className="flex justify-center items-center w-1/6 md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-transparent h-screen bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 mt-4">
          {page.map((p, index) => (
            <li key={index}>
              <Link
                href={p.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 text-base transition`}
              >
                <span className="w-5 h-5">{p.icon}</span>
                <span>{p.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
