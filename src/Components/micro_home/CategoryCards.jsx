import React from "react";
import { pictures } from '../../assets/images/pictires';

const CategoryCards = () => {
  const categories = [
    {
      image: pictures.growth, // Plant/agriculture from Unsplash 
      title: "Agriculture",
    },
    {
      image: pictures.fish, // Fish for Aqua from Unsplash 
      title: "Aquaculture",
    },
    
    {
      image: pictures.farmer, // Chicken for Poultry from Unsplash 
      title: "Poultry",
    },
    {
      image: pictures.cow, // Your local cow image
      title: "Large Animals",
    },
  ];

  const handleCardClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <div className="flex justify-center gap-8 p-10 bg-white-50 flex-wrap ">
      {categories.map((item, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(item.title)}
          className="group flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow:
              "0px 4px 12px rgba(0, 0, 0, 0.2), 0px -4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
          className="w-20 h-20 object-contain opacity-70 group-hover:opacity-100 group-hover:filter group-hover:sepia-[0.8] group-hover:hue-rotate-[140deg] transition-all duration-300 "/>
          <h3 className="mt-4 text-lg font-bold text-gray-700 group-hover:text-green-600 transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;