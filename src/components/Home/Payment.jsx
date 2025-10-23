"use client";

import { QrCode, DollarSign, Heart, Star, X } from "lucide-react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

function Payment() {
  const [upiId, setUpiId] = useState("7678084267@ptsbi");
  const [amount, setAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getEmoji = () => {
    if (amount <= 100) return "😐";
    if (amount <= 500) return "🙂";
    if (amount <= 1000) return "😃";
    return "😍";
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setAmount(value);
      setShowPopup(value > 1000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to contribute ₹${amount} via UPI (${upiId}). Please assist with the payment above ₹1000.`
  );
  const whatsappLink = `https://wa.me/917678084267?text=${whatsappMessage}`;

  // 🧠 Donor list (20 Indian names)
  const donors = [
    "Aarav Patel", "Isha Sharma", "Vivaan Gupta", "Diya Mehta", "Arjun Nair",
    "Ananya Singh", "Kunal Deshmukh", "Riya Khanna", "Aditya Joshi", "Sneha Reddy",
    "Ibrahim Khan", "Kavya Iyer", "Manav Bhatia", "Zoya Ali", "Rohan Chatterjee",
    "Neha Jain", "Rahul Pillai", "Aanya Shah", "Kabir Malhotra", "Meera Das"
  ];

  // 💸 Random donation toast every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = donors[Math.floor(Math.random() * donors.length)];
      const randomAmount = Math.floor(Math.random() * (2000 - 50 + 1)) + 50;

      toast.success(`${randomName} donated ₹${randomAmount}`, {
        duration: 3500,
        position: "bottom-right",
        style: {
          background: "rgba(30,30,30,0.95)",
          color: "white",
          border: "1px solid #22c55e",
          fontWeight: 500,
        },
      });
    }, 6000); // every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-950 to-black text-white p-6 relative overflow-hidden">
      <Toaster richColors closeButton />

      {/* Floating icons */}
      <DollarSign className="absolute top-10 left-10 text-yellow-400 opacity-80 w-6 h-6" />
      <Heart className="absolute top-20 right-16 text-red-400 opacity-80 w-6 h-6" />
      <Star className="absolute bottom-20 left-16 text-blue-400 opacity-80 w-6 h-6" />

      {/* Header */}
      <QrCode size={70} className="mb-5 text-green-400 drop-shadow-lg" />
      <h1 className="text-5xl md:text-6xl font-bold mb-3 text-center">Payment Portal</h1>
      <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-lg text-center">
        Enter your UPI ID and amount to contribute securely.
      </p>

      {/* Form */}
      <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-5 w-full max-w-md relative z-10">
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="Enter UPI ID"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-inner"
        />

        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter Amount (₹)"
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-inner"
        />

        <div className="text-3xl mt-1">{getEmoji()}</div>
      </div>

      {/* QR Code */}
      <div className="mb-6 bg-gradient-to-bl from-green-700 via-gray-800 to-orange-700 p-4 rounded-2xl mt-6 shadow-xl">
        <QRCodeSVG
          value={`upi://pay?pa=${upiId}&pn=RecipientName&cu=INR&am=${amount}`}
          size={208}
        />
      </div>

      {/* Proceed Button */}
      <Link
        href="/payment"
        className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg mt-4"
      >
        Proceed
      </Link>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-white hover:text-red-400"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-3 text-yellow-400">High Amount Alert</h2>
            <p className="text-white mb-4">
              You entered ₹{amount}. For contributions above ₹1000, please contact us on WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-green-600 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
