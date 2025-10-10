
import React, { useEffect, useRef, useState } from "react";
import MainProduct from "./Product_micro/MainProduct";
import Keybenefits from "./Product_micro/Keybenefits";
import ApplicationDosage from "./Product_micro/ApplicationDosage";
import { pictures } from "../../assets/images/pictires";
import {
  FaLeaf,
  FaWater,
  FaDollarSign,
  FaSeedling,
  FaChartLine,
  FaRecycle,
} from "react-icons/fa";
import QuesitionsAndAnswar from "./Product_micro/QuesitionsAndAnswar";

const AnimatedSection = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// ✅ Define languageData separately
const languageData = {
  English: [
    { id: 1, title: "Improves Soil Health", icon: <FaLeaf />, content: "Enhances soil structure and microbial activity, boosting fertility." },
    { id: 2, title: "Boosts Plant Growth", icon: <FaSeedling />, content: "Provides essential nutrients (N, P, K) for healthy crop growth." },
    { id: 3, title: "Eco-Friendly", icon: <FaRecycle />, content: "Reduces chemical dependency, making farming sustainable." },
    { id: 4, title: "Cost Effective", icon: <FaDollarSign />, content: "Cuts down input costs while maximizing yield." },
    { id: 5, title: "Water Efficient", icon: <FaWater />, content: "Improves water retention and nutrient absorption." },
    { id: 6, title: "Enhanced Yield", icon: <FaChartLine />, content: "Helps achieve higher productivity." },
  ],
  Hindi: [
    { id: 1, title: "मृदा स्वास्थ्य सुधारता है", icon: <FaLeaf />, content: "मिट्टी की संरचना और सूक्ष्मजीव गतिविधि बढ़ाता है।" },
    { id: 2, title: "पौधों की वृद्धि बढ़ाता है", icon: <FaSeedling />, content: "स्वस्थ फसल वृद्धि के लिए आवश्यक पोषक तत्व प्रदान करता है।" },
    { id: 3, title: "पर्यावरण-अनुकूल", icon: <FaRecycle />, content: "रासायनिक निर्भरता कम करता है और खेती को सतत बनाता है।" },
    { id: 4, title: "लागत प्रभावी", icon: <FaDollarSign />, content: "उपयोग की लागत कम करता है और उपज अधिकतम करता है।" },
    { id: 5, title: "जल कुशल", icon: <FaWater />, content: "जल संरक्षण और पोषक तत्व अवशोषण में सुधार करता है।" },
    { id: 6, title: "उच्च उपज", icon: <FaChartLine />, content: "उच्च उत्पादकता प्राप्त करने में मदद करता है।" },
  ],
  // Add Spanish, French, German, Chinese here if needed
};

const ProductPage = () => {
  const productData = {
    name: "Aadhaar Gold",
    description:
      "Aadhaar Gold is a cutting-edge biofertilizer developed with encapsulated beneficial bacteria, delivering essential nutrients (nitrogen, phosphorus, and potassium) in a convenient granular form. Utilizing Bioencapsulation and sustainable release technology, Aadhaar Gold enhances nutrient efficacy.",
    image: pictures.adhar,
    imageProduct:
      "https://www.biofactor.in/wp-content/uploads/2024/09/aadhar-gold-technologi_image.png",
    benefits: [
      { id: 1, title: "Improves Soil Health", icon: <FaLeaf />, content: "Enhances soil structure and microbial activity, boosting fertility." },
      { id: 2, title: "Boosts Plant Growth", icon: <FaSeedling />, content: "Provides essential nutrients (N, P, K) for healthy crop growth." },
      { id: 3, title: "Eco-Friendly", icon: <FaRecycle />, content: "Reduces chemical dependency, making farming sustainable." },
      { id: 4, title: "Cost Effective", icon: <FaDollarSign />, content: "Cuts down input costs while maximizing yield." },
      { id: 5, title: "Water Efficient", icon: <FaWater />, content: "Improves water retention and nutrient absorption." },
      { id: 6, title: "Enhanced Yield", icon: <FaChartLine />, content: "Helps achieve higher productivity." },
    ],
  };

  

  return (
    <div className="container mx-auto px-8 md:px-24 py-10 flex flex-col gap-28">
      <AnimatedSection>
        <MainProduct
          name={productData.name}
          description={productData.description}
          image={productData.image}
          imageProduct={productData.imageProduct}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Keybenefits
          title="Key Benefits"
          benefits={productData.benefits}
          primaryColor="green"
        />
      </AnimatedSection>

      <AnimatedSection>
        <ApplicationDosage
          title="Application and Dosage"
          data={languageData}
          primaryColor="green"
        />
      </AnimatedSection>


      <AnimatedSection>
        <QuesitionsAndAnswar/>
      </AnimatedSection>
    </div>
  );
};

export default ProductPage;
