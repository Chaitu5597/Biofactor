import React from "react";
import { useNavigate } from "react-router-dom";
import { pictures } from '../../assets/images/pictires';
import TestMony from "../TestMony";

const CategoryCards = () => {
  const navigate = useNavigate();

  // const products = [
  //   {
  //     title: "Aadhaar-gold",
  //     videoUrl: "https://www.youtube.com/embed/6NjUdYGYpJo?autoplay=1&mute=1&controls=0&loop=1&playlist=6NjUdYGYpJo&modestbranding=1&rel=0",
  //     imageSrc: pictures.adhar,
  //     weight: "4 Kilograms",
  //     form: "Granules",
  //     volume: "4 Liter",
  //     usage: "Organic",
  //     price: "$300",
  //   },
  //   {
  //     title: "Aadhaar-silver",
  //     videoUrl: "https://www.youtube.com/embed/6NjUdYGYpJo?autoplay=1&mute=1",
  //     imageSrc: pictures.adhar,
  //     weight: "2 Kilograms",
  //     form: "Powder",
  //     volume: "2 Liter",
  //     usage: "Organic",
  //     price: "$180",
  //   },
  //   {
  //     title: "Aadhaar-silver",
  //     videoUrl: "https://www.youtube.com/embed/6NjUdYGYpJo?autoplay=1&mute=1",
  //     imageSrc: pictures.adhar,
  //     weight: "2 Kilograms",
  //     form: "Powder",
  //     volume: "2 Liter",
  //     usage: "Organic",
  //     price: "$180",
  //   },
  //   {
  //     title: "Aadhaar-silver",
  //     videoUrl: "https://www.youtube.com/embed/6NjUdYGYpJo?autoplay=1&mute=1",
  //     imageSrc: pictures.adhar,
  //     weight: "2 Kilograms",
  //     form: "Powder",
  //     volume: "2 Liter",
  //     usage: "Organic",
  //     price: "$180",
  //   },
  //   {
  //     title: "Aadhaar-silver",
  //     videoUrl: "https://www.youtube.com/embed/6NjUdYGYpJo?autoplay=1&mute=1",
  //     imageSrc: pictures.adhar,
  //     weight: "2 Kilograms",
  //     form: "Powder",
  //     volume: "2 Liter",
  //     usage: "Organic",
  //     price: "$180",
  //   },
  // ];


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
      path: "/largemainpage",
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


      {/* <div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {products.map((product, index) => (
        <TestMony key={index} {...product} />
      ))}
    </div>

</div> */}



    </div>
  );
};

export default CategoryCards;
