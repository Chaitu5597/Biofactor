// import React from "react";
// import { pictures } from "../../../assets/images/pictires";

// const MainProduct = (product) => {
//   const product = {
//     name: "Aadhaar Gold",
//     description:
//       "Aadhaar Gold is a cutting-edge biofertilizer developed with encapsulated beneficial bacteria, delivering essential nutrients (nitrogen, phosphorus, and potassium) in a convenient granular form. Utilizing Bioencapsulation and sustainable release technology, Aadhaar Gold enhances nutrient efficacy.",
//     image: pictures.adhar, // your imported image
//     image_product:"https://www.biofactor.in/wp-content/uploads/2024/09/aadhar-gold-technologi_image.png"
//   };

//   return (
//     <div>

    
//     <div className="flex flex-col md:flex-row items-center md:items-start gap-20 rounded-lg ml-16 h-60 mt-36">
//       {/* Product Image */}
//       <div className="w-full md:w-1/4 flex justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-md rounded-lg" 
//         />
//       </div>

//       {/* Product Details */}
//       <div className="w-full md:w-2/3 flex flex-col gap-4">
//         <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
//         <p className="text-gray-700 text-lg pr-18  leading-relaxed">{product.description}</p>
//       </div>

//        </div>


//       <div className="w-full md:w-full flex justify-center my-20">
//         <img
//           src={product.image_product}
//           alt={product.name}
//           className="w-full h-auto rounded-lg" 
//         />
//       </div>

//     </div>
//   );
// };

// export default MainProduct;




import React from "react";

const MainProduct = ({ name, description, image, imageProduct }) => {
  return (
    <div>
      {/* Top Section: Image + Details */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20 rounded-lg ml-16 h-60 mt-36">
        
        {/* Product Image */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-700 text-lg pr-18 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Product Technology / Secondary Image */}
      <div className="w-full md:w-full flex justify-center my-20">
        <img
          src={imageProduct}
          alt={`${name} visual`}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default MainProduct;
