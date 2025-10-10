import React from "react";

/**
 * Reusable Title Section with Background Image
 *
 * Props:
 * - title (string): The title text (e.g. "Primary Nutrients")
 * - backgroundImage (string): The background image URL or imported asset
 * - height (string): Height of the section (default: "300px")
 * - overlayColor (string): Optional overlay color (default: "rgba(0,0,0,0.4)")
 */

const PrimaryNutrientsTitle = ({
  title = "Primary Nutrients",
  backgroundImage,
  height = "300px",
  overlayColor = "rgba(0,0,0,0.4)",
}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundPositionY: "-250px",
   
    backgroundSize: "cover",
    height,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontSize: "2.5rem",
    
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: overlayColor,
    zIndex: 1,
  };

  const titleStyle = {
    position: "relative",
    zIndex: 2,
    bottom: "50px",
   
  };

  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}></div>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

export default PrimaryNutrientsTitle;
