"use client";

import { QrCode, DollarSign, Heart, Star } from "lucide-react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";

function Payment() {
  const [upiId, setUpiId] = useState("7678084267@ptsbi");
  const [amount, setAmount] = useState(0);

  const getEmoji = () => {
    if (amount <= 100) return "😐";
    if (amount <= 500) return "🙂";
    if (amount <= 1000) return "😃";
    return "😍";
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-950 to-black text-white p-6 relative">
      
      {/* Static Icons */}
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
          onChange={(e) => setAmount(Number(e.target.value))}
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

      {/* Warning for large amount */}
      {amount > 1000 && (
        <p className="text-yellow-400 mb-4 text-center">
          ⚠️ Amount greater than ₹1,000. Please contact us on{" "}
          <a
            href="https://wa.me/917678084267"
            target="_blank"
            className="underline text-green-300"
          >
            WhatsApp
          </a>{" "}
          for processing.
        </p>
      )}

      {/* Proceed Button */}
      <Link
        href="/payment"
        className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg mt-4"
      >
        Proceed
      </Link>
    </div>
  );
}

export default Payment;
