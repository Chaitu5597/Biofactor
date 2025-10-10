import React from "react";

const VideoStatsSection = ({
  mainHeading,
  videoUrl,
  overlayColor = "bg-black bg-opacity-40",
  cardData = [],
}) => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-150"
          src={videoUrl}
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`}></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 lg:mb-12 leading-tight text-center">
          {mainHeading}
        </h1>

        {/* Cards Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group bg-black/30 border border-white/10 rounded-2xl p-6 lg:p-8 w-full max-w-sm mx-auto text-center transition-all duration-300 ease-in-out hover:bg-black/35 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 hover:border-white/30"
              >
                <h3 className="text-green-500 font-bold text-2xl md:text-left lg:text-3xl xl:text-4xl mb-3 transition-colors duration-300 group-hover:text-green-400">
                  {card.heading}
                </h3>
                <p className="text-base md:text-xl text-left lg:text-2xl xl:text-2xl leading-relaxed font-normal text-white/90">
                  {card.line1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStatsSection;
