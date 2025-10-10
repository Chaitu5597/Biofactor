



import React, { useState } from "react";
import PrimaryNutrientsTitle from "../nutrients_page/nutrients_micro/PrimaryNutrientsTitle";
import Nutrient from "../nutrients_page/nutrients_micro/Nutrient";

// Inline CSS for the ::before pseudo-element
const styles = `
  .tab-button {
    position: relative;
    overflow: hidden;
  }
  .tab-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #4caf50;
    transition: left 0.3s ease;
    z-index: 0;
  }
  .tab-button:hover::before {
    left: 0;
    
  }
`;

const SecondaryNutrientsTabs = () => {
  const tabs = [
    { id: 1, title: "Calcium" },
    { id: 2, title: "Magnesium" },
    { id: 3, title: "Sulfur" },
    // { id: 4, title: "Potassium" },
  ];

  const Nitrogen = {
    name: "Quick Facts",
    description:
      "Nitrogen is a vital element for plant growth and is a component of many essential plant molecules, including proteins, nucleic acids, chlorophyll, and hormones. It is one of the primary nutrients that plants need to grow, and it is often the most limiting nutrient in the soil.",
    facts: [
      "Nitrogen plays a vital role in several plant growth processes such as synthesis of Nucleic acids, Amino acids, enzymes and chlorophyll molecules to optimize plant yield.",
      "Amino acids synthesised will be utilized in the production of enzymes and various plant parts.",
      "In general, plants can uptake nitrogen in the form of Nitrate (NO3–) and Ammonia (NH4+)",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Nitrogen_image.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: [
          "Aadhar Gold",
          "IINM Chakra",
          "N-Factor",
          "Triple Action Programe",
          "Double Action Programe",
        ],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: [
          "Belom series (S1,S2,S3)",
          "Belom Fs",
          "Poshak series (L1,L2,L3,L4)",
        ],
      },
    ],
  };

  const Sulfur = {
    name: "Quick Facts",
    facts: [
        "Sulfur is a vital component of amino acids (like cysteine and methionine), proteins, and vitamins",
        "It contributes to chlorophyll formation, which is necessary for photosynthesis, helping plants convert sunlight into energy.​",
         "Sulfur is involved in the formation of certain coenzymes and is essential for the activity of various enzymes that regulate plant metabolism.",
         "In certain plants, sulfur compounds contribute to the aroma and taste of foods, such as garlic and onions.",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Sulfur_image.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: [
         
          
          "Aadhaar Gold",
          "G-Vam",
          
          "Triple Action Programe",
        ],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: [
          "Belom series",
          "Cas610",
          "Belom Fs",
          "Poshak series",
        ],
      },
    ],
  };

  const Calcium = {
    name: "Quick Facts",
    facts: [
      "Secondary Nutrients such as calcium and magnesium are required in lesser quantities than the primary nutrients, however they are just as important for plant nutrition.", 
      "Calcium plays a major role in the formation of the cell wall membrane and its plasticity, affecting normal cell division by maintaining cell integrity and membrane permeability. It combines with anions including organic acids, sulphates, and phosphates. It acts as a detoxifying agent by neutralizing organic acids in plants.​",      
      "Calcium is essential for seed production, protein formulation and in improving the disease resistance in plants. Without adequate Calcium, which in the form of calcium pectate is needed to form rigid cell walls, newly emerging leaves may stick together at the margins, which causes tearing as the leaves expand and unfurl. This may also cause the stem structure to be weakened.",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/calcium_image.jpg",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: ["Aadhar Gold", "Double Action Programe", "G-VAM"],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: ["Canmag", "Cas610", "Belom Fs", "Belom series","Poshak series"],
      },
    ],
  };

  const Magnesium = {
    name: "Quick Facts",
    facts: [
        "Magnesium is necessary for cell division and protein formation and in essential for plant respiration. It is a component of pectin, important for stability of cells and phytin. It assists the movement of sugars within a plant.",
"The predominant role of Magnesium is as a major constituent of the chlorophyll molecule, and it is therefore actively involved in photosynthesis. It is required to stabilize ribosome particles and also helps stabilize the structure of nucleic acids.",
"Deficiency of Magnesium leads to shortage of chlorophyll resulting in dropping foliage and poor and stunted plant growth.",    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Magnesium_image.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: [
          "Aadhar Gold",
          
          
          
          "G-Vam",
          "Triple Action Programe",
        ],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: ["Magni5-S3", "Canmag", "Belom Fs","Belom series","Phoshak series"],
      },
    ],
  };

  const toggleSections = [
    { key: "secondaryNutrients", label: "Secondary Nutrients" },
    { key: "micronutrients", label: "Micronutrients" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      {/* Inject CSS for ::before pseudo-element */}
      <style>{styles}</style>

      <PrimaryNutrientsTitle
        title="Secondary Nutrients"
        backgroundImage="https://i.pinimg.com/1200x/61/e8/a1/61e8a1bf2fd9586f3b0dea8e10537824.jpg"
        height="500px"
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* Tabs Buttons */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          margin: "1rem 0",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="tab-button" // Add class for ::before styling
            style={{
              padding: "1rem 2rem",
              cursor: "pointer",
              backgroundColor: activeTab === tab.id ? "#4caf50" : "transparent", // Active: green, Inactive: transparent
              color: activeTab === tab.id ? "#fff" : "#2e7d32", // Active: white, Inactive: dark green
              border: activeTab === tab.id ? "none" : "1px solid #4caf50", // Green border for inactive tabs
              borderRadius: "5px",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              marginTop: "2rem",
              position: "relative", // Required for ::before positioning
              zIndex: 1, // Ensure text stays above ::before
              transition: "color 0.3s ease", // Smooth text color transition
            }}
          >
            <span style={{ position: "relative", zIndex: 2 }}>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 1 && (
          <Nutrient
            nutrientData={Calcium}
            sections={Calcium.sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 2 && (
          <Nutrient
            nutrientData={Magnesium }
            sections={Magnesium .sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 3 && (
          <Nutrient
            nutrientData={Sulfur}
            sections={Sulfur.sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 4 && (
          <Nutrient
            nutrientData={Magnesium}
            sections={Magnesium.sections}
            toggleSections={toggleSections}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryNutrientsTabs;   