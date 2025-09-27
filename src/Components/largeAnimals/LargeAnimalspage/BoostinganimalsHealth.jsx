// import React from 'react';

// const BoostinganimalsHealth = () => {
//   // Sample data for the cards
//   const cardData = [
//     {
//       heading: "500+",
//       line1: "Happy Farmers"
//     },
//     {
//       heading: "10Liters",
//       line1: "Each buffalo produces 10 liters of milk", 
//     },
//     {
//       heading: "5,00,000+",
//       line1: "Over 5,00,000+ animals have benefited.",
//     }
//   ];

//   return (
//     <div className="relative flex items-center justify-center h-screen overflow-hidden">
//       {/* Background YouTube Video */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <iframe
//           className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-150"
//           src="https://www.youtube.com/embed/g-WSntgYl0A?si=sp82LYDnpX1IHnIs&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=g-WSntgYl0A"
//           title="Background video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>

//       {/* Dark Overlay for better readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

//       {/* Content - Main Heading and Cards Container */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 lg:mb-12 leading-tight text-center">
//           Boosting Animal Health, Enhancing Growth.
//         </h1>
        
//         {/* Three Cards Grid - Centered */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
//             {cardData.map((card, index) => (
//               <div
//                 key={index}
//                 className="group bg-black/10 backdrop-blur-3xl border border-black/20 rounded-2xl p-6 lg:p-8 w-full max-w-sm mx-auto text-center transition-all duration-300 ease-in-out hover:bg-white/20 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
//               >
//                 {/* Green Heading - Statistics */}
//                 <h3 className="text-green-500 font-bold text-2xl md:text-left lg:text-3xl xl:text-4xl mb-3 transition-colors duration-300">
//                   {card.heading}
//                 </h3>
                
//                 {/* Card Content - Description */}
//                 <p className="text-base md:text-xl text-left lg:text-2xl xl:text-2xl leading-relaxed font-normal text-white/90">
//                   {card.line1}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoostinganimalsHealth;


import React from 'react';

const BoostinganimalsHealth = () => {
  // Sample data for the cards
  const cardData = [
    {
      heading: "500+",
      line1: "Happy Farmers"
    },
    {
      heading: "10Liters",
      line1: "Each buffalo produces 10 liters of milk", 
    },
    {
      heading: "5,00,000+",
      line1: "Over 5,00,000+ animals have benefited.",
    }
  ];

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-150"
          src="https://www.youtube.com/embed/g-WSntgYl0A?si=sp82LYDnpX1IHnIs&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=g-WSntgYl0A"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content - Main Heading and Cards Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 lg:mb-12 leading-tight text-center">
          Boosting Animal Health, Enhancing Growth.
        </h1>
        
        {/* Three Cards Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group bg-black/30  border border-white/10 rounded-2xl p-6 lg:p-8 w-full max-w-sm mx-auto text-center transition-all duration-300 ease-in-out hover:bg-black/35 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 hover:border-white/30"
              >
                {/* Green Heading - Statistics */}
                <h3 className="text-green-500 font-bold text-2xl md:text-left lg:text-3xl xl:text-4xl mb-3 transition-colors duration-300 group-hover:text-green-400">
                  {card.heading}
                </h3>
                
                {/* Card Content - Description */}
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

export default BoostinganimalsHealth;
