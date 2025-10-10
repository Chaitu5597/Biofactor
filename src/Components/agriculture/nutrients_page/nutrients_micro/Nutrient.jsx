
// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

// const Nutrient = ({ nutrientData, sections, toggleSections }) => {
//   const [activeSection, setActiveSection] = useState(
//     toggleSections?.[0]?.key || ""
//   );
//   const [hoveredButton, setHoveredButton] = useState(null);

//   return (
//     <div style={{ padding: "4rem" }}>
//       <div
//         style={{
//           borderRadius: "20px",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//           backgroundColor: "#fff",
//           padding: "6rem",
//         }}
//       >
//         {/* Quick Facts Section */}
//         {nutrientData && (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "flex-start",
//               marginBottom: "4rem",
//             }}
//           >
//             <div style={{ flex: 2 }}>
//               <h2 style={{ fontSize: "24px", color: "green", fontWeight: 600 }}>
//                 {nutrientData.name}
//               </h2>
//               <h2 style={{ fontSize: "15px", fontWeight: 500, marginTop: "1rem" }}>
//                 {nutrientData.description}
//               </h2>
//               <ul
//                 style={{
//                   listStyleType: "disc",
//                   lineHeight: "1.8",
//                   fontSize: "15px",
//                   padding: "1rem",
//                   width: "90%",
//                 }}
//               >
//                 {nutrientData.facts.map((fact, index) => (
//                   <li key={index}>{fact}</li>
//                 ))}
//               </ul>
//             </div>
//             <div style={{ flex: 1, textAlign: "center" }}>
//               <img
//                 src={nutrientData.image}
//                 alt={nutrientData.name}
//                 style={{ width: "90%", borderRadius: "8px", height: "70vh" }}
//               />
//             </div>
//           </div>
//         )}

//         {/* Dynamic Sections with Video */}
//         {sections && (
//           <div
//             style={{
//               maxWidth: "900px",
//               padding: "1rem 4rem",
//               backgroundColor: "#f0f0f0",
//               border: "2px solid #f0f0f0",
//               borderRadius: "20px",
//             }}
//           >
//             {sections.map((section) => (
//               <div
//                 key={section.title}
//                 style={{ marginBottom: "3rem", textAlign: "center" }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     marginBottom: "3rem",
//                   }}
//                 >
//                   <h1
//                     style={{
//                       fontSize: "30px",
//                       color: "green",
//                       fontWeight: 600,
//                       marginRight: "1rem",
//                     }}
//                   >
//                     {section.title}
//                   </h1>
//                   {section.videoUrl && (
//                     <video
//                       src={section.videoUrl}
//                       autoPlay
//                       loop
//                       muted
//                       style={{
//                         width: "30px",
//                         height: "30px",
//                         objectFit: "cover",
//                         borderRadius: "4px",
//                       }}
//                     />
//                   )}
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "1rem",
//                     flexWrap: "wrap",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   {section.buttons.map((btn) => {
//                     const isHovered = hoveredButton === btn;
//                     return (
//                       <button
//                         key={btn}
//                         type="button" // Prevent page navigation
//                         style={{
//                           padding: "0.5rem 1rem",
//                           borderRadius: "8px",
//                           border: "1px solid green",
//                           backgroundColor: isHovered ? "green" : "white",
//                           color: isHovered ? "white" : "green",
//                           cursor: "pointer",
//                           fontSize: "16px",
//                           transition: "0.3s",
//                         }}
//                         onMouseEnter={() => setHoveredButton(btn)}
//                         onMouseLeave={() => setHoveredButton(null)}
//                         onClick={() => {Navigate("/product")}}
                        
//                       >
//                         {btn}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Toggle Sections */}
//         {toggleSections && (
//           <div
//             style={{
//               marginTop: "4rem",
//               textAlign: "center",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <div style={{ marginBottom: "2rem" }}>
//               {toggleSections.map((section) => (
//                 <button
//                   key={section.key}
//                   type="button" // Prevent page navigation
//                   style={{
//                     padding: "5rem 9rem",
//                     borderRadius: "8px",
//                     border: "1px solid green",
//                     backgroundColor:
//                       activeSection === section.key ? "green" : "white",
//                     color: activeSection === section.key ? "white" : "green",
//                     cursor: "pointer",
//                     fontSize: "16px",
//                     marginRight: "1rem",
//                     transition: "0.3s",
//                   }}
//                   onClick={() => setActiveSection(section.key)}
//                 >
//                   {section.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nutrient;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nutrient = ({ nutrientData, sections, toggleSections }) => {
  const [activeSection, setActiveSection] = useState(
    toggleSections?.[0]?.key || ""
  );
  const [hoveredButton, setHoveredButton] = useState(null);

  const navigate = useNavigate(); // <-- useNavigate hook

  return (
    <div style={{ padding: "4rem" }}>
      <div
        style={{
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          padding: "6rem",
        }}
      >
        {/* Quick Facts Section */}
        {nutrientData && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginBottom: "4rem",
            }}
          >
            <div style={{ flex: 2 }}>
              <h2 style={{ fontSize: "24px", color: "green", fontWeight: 600 }}>
                {nutrientData.name}
              </h2>
              <h2
                style={{ fontSize: "15px", fontWeight: 500, marginTop: "1rem" }}
              >
                {nutrientData.description}
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  lineHeight: "1.8",
                  fontSize: "15px",
                  padding: "1rem",
                  width: "90%",
                }}
              >
                {nutrientData.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={nutrientData.image}
                alt={nutrientData.name}
                style={{ width: "90%", borderRadius: "8px", height: "70vh" }}
              />
            </div>
          </div>
        )}

        {/* Dynamic Sections with Video */}
        {sections && (
          <div
            style={{
              maxWidth: "900px",
              padding: "1rem 4rem",
              backgroundColor: "#f0f0f0",
              border: "2px solid #f0f0f0",
              borderRadius: "20px",
            }}
          >
            {sections.map((section) => (
              <div
                key={section.title}
                style={{ marginBottom: "3rem", textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "3rem",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                      color: "green",
                      fontWeight: 600,
                      marginRight: "1rem",
                    }}
                  >
                    {section.title}
                  </h1>
                  {section.videoUrl && (
                    <video
                      src={section.videoUrl}
                      autoPlay
                      loop
                      muted
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {section.buttons.map((btn) => {
                    const isHovered = hoveredButton === btn;
                    return (
                      <button
                        key={btn}
                        type="button"
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          border: "1px solid green",
                          backgroundColor: isHovered ? "green" : "white",
                          color: isHovered ? "white" : "green",
                          cursor: "pointer",
                          fontSize: "16px",
                          transition: "0.3s",
                        }}
                        onMouseEnter={() => setHoveredButton(btn)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => navigate("/product")} // <-- fixed
                      >
                        {btn}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle Sections */}
        {toggleSections && (
          <div
            style={{
              marginTop: "4rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              {toggleSections.map((section) => (
                <button
                  key={section.key}
                  type="button"
                  style={{
                    padding: "5rem 9rem",
                    borderRadius: "8px",
                    border: "1px solid green",
                    backgroundColor:
                      activeSection === section.key ? "green" : "white",
                    color: activeSection === section.key ? "white" : "green",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginRight: "1rem",
                    transition: "0.3s",
                  }}
                  onClick={() => setActiveSection(section.key)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nutrient;
