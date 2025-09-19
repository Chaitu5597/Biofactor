
// import React, { useState } from "react";
// import { FaArrowDown, FaEye } from "react-icons/fa";
// import { pictures } from "../../assets/images/pictires";

// const Slider = ({ title, items, onSeeMore }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [previewTitle, setPreviewTitle] = useState(null); // Store title for download

//   const visiblePosters = 5;
//   const total = items.length;

//   // Duplicate items for seamless looping if there are fewer items than visiblePosters
//   const extendedItems = [...items, ...items, ...items].slice(0, Math.max(total * 3, visiblePosters * 3));
//   const extendedTotal = extendedItems.length;

//   const goToNext = () => {
//     setCurrentIndex((prev) => {
//       const next = (prev + 1) % total;
//       // Reset to start of original items when reaching the end of extended items
//       if (prev + 1 >= extendedTotal - visiblePosters) {
//         return 0;
//       }
//       return next;
//     });
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => {
//       const next = (prev - 1 + total) % total;
//       // Reset to end of original items when going past the start
//       if (prev - 1 < 0) {
//         return total - 1;
//       }
//       return next;
//     });
//   };

//   const handleDownload = async (imageUrl, title) => {
//     try {
//       const response = await fetch(imageUrl);
//       if (!response.ok) throw new Error("Failed to fetch image");
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${title.replace(/\s+/g, "_")}_poster.jpg`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Download failed:", error);
//       alert("Failed to download the poster. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-900">
//       <style>
//         {`
//           @keyframes slideUp {
//             from {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes pulse {
//             0%, 100% {
//               transform: scale(1);
//             }
//             50% {
//               transform: scale(1.1);
//             }
//           }

//           @keyframes modalEnter {
//             from {
//               opacity: 0;
//               transform: scale(0.8);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           .card-enter {
//             animation: slideUp 0.5s ease-out forwards;
//           }

//           .arrow-pulse {
//             animation: pulse 1.5s infinite ease-in-out;
//           }

//           .modal-enter {
//             animation: modalEnter 0.3s ease-out forwards;
//           }
//         `}
//       </style>

//       {/* Section Title */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-white text-2xl font-bold">{title}</h2>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             onSeeMore?.(title);
//           }}
//           className="text-red-500 hover:text-red-400 text-sm font-semibold underline transition-colors duration-300"
//         >
//           See More
//         </a>
//       </div>

//       <div className="relative group overflow-hidden">
//         {/* Arrows */}
//         <button
//           onClick={goToPrev}
//           className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full text-2xl opacity-0 group-hover:opacity-100 group-hover:arrow-pulse transition-all duration-300 ease-in-out"
//         >
//           ‹
//         </button>
//         <button
//           onClick={goToNext}
//           className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full text-2xl opacity-0 group-hover:opacity-100 group-hover:arrow-pulse transition-all duration-300 ease-in-out"
//         >
//           ›
//         </button>

//         {/* Posters Row */}
//         <div
//           className="flex"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / visiblePosters)}%)`,
//             width: `${(extendedItems.length * 100) / visiblePosters}%`,
//             transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//           }}
//         >
//           {extendedItems.map((item, index) => (
//             <div
//               key={`${item.id}-${index}`}
//               className="w-1/5 p-2 card-enter transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105"
//             >
//               <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out">
//                 {/* Image */}
//                 <div className="relative group/poster">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover/poster:scale-105"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/50 transition-all duration-300 ease-in-out flex justify-center items-center gap-4 opacity-0 group-hover/poster:opacity-100">
//                     {/* Eye Button */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setPreviewImage(item.image);
//                         setPreviewTitle(item.title); // Store title for download
//                         setShowModal(true);
//                       }}
//                       className="bg-green-600 hover:bg-green-700 text-white rounded-lg w-10 h-10 flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
//                     >
//                       <FaEye />
//                     </button>

//                     {/* Download Button */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDownload(item.image, item.title);
//                       }}
//                       className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-10 h-10 flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
//                     >
//                       <FaArrowDown />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Info */}
//                 <div className="p-3 text-start ">
//                   <h3 className="text-white  text-base font-semibold truncate transition-colors duration-300 hover:text-red-400">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm">
//                     {item.genre} • {item.year}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Preview Modal */}
//       {showModal && (
//         <div
//           className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-300"
//           onClick={() => setShowModal(false)}
//         >
//           <div
//             className="relative modal-enter"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="h-[90vh] max-w-[90vw] rounded-xl shadow-xl object-contain"
//             />
//             <div className="absolute top-2 right-2 flex gap-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-colors duration-200 hover:scale-105"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => handleDownload(previewImage, previewTitle)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors duration-200 hover:scale-105 flex items-center gap-1"
//               >
//                 <FaArrowDown /> 
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Example usage with multiple sliders
// const Posters = ({ onSeeMore }) => {
//   const movies = [
//     { id: 1, title: "Inception", year: "2010", genre: "Sci-Fi", image: pictures.soilborndisease },
//     { id: 2, title: "Interstellar", year: "2014", genre: "Sci-Fi", image: pictures.soilborndisease },
//     { id: 3, title: "The Dark Knight", year: "2008", genre: "Action", image: pictures.soilborndisease },
//     { id: 4, title: "Avengers: Endgame", year: "2019", genre: "Action", image: pictures.soilborndisease },
//     { id: 5, title: "Joker", year: "2019", genre: "Drama", image: pictures.soilborndisease },
//     { id: 6, title: "Spider-Man", year: "2021", genre: "Action", image: pictures.soilborndisease },
//     { id: 7, title: "Iron Man", year: "2008", genre: "Action", image: pictures.soilborndisease },
//   ];

//   return (
//     <div>
//       <Slider title=" Featured Posters " items={movies} onSeeMore={onSeeMore} />
//       <Slider title=" Pamphlets " items={movies} onSeeMore={onSeeMore} />
//       <Slider title=" Brochures " items={movies} onSeeMore={onSeeMore} />
//     </div>
//   );
// };

// export default Posters;

import React, { useState } from "react";
import { FaArrowDown, FaEye } from "react-icons/fa";
import { pictures } from "../../assets/images/pictires";



const Slider = ({ title, items, onSeeMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewTitle, setPreviewTitle] = useState(null);

  // Responsive visible posters based on screen size
  const getVisiblePosters = () => {
    if (window.innerWidth >= 1280) return 5; // xl screens
    if (window.innerWidth >= 1024) return 4; // lg screens
    if (window.innerWidth >= 768) return 3; // md screens
    if (window.innerWidth >= 640) return 2; // sm screens
    return 1; // xs screens
  };

  const [visiblePosters, setVisiblePosters] = useState(getVisiblePosters());

  // Update visible posters on window resize
  React.useEffect(() => {
    const handleResize = () => setVisiblePosters(getVisiblePosters());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = items.length;
  // Duplicate items for seamless looping
  const extendedItems = [...items, ...items].slice(0, Math.max(total * 2, visiblePosters * 2));
  const extendedTotal = extendedItems.length;

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % total;
      if (prev + 1 >= extendedTotal - visiblePosters) {
        return 0;
      }
      return next;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + total) % total;
      if (prev - 1 < 0) {
        return total - 1;
      }
      return next;
    });
  };

  const handleDownload = async (imageUrl, title) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Failed to fetch image");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/\s+/g, "_")}_poster.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the poster. Please try again.");
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-900">
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          @keyframes modalEnter {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }

          .card-enter {
            animation: slideUp 0.5s ease-out forwards;
          }

          .arrow-pulse {
            animation: pulse 1.5s infinite ease-in-out;
          }

          .modal-enter {
            animation: modalEnter 0.3s ease-out forwards;
          }
        `}
      </style>

      {/* Section Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSeeMore?.(title);
          }}
          className="text-red-500 hover:text-red-400 text-xs sm:text-sm font-semibold underline transition-colors duration-300"
        >
          See More
        </a>
      </div>

      <div className="relative group overflow-hidden">
        {/* Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full text-lg sm:text-2xl opacity-0 group-hover:opacity-100 group-hover:arrow-pulse transition-all duration-300 ease-in-out"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full text-lg sm:text-2xl opacity-0 group-hover:opacity-100 group-hover:arrow-pulse transition-all duration-300 ease-in-out"
        >
          ›
        </button>

        {/* Posters Row */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / visiblePosters)}%)`,
            width: `${(extendedItems.length * 100) / visiblePosters}%`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 sm:p-2 card-enter transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out">
                {/* Image */}
                <div className="relative group/poster">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 ease-in-out group-hover/poster:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/50 transition-all duration-300 ease-in-out flex justify-center items-center gap-2 sm:gap-4 opacity-0 group-hover/poster:opacity-100">
                    {/* Eye Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewImage(item.image);
                        setPreviewTitle(item.title);
                        setShowModal(true);
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaEye size={16} />
                    </button>

                    {/* Download Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(item.image, item.title);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
                    >
                      <FaArrowDown size={16} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-2 sm:p-3 text-start">
                  <h3 className="text-white text-sm sm:text-base font-semibold truncate transition-colors duration-300 hover:text-red-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.genre} • {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Preview"
              className="h-[80vh] sm:h-[85vh] md:h-[90vh] max-w-[95vw] sm:max-w-[90vw] rounded-xl shadow-xl object-contain"
            />
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex gap-1 sm:gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-lg transition-colors duration-200 hover:scale-105"
              >
                Close
              </button>
              <button
                onClick={() => handleDownload(previewImage, previewTitle)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-lg transition-colors duration-200 hover:scale-105 flex items-center gap-1"
              >
                <FaArrowDown size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage with multiple sliders
const Posters = ({ onSeeMore }) => {
  const movies = [
    { id: 1, title: "soilborndisease", year: "2010", genre: "Sci-Fi", image: pictures.soilborndisease },
    { id: 2, title: "Foliar", year: "2014", genre: "Sci-Fi", image: pictures.Foliar },
    { id: 3, title: "Foliar", year: "2008", genre: "Action", image: pictures.Foliar },
    { id: 4, title: "soilborndisease", year: "2019", genre: "Action", image: pictures.soilborndisease  },
    { id: 5, title: "sucking", year: "2019", genre: "Drama", image: pictures.sucking  },
    { id: 6, title: "Foliar", year: "2021", genre: "Action", image: pictures.Foliar },
    { id: 7, title: "Iron Man", year: "2008", genre: "Action", image: "https://via.placeholder.com/300x400" },
  ];

  return (
    <div>
      <Slider title="Featured Posters" items={movies} onSeeMore={onSeeMore} />
      <Slider title="Pamphlets" items={movies} onSeeMore={onSeeMore} />
      <Slider title="Brochures" items={movies} onSeeMore={onSeeMore} />
    </div>
  );
};

export default Posters;