import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pictures } from "../../../src/assets/images/pictires";

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
   
    // { name: "Nickel", path: "/elements/nickel", image: pictures.nickel },
    // { name: "Cobalt", path: "/elements/cobalt", image: pictures.cobalt },
    // { name: "Sodium", path: "/elements/sodium", image: pictures.sodium },
  ];

  const micronutrient=[
     { name: "Chlorine", path: "/elements/chlorine", image: pictures.chlorine },
     { name: "Nickel", path: "/elements/nickel", image: pictures.nickel },
    { name: "Cobalt", path: "/elements/cobalt", image: pictures.cobalt },
    { name: "Sodium", path: "/elements/sodium", image: pictures.sodium },
  ]

  // Animation variants
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

  // Different mapping functions for each nutrient category
  const PrimaryNutrientGrid = ({ elements }) => (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 gap-16 justify-items-center max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"
          variants={leftSlide}
          onClick={() => navigate(el.path)}
        >

          <img
            src={el.image}
            alt={el.name}
            className="md:w-40 md:h-40 sm:w-24 sm:h-24 object-cover rounded-lg shadow-lg"
          />
          <span className="mt-2 font-medium text-center text-sm sm:text-base">{el.name}</span>
         
        </motion.div>
      ))}
    </motion.div>
  );

  const SecondaryNutrientGrid = ({ elements }) => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-20 justify-items-center max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"
          variants={rightSlide}
          onClick={() => navigate(el.path)}
        >
          <img
            src={el.image}
            alt={el.name}
            className="md:h-40 md:w-40  sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"
          />
          <span className="mt-2 font-medium text-center text-sm sm:text-base">{el.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  const MicroNutrientGrid = ({ elements }) => (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-6 gap-24 justify-items-center max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform"
          variants={bottomFade}
          onClick={() => navigate(el.path)}
        >
          <img
            src={el.image}
            alt={el.name}
           className="w-16 h-16 md:w-40 md:h-40 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"          />
          <span className="mt-2 font-medium text-center text-sm sm:text-base">{el.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
  const MicroNutrientGrids = ({ elements }) => (
    <motion.div
      className="grid grid-cols-2  sm:grid-cols-4 gap-24 justify-items-center max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col justify-center items-center cursor-pointer mt-16 hover:scale-105 transition-transform"
          variants={bottomFade}
          onClick={() => navigate(el.path)}
        >
          <img
            src={el.image}
            alt={el.name}
           className="w-16 h-16 md:w-40 md:h-40 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"          />
          <span className="mt-2 font-medium text-center text-sm sm:text-base">{el.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 text-center">
        Crop Nutrients
      </h1>

      {/* Primary Nutrients */}
      <div className="my-20 flex flex-col items-center">
        <h2 className="text-2xl md: mb-16 sm:text-3xl font-bold mb-6 text-center">
          Primary Nutrients
        </h2>
        <PrimaryNutrientGrid elements={primaryNutrients} />
      </div>

      {/* Secondary Nutrients */}
      <div className="my-20 flex flex-col items-center">
        <h2 className="text-2xl md: mb-16 sm:text-3xl font-bold mb-6 text-center">
          Secondary Nutrients
        </h2>
        <SecondaryNutrientGrid elements={secondaryNutrients} />
      </div>

      {/* Micronutrients */}
      <div className="my-20 flex flex-col items-center">
        <h2 className="text-2xl md: mb-16  sm:text-3xl font-bold mb-6 text-center">
          Micronutrients
        </h2>
        <MicroNutrientGrid elements={micronutrients} />
        <MicroNutrientGrids elements={micronutrient} />
      </div>
    </div>
  );
};

export default Elements;