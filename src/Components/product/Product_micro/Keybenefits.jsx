
import React, { useState } from "react";

/**
 * Reusable Keybenefits Component
 * 
 * @param {string} title - Section heading (e.g., "Key Benefits")
 * @param {Array} benefits - Array of objects: [{ id, title, icon, content }]
 * @param {string} primaryColor - Tailwind base color (default: green)
 */
const Keybenefits = ({ 
  title = "Key Benefits", 
  benefits = [], 
  primaryColor = "green" 
}) => {
  const [active, setActive] = useState(benefits[0]);
  const [fade, setFade] = useState(true);

  const handleClick = (benefit) => {
    setFade(false);
    setTimeout(() => {
      setActive(benefit);
      setFade(true);
    }, 300);
  };

  if (!benefits.length) {
    return <p className="text-center text-gray-500">No benefits available.</p>;
  }

  return (
    <div
      className={`bg-gradient-to-r from-${primaryColor}-50 via-white to-${primaryColor}-100 rounded-xl shadow-lg p-8`}
    >
      {/* Main Heading */}
      <h2 className={`text-4xl text-${primaryColor}-800 mb-6 font-semibold`}>
        {title}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - List of Benefits */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {benefits.map((b) => (
            <button
              key={b.id}
              onClick={() => handleClick(b)}
              className={`relative flex items-center gap-3 p-4 rounded-lg shadow-md border text-left font-semibold overflow-hidden group transition-transform duration-300
                ${
                  active.id === b.id
                    ? `bg-${primaryColor}-600 text-white border-${primaryColor}-600 scale-105`
                    : `bg-white text-gray-800 border-gray-300`
                }`}
            >
              {/* Text */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl">{b.icon}</span>
                {b.title}
              </span>

              {/* Hover fill animation */}
              {active.id !== b.id && (
                <span
                  className={`absolute left-0 top-0 w-0 h-full bg-${primaryColor}-600 transition-all duration-500 ease-out group-hover:w-full`}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Side - Description */}
        <div
          className={`w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3
            className={`text-3xl font-bold text-${primaryColor}-700 mb-4`}
          >
            {active.title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {active.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keybenefits;
