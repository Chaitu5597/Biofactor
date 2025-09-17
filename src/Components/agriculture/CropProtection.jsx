import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CropProtectionCard = ({ image, title, description, products, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`flex flex-col items-center gap-6 mt-8 sm:px-10 md:my-20
        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image Section */}
      <motion.div
        className="flex justify-center items-center flex-1 w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={image}
          alt={title}
          className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-cover rounded-lg shadow-lg transition-transform duration-500"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-center flex-1 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-heading">
          {title}
        </h2>

        <p className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed text-justify font-body">
          {description}
        </p>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded mt-4 font-heading transition hover:bg-gray-700 text-sm sm:text-base flex items-center justify-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Close Products" : "Products"}{" "}
          <motion.span
            className="inline-block"
            animate={isExpanded ? { rotate: 90 } : { rotate: 270 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ➤
          </motion.span>
        </motion.button>

        {/* Expandable Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-3 flex flex-wrap justify-center gap-3 bg-white p-3 sm:p-4 rounded shadow overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {products.map((product, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => navigate(product.path)}
                  className="bg-gray-600 min-w-[100px] text-white px-3 py-2 rounded font-heading hover:bg-gray-700 transition flex justify-center items-center gap-1 break-words"
                  whileHover={{ x: 0 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {product.name || product}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CropProtectionCard;
