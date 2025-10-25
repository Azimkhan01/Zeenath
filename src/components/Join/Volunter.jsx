"use client";
import React, { useState } from "react";
import { toast } from "sonner";

function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    area: "",
    pincode: "",
    address: "",
    contact: "",
    graduation: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Enter a valid email address";
    if (!formData.area.trim()) newErrors.area = "Area is required";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit contact number";
    if (!formData.graduation.trim())
      newErrors.graduation = "Graduation/Studying field is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setErrors({});

      // 🔥 Use toast.promise for async feedback
      await toast.promise(
        fetch("/api/volunteer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).then(async (res) => {
          if (!res.ok) throw new Error("Failed to send");
          return res.json();
        }),
        {
          loading: "Sending your details...",
          success: "🎉 Thank you! Your details have been sent successfully.",
          error: "❌ Something went wrong while sending. Please try again!",
        }
      );

      // Reset form
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        area: "",
        pincode: "",
        address: "",
        contact: "",
        graduation: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Volunteer With Us 🤝
        </h2>

        {Object.entries(formData).map(([key, value]) => (
          <div className="mb-4" key={key}>
            <label className="block font-semibold text-gray-700 capitalize">
              {key === "graduation"
                ? "Graduation / Studying In"
                : key === "pincode"
                ? "Pincode"
                : key}
            </label>
            {key === "address" ? (
              <textarea
                rows="3"
                value={value}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
                className={`w-full border ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400`}
              />
            ) : (
              <input
                type={key === "email" ? "email" : "text"}
                value={value}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
                className={`w-full border ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400`}
              />
            )}
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Volunteer;
