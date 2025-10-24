"use client";
import React, { useState } from "react";
import { toast } from "sonner";

function Carrer() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gmail: "",
    tenth: "",
    twelfth: "",
    graduation: "",
    linkedin: "",
    location: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age.trim() || isNaN(formData.age))
      newErrors.age = "Enter a valid age";
    if (!formData.dob.trim()) newErrors.dob = "Date of birth is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.gmail))
      newErrors.gmail = "Enter a valid email address";
    if (!formData.tenth.trim()) newErrors.tenth = "10th details required";
    if (!formData.twelfth.trim()) newErrors.twelfth = "12th details required";
    if (!formData.graduation.trim())
      newErrors.graduation = "Graduation details required";
    if (!formData.linkedin.trim())
      newErrors.linkedin = "LinkedIn profile link required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const promise = fetch("/api/carrer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      setLoading(false);
      if (!res.ok) throw new Error("Error submitting form");
      setFormData({
        name: "",
        age: "",
        dob: "",
        gmail: "",
        tenth: "",
        twelfth: "",
        graduation: "",
        linkedin: "",
        location: "",
        phone: "",
      });
      return res.json();
    });

    toast.promise(promise, {
      loading: "Submitting your form...",
      success: "✅ Form submitted successfully!",
      error: "❌ Something went wrong. Please try again.",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-xl"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Get Opportunity 🚀
        </h2>

        {/* Input Fields */}
        {[
          { key: "name", label: "Full Name", type: "text" },
          { key: "age", label: "Age", type: "number" },
          { key: "dob", label: "Date of Birth", type: "date" },
          { key: "gmail", label: "Email", type: "email" },
          { key: "phone", label: "Phone Number", type: "text" },
          { key: "tenth", label: "10th Details", type: "text" },
          { key: "twelfth", label: "12th Details", type: "text" },
          { key: "graduation", label: "Graduation", type: "text" },
          { key: "linkedin", label: "LinkedIn Profile", type: "url" },
          { key: "location", label: "Location", type: "text" },
        ].map(({ key, label, type }) => (
          <div className="mb-4" key={key}>
            <label className="block font-semibold text-gray-700">{label}</label>
            <input
              type={type}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className={`w-full border ${
                errors[key] ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
            )}
          </div>
        ))}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
          } text-white font-bold py-2 px-4 rounded-lg transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </section>
  );
}

export default Carrer;
