

import React from "react";

const TestMony = ({ videoUrl, imageSrc, title, weight, form, volume, usage, price }) => {
  return (
    <div className="w-full max-w-sm md:h-auto md:w-48 sm:max-w-md lg:max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-center relative pb-6">
      {/* Video Section */}
      <div className="w-full aspect-video overflow-hidden md:h-96">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Product Image */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 bg-white rounded-lg p-2 shadow-md">
        <img
          src={imageSrc}
          alt="Product"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-24 rounded-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="mt-16 px-4 text-left">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
          {title}
        </h2>
       <ul className="mt-3 space-y-1 text-gray-700 text-[11px] sm:text-[12px]">
  <li>
    <span className="font-semibold">Item Weight:</span>
    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">{weight}</span>
  </li>
  <li>
    <span className="font-semibold">Item Form:</span>
    <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">{form}</span>
  </li>
  <li>
    <span className="font-semibold">Liquid Volume:</span>
    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-md">{volume}</span>
  </li>
  <li>
    <span className="font-semibold">Specific Uses:</span>
    <span className="px-2 py-0.5 text-yellow-800 font-bold rounded-md">{usage}</span>
  </li>
</ul>
        <p className="mt-2 text-base sm:text-lg md:text-lg font-bold text-gray-900 text-left">
          💰 Price: {price}
        </p>
      </div>
    </div>
  );
};

export default TestMony;