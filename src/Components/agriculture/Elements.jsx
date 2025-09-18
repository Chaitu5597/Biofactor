import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pictures } from "../../assets/images/pictires";

const Elements = () => {
  const navigate = useNavigate();

  const primaryNutrients = [
    { name: "Nitrogen", path: "/elements/nitrogen", image: pictures.cow },
    { name: "Phosphorus", path: "/elements/phosphorus", image: pictures.phosphorus },
    { name: "Potassium", path: "/elements/potassium", image: pictures.potassium },
    { name: "Calcium", path: "/elements/calcium", image: pictures.calcium },
  ];

  const secondaryNutrients = [
    { name: "Magnesium", path: "/elements/magnesium", image: pictures.magnesium },
    { name: "Sulfur", path: "/elements/sulfur", image: pictures.sulfur },
    { name: "Silicon", path: "/elements/silicon", image: pictures.silicon },
  ];

  const micronutrients = [
    { name: "Iron", path: "/elements/iron", image: pictures.iron },
    { name: "Manganese", path: "/elements/manganese", image: pictures.manganese },
    { name: "Zinc", path: "/elements/zinc", image: pictures.zinc },
    { name: "Copper", path: "/elements/copper", image: pictures.copper },
    { name: "Boron", path: "/elements/boron", image: pictures.boron },
    { name: "Molybdenum", path: "/elements/molybdenum", image: pictures.molybdenum },
    { name: "Chlorine", path: "/elements/chlorine", image: pictures.chlorine },
    { name: "Nickel", path: "/elements/nickel", image: pictures.nickel },
    { name: "Cobalt", path: "/elements/cobalt", image: pictures.cobalt },
    { name: "Sodium", path: "/elements/sodium", image: pictures.sodium },
  ];

  const leftSlide = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 110 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const bottomFade = {
    hidden: { opacity: 0, y: 90 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const AnimatedGrid = ({ elements, columns, variants }) => (
    <motion.div
      className={`grid grid-cols-${columns} gap-10 justify-center`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"
          variants={variants}
          onClick={() => navigate(el.path)}
        >
          <div className="p-3 bg-slate-500 rounded-lg flex justify-center items-center">
            <img
              src={el.image}
              alt={el.name}
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-full"
            />
          </div>
          <span className="mt-2 font-medium text-center text-sm sm:text-base">
            {el.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="container">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 text-center">
        Crop Nutrients
      </h1>

      {/* Primary */}
      <div className="my-10">
        <h2 className="text-lg text-black md:my-20 sm:text-3xl font-bold mb-6 text-center">
          Primary Nutrients
        </h2>
        <AnimatedGrid elements={primaryNutrients} columns={4} variants={leftSlide} />
      </div>

      {/* Secondary */}
      <div className="my-10">
        <h2 className="text-2xl text-black md:my-20 sm:text-3xl font-bold mb-6 text-center">
          Secondary Nutrients
        </h2>
        <AnimatedGrid elements={secondaryNutrients} columns={3} variants={rightSlide} />
      </div>

      {/* Micronutrients */}
      <div className="my-10">
        <h2 className="text-2xl text-black md:my-20 sm:text-3xl font-bold mb-6 text-center">
          Micronutrients
        </h2>
        <AnimatedGrid elements={micronutrients} columns={6} variants={bottomFade} />
      </div>
    </div>
  );
};

export default Elements;
