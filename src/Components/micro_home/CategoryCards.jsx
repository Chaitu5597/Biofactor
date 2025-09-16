import React from "react";
import { useNavigate } from "react-router-dom";
import { pictures } from '../../assets/images/pictires';

const CategoryCards = () => {
  const navigate = useNavigate(); 

  const categories = [
    {
      image: pictures.growth,
      title: "Agriculture",
      path: "/agriculturePage", 
    },
    {
      image: pictures.fish,
      title: "Aquaculture",
      path: "/aquaculture",
    },
    {
      image: pictures.farmer,
      title: "Poultry",
      path: "/poultry",
    },
    {
      image: pictures.cow,
      title: "Large Animals",
      path: "/large-animals",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the path
  };

  return (
    <div className="flex justify-center gap-8 p-10 bg-white-50 flex-wrap">
      {categories.map((item, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(item.path)}
          className="group flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow:
              "0px 4px 12px rgba(0, 0, 0, 0.2), 0px -4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain opacity-70 group-hover:opacity-100 group-hover:filter group-hover:sepia-[0.8] group-hover:hue-rotate-[140deg] transition-all duration-300"
          />
          <h3 className="mt-4 text-lg font-bold text-gray-700 group-hover:text-green-600 transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
