import React from "react";
import { motion } from "framer-motion";

const AnimatedVideoSection = ({
  videoUrl,
  heading,
  description,
  reverse = false, // makes layout switch sides
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-8 p-6 md:p-12 ${bgColor} my-24`}
    >
      {/* Left/Right: Video */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title={heading}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Right/Left: Content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
          {heading}
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedVideoSection;
