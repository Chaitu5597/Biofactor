import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[900px] h-[250px] mx-auto my-12 bg-white rounded-2xl shadow-lg overflow-hidden flex">
      
      {/* Left Side - Image */}
      <div className="w-60 h-full flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-56 h-56 object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 h-full p-6 flex flex-col justify-between overflow-hidden">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 truncate">
            {product.name}
          </h2>
          <p className="text-gray-700 text-sm mb-2 line-clamp-3">
            {product.description}
          </p>
          <p className="text-gray-500 text-sm mb-2">Type: {product.type}</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-300 self-end">
          View More
        </button>
      </div>
    </div>
  );
};

export default Product;
