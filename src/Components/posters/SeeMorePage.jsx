// // src/pages/SeeMorePage.jsx
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaEye, FaArrowDown } from "react-icons/fa";

// const SeeMorePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { title, items } = location.state || { title: "All Posters", items: [] };

//   const [previewImage, setPreviewImage] = useState(null);

//   const handleDownload = (url, name) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = name || "poster.jpg";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-white">
//       {/* Header with Back Arrow */}
//       <div className="flex items-center gap-3 mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="p-2 bg-gray-800 rounded-full  hover:bg-gray-700 transition "
//         >
//           <FaArrowLeft size={18} />
//         </button>
//         <h1 className="text-3xl font-bold">{title}</h1>
//       </div>

//       {/* Posters Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {items.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition group relative"
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Hover Actions */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
//               <button
//                 onClick={() => setPreviewImage(item.image)}
//                 className="p-2 bg-white/20 rounded-full text-white hover:bg-blue-500"
//                 title="Preview"
//               >
//                 <FaEye size={16} />
//               </button>
//               <button
//                 onClick={() => handleDownload(item.image, item.title)}
//                 className="p-2 bg-white/20 rounded-full text-white hover:bg-green-500 "
//                 title="Download"
//               >
//                 <FaArrowDown size={16} />
//               </button>
//             </div>

//             {/* Details */}
//             <div className="p-2">
//               <h3 className="font-semibold text-sm truncate">{item.title}</h3>
//               <p className="text-xs text-gray-400">
//                 {item.genre} • {item.year}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Preview Modal */}
//       {previewImage && (
//         <div className="fixed inset-0 bg-blacgrak  bg-opacity-80 flex items-center justify-center z-50">
//           <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl w-full">
//             <button
//               onClick={() => setPreviewImage(null)}
//               className="absolute top-2 right-2 mr-6  text-white hover:text-red-400"
//             >
//               ✖
//             </button>
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="w-full max-h-[80vh] object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeeMorePage;
// src/pages/SeeMorePage.jsx

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaArrowDown } from "react-icons/fa";

const SeeMorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, items } = location.state || { title: "All Posters", items: [] };

  const [previewImage, setPreviewImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleDownload = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name || "poster.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔹 Dynamic genres (unique + "all")
  const genres = ["all", ...new Set(items.map((item) => item.genre))];

  // 🔹 Apply filter + search logic
  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === "all" || item.genre === filter;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {/* Header with Back Arrow + Title + Filter + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <FaArrowLeft size={18} />
          </button>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>

        {/* Right Section: Filter + Search */}
        <div className="flex items-center gap-3">
          {/* 🔹 Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 md:w-36 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {genres.map((genre, idx) => (
              <option key={idx} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          {/* 🔹 Search Box */}
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 md:w-96 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          />
         
        </div>
      </div>

      {/* Posters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition group relative"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => setPreviewImage(item.image)}
                className="p-2 bg-white/20 rounded-full text-white hover:bg-blue-500"
                title="Preview"
              >
                <FaEye size={16} />
              </button>
              <button
                onClick={() => handleDownload(item.image, item.title)}
                className="p-2 bg-white/20 rounded-full text-white hover:bg-green-500"
                title="Download"
              >
                <FaArrowDown size={16} />
              </button>
            </div>

            {/* Details */}
            <div className="p-2">
              <h3 className="font-semibold text-sm truncate">{item.title}</h3>
              <p className="text-xs text-gray-400">
                {item.genre} • {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 mr-6 text-white hover:text-red-400"
            >
              ✖
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeMorePage;
