// import React from "react";
// import { pictures } from "../../../assets/images/pictires";

// const OurCow = () => {
//   return (
//     <div
//       className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${pictures.BuffeloCow})`, // 🐄 Background image
//       }}
//     >
//       {/* Transparent Card */}
//      <div className="bg-black/20 border border-white/30 rounded-2xl shadow-lg 
//                 w-[500px] h-[200px] p-8 text-center flex flex-col items-center justify-center mt-72">
//   <p className="text-lg text-white">
//     <span className="text-green-500 text-4xl font-bold mb-3">
//       BIOFACTOR
//     </span>{" "}
//     <br />

//     <p className=" text-xl font-normal">
//     Boosting Growth, Enhancing Productivity.
//     </p>
//   </p>
// </div>

//     </div>
//   );
// };

// export default OurCow;



import React from "react";
import { pictures } from "../../../assets/images/pictires";
import OurCowProduct from "./OurCowProduct";

const OurCow = () => {
  return (
    <div>
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${pictures.BuffeloCow})`,
        }}
      >
        {/* Card Wrapper */}
        <div className="relative w-[500px] h-[200px] mt-72">
          {/* Green Spark Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 overflow-hidden">
            <div className="absolute w-32 h-32 bg-green-400 rounded-full blur-lg animate-spark"></div>
            {/* Actual Card */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl w-full h-full flex flex-col items-center justify-center text-center p-6">
              <p className="text-white">
                <span className="text-green-500 text-4xl font-bold block mb-2">
                  BIOFACTOR
                </span>
                <span className="text-xl font-normal">
                  Boosting Growth, Enhancing Productivity.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Inline CSS for moving spark */}
        <style>
          {`
          @keyframes sparkMove {
            0% { top: -20px; left: 0%; }
            25% { top: 0%; left: 100%; }
            50% { top: 100%; left: 100%; }
            75% { top: 100%; left: 0%; }
            100% { top: -20px; left: 0%; }
          }
          .animate-spark {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #22c55e; /* green-500 */
            border-radius: 50%;
            filter: blur(8px);
            animation: sparkMove 5s linear infinite;
          }
        `}
        </style>
      </div>
      <OurCowProduct />
    </div>
  );
};

export default OurCow;
