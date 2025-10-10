import React, { useState } from "react";
import Nutrient from "./nutrients_micro/Nutrient";
import PrimaryNutrientsTitle from "./nutrients_micro/PrimaryNutrientsTitle";

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

const NutrientsTabs = () => {
  const tabs = [
    { id: 1, title: "Carbon" },
    { id: 2, title: "Nitrogen" },
    { id: 3, title: "Phosphorus" },
    { id: 4, title: "Potassium" },
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

  const Phosphorus = {
    name: "Quick Facts",
    facts: [
      "Phosphorus is present in every living cell, both plant and animal. As an essential nutrient for plant growth, its availability is critical during the early growth stages to ensure a quick and healthy start.",
      "Phosphorus aids in root development, flower initiation, seed and fruit development and has been known to reduce disease incidence in some plants and to improve the quality of certain crops.",
      "The supply or conversion of available Phosphorus from the soil into the soil solution is reduced due to cold soil temperature, wet soils or soil pH levels. The deficiency of Phosphorus especially at the early stages will lead to slow or stunted growth, weak plant and discolouration of leaves and stems.",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Phosphorus_image.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: [
          "P-Factor",
          "IINM Chakra",
          "Aadhaar Gold",
          "G-Vam",
          "Double Action Programe",
          "Triple Action Programe",
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

  const Carbon = {
    name: "Quick Facts",
    facts: [
      "Carbon is essential for plant life, performing several critical functions.",
      "In photosynthesis, plants absorb carbon dioxide (CO₂) to synthesize glucose and oxygen, which are crucial for growth and energy production.",
      "Carbon is a fundamental component of carbohydrates, which support the development and structural integrity of plant tissues.",
      "Plants store energy as starch, a carbon-based carbohydrate, which is vital for their survival under low-light conditions.",
      "Carbon is a major component of cellulose and lignin, which provide mechanical support to plant tissues.",
      "During cellular respiration, carbon plays a role in converting stored energy into usable forms.",
      "Overall, carbon is vital for plant health, growth, and its role in the global carbon cycle.",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Carbon_plant-2-1.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: ["Aadhar Gold", "Double Action Programe", "Triple Action Programe"],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: ["BOC", "Sumca", "Promote"],
      },
    ],
  };

  const Potassium = {
    name: "Quick Facts",
    facts: [
      "Potassium plays a critical role in plant growth and metabolism. It is responsible for the movement of water, nutrients and carbohydrates in the plant. It regulates the opening and closing of stomata thus regulating the uptake of CO2 to enhance photosynthesis.",
      "In photosynthesis, Potassium plays the crucial role of maintaining the balance of electrical charges at the site of ATP production. It triggers the activation of important biochemical enzymes for the generation of Adenosine Triphosphate (ATP). ATP provides energy for other chemical and physiological processes such as the excretion of waste materials in plants.",
      "Potassium has been known to improve disease resistance in plants, improve the size of grains and seeds, and improve the quality of fruits and vegetables. It also facilitates protein and starch synthesis in plants.",
    ],
    image: "https://www.biofactor.in/wp-content/uploads/2024/09/Potassium_image.png",
    sections: [
      {
        title: "Microbes",
        videoUrl: "https://pin.it/2Y5fFiZDY",
        buttons: [
          "Aadhar Gold",
          "IINM Chakra",
          "K-Factor",
          "Bio Potash",
          "G-Vam",
          "Triple Action Programe",
        ],
      },
      {
        title: "Minerals",
        videoUrl: "https://pin.it/6Mx9P3zEd",
        buttons: ["Belom-S3", "High-K", "King-K"],
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
        title="Primary Nutrients"
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
            nutrientData={Carbon}
            sections={Carbon.sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 2 && (
          <Nutrient
            nutrientData={Nitrogen}
            sections={Nitrogen.sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 3 && (
          <Nutrient
            nutrientData={Phosphorus}
            sections={Phosphorus.sections}
            toggleSections={toggleSections}
          />
        )}
        {activeTab === 4 && (
          <Nutrient
            nutrientData={Potassium}
            sections={Potassium.sections}
            toggleSections={toggleSections}
          />
        )}
      </div>
    </div>
  );
};

export default NutrientsTabs;   