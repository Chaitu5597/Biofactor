import React, { useState } from "react";

const Specialize = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row w-full my-36 max-w-6xl mx-auto p-6 gap-8">
      {/* Left Side - Heading & Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 pr-4 text-green-600">
          We specialize in the development, registration, and commercialization
          of innovative solutions.
        </h2>
      </div>

      {/* Right Side - Accordions */}
      <div className="w-full md:w-1/2 space-y-4">
        {[
          {
            title: "Veterinary Health",
            content:
              "We specialize in veterinary medicines across various pharmaceutical forms for livestock and companion animals. Our high-quality finished products are manufactured in Europe under Good Manufacturing Practices (GMP) and distributed following Good Distribution Practices (GDP). Our registration dossiers meet the strictest regulatory standards, ensuring compliance with top regulatory agencies.",
          },
          {
            title: "Suppliers of active pharmaceutical ingredients",
            content:
              "From our warehouse in Barcelona, we supply Active Pharmaceutical Ingredients (APIs) for animal health products, manufactured by Chemo and our trusted partners. Our products meet the highest industry standards, including DMF, CEP, EP, and USP, ensuring quality, safety, and regulatory compliance.",
          },
          {
            title: "Nutraceuticals for animals",
            content:
              "Nutraceuticals are dietary supplements designed to enhance animal health, welfare, and productivity. Vetpharma has developed a diverse range of nutraceuticals, formulated for in-feed and water inclusion, delivering highly effective therapeutic benefits.",
          },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            {/* Accordion Header */}
            <button
              className={`w-full flex justify-center items-center p-4 text-xl font-medium text-center transition-colors duration-1000 
                ${
                  activeIndex === index
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </button>

            {/* Accordion Content with Smooth Collapse */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-[500px] p-4" : "max-h-0 p-0"
              } bg-white`}
            >
              <p className="text-gray-700 text-md text-left">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialize;
