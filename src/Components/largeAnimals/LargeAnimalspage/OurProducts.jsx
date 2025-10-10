import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import { pictures } from "../../../assets/images/pictires";

const OurProducts = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const products = [
    { id: 1, name: "Product 1", image: pictures.cows, path: "/OurCow" },
    { id: 2, name: "Product 2", image: pictures.goat, path: "/product/2" },
    { id: 3, name: "Product 3", image: pictures.pig, path: "/product/3" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-normal text-gray-900 mb-28">
        Our{" "}
        <span className="font-bold text-green-700 tracking-wide">
          Products
        </span>
      </h2>

      {/* Product Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(product.path)} // ✅ Navigate on click
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-cover rounded-lg shadow-sm border"
              whileHover={{
                scale: 1.1,
                rotate: 1,
                boxShadow: "0 10px 25px rgba(34,197,94,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;



/////////////////Api ////////////////////

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const OurProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Example: Replace with your API endpoint
//     fetch("https://api.example.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="w-full max-w-6xl mx-auto py-16 px-6 text-center">
//       <h2 className="text-4xl font-normal text-gray-900 mb-28">
//         Our{" "}
//         <span className="font-bold text-green-700 tracking-wide">
//           Products
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             className="flex flex-col items-center cursor-pointer"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate(`/product/${product.id}`)} // navigate with product id
//           >
//             <motion.img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-64 h-64 object-cover rounded-lg shadow-sm border"
//               whileHover={{
//                 scale: 1.1,
//                 rotate: 1,
//                 boxShadow: "0 10px 25px rgba(34,197,94,0.6)",
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//             <p className="mt-4 text-lg font-medium">{product.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurProducts;
