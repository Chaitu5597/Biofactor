import React from 'react';
import { motion } from 'framer-motion';

const WhyBioLarge = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-gray-50 my-24">
      
      {/* Left: Video with animation */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/g-WSntgYl0A?autoplay=0&mute=1&controls=1"
            title="Biofactor Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Right: Content with animation */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Biofactor
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          BIOFACTOR specializes in veterinary animal growth products, offering minerals and microbial solutions that enhance nutrition, immunity, and overall health. These products support better digestion, higher productivity, and sustainable animal farming, ensuring stronger, healthier livestock for farmers and the industry.
        </p>
      </motion.div>

    </div>
  );
};

export default WhyBioLarge;
