import React, { useState } from "react";

const RetailerPage = () => {
  const [language, setLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("agriculture");
  const [activeTab, setActiveTab] = useState("Products");

  // Languages
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "te", label: "తెలుగు" },
    { code: "ta", label: "தமிழ்" },
    { code: "bn", label: "বাংলা" },
    { code: "mr", label: "मराठी" },
  ];

  // Categories
  const categories = [
    { id: "agriculture", title: { en: "Agriculture", hi: "कृषि", te: "వ్యవసాయం", ta: "விவசாயம்", bn: "কৃষি", mr: "शेती" }, description: "Crop solutions" },
    { id: "largeAnimals", title: { en: "Large Animals", hi: "बड़े पशु", te: "పెద్ద జంతువులు", ta: "பெரிய விலங்குகள்", bn: "বড় প্রাণী", mr: "मोठी प्राणी" }, description: "Cattle & Buffalo" },
    { id: "poultry", title: { en: "Poultry", hi: "पोल्ट्री", te: "కోళ్లు", ta: "கோழிகள்", bn: "পোলট্রি", mr: "कोंबडीपालन" }, description: "Chicken & Birds" },
    { id: "aqua", title: { en: "Aqua", hi: "जलीय", te: "ఆక్వా", ta: "நீர்வாழ்", bn: "জলজ", mr: "जलीय" }, description: "Fish & Shrimp" },
  ];

  // Tabs
  const categoryTabs = {
    agriculture: ["Products", "Fertilizers", "Seeds"],
    largeAnimals: ["Products", "Medicines", "Supplements"],
    poultry: ["Products", "Feeds", "Vaccines"],
    aqua: ["Products", "Feeds", "Health"],
  };

  // Dummy product data
  const categoryData = {
    agriculture: {
      Products: [
        {
          name: "BioGrowth Liquid",
          type: "Liquid",
          usage: "Mix 5ml with 1L water, spray weekly.",
          image: "https://source.unsplash.com/400x300/?fertilizer",
          link: "#",
        },
        {
          name: "Super Grain Mix",
          type: "Grain",
          usage: "Apply 50kg per acre before sowing.",
          image: "https://source.unsplash.com/400x300/?grains",
          link: "#",
        },
      ],
      Fertilizers: [
        {
          name: "Organic Fert A",
          type: "Powder",
          usage: "Mix into soil at planting stage.",
          image: "https://source.unsplash.com/400x300/?fertilizer,organic",
          link: "#",
        },
      ],
      Seeds: [
        {
          name: "Hybrid Rice",
          type: "Seeds",
          usage: "Plant 1kg per acre.",
          image: "https://source.unsplash.com/400x300/?rice",
          link: "#",
        },
      ],
    },
    poultry: {
      Products: [
        {
          name: "Layer Feed",
          type: "Pellets",
          usage: "Provide daily with fresh water.",
          image: "https://source.unsplash.com/400x300/?poultry,feed",
          link: "#",
        },
      ],
      Feeds: [
        {
          name: "Corn Mix",
          type: "Grain",
          usage: "Feed twice a day.",
          image: "https://source.unsplash.com/400x300/?corn",
          link: "#",
        },
      ],
      Vaccines: [
        {
          name: "NDV Vaccine",
          type: "Liquid",
          usage: "Use as directed by vet.",
          image: "https://source.unsplash.com/400x300/?vaccine",
          link: "#",
        },
      ],
    },
    largeAnimals: {
      Products: [
        {
          name: "Cattle Feed",
          type: "Pellets",
          usage: "2kg per day per cow.",
          image: "https://source.unsplash.com/400x300/?cow,feed",
          link: "#",
        },
      ],
      Medicines: [
        {
          name: "Dewormer",
          type: "Liquid",
          usage: "Give 20ml per animal monthly.",
          image: "https://source.unsplash.com/400x300/?medicine",
          link: "#",
        },
      ],
      Supplements: [
        {
          name: "Mineral Block",
          type: "Block",
          usage: "Keep available in shed.",
          image: "https://source.unsplash.com/400x300/?mineral",
          link: "#",
        },
      ],
    },
    aqua: {
      Products: [
        {
          name: "Shrimp Feed",
          type: "Granules",
          usage: "Feed twice daily.",
          image: "https://source.unsplash.com/400x300/?shrimp",
          link: "#",
        },
      ],
      Feeds: [
        {
          name: "Floating Pellets",
          type: "Pellets",
          usage: "Feed on pond surface.",
          image: "https://source.unsplash.com/400x300/?fish,feed",
          link: "#",
        },
      ],
      Health: [
        {
          name: "Water Cleaner",
          type: "Liquid",
          usage: "Apply 1L per 10,000L water weekly.",
          image: "https://source.unsplash.com/400x300/?water,clean",
          link: "#",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Language Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow focus:outline-none"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        {language === "en" ? "Biofactor Retailer Page" : "बायोफैक्टर रिटेलर पेज"}
      </h1>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setActiveTab(categoryTabs[cat.id][0]);
            }}
            className={`cursor-pointer p-6 rounded-xl shadow-lg text-center transition ${
              selectedCategory === cat.id
                ? "bg-green-600 text-white"
                : "bg-white hover:bg-green-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {cat.title[language] || cat.title.en}
            </h2>
            <p className="text-sm">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        {categoryTabs[selectedCategory].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-green-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
          {categories.find((c) => c.id === selectedCategory).title[language]} -{" "}
          {activeTab}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {categoryData[selectedCategory][activeTab].map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg hover:shadow-md transition flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                {item.name}
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {item.type}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Usage:</strong> {item.usage}
              </p>
              <a
                href={item.link}
                className="mt-auto bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition"
              >
                See More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailerPage;




// import React, { useState } from "react";

// // Dummy product data
// const products = {
//   All: [
//     {
//       name: "Organic Biofertilizer",
//       category: "Agriculture",
//       type: "Granules",
//       usage: "Apply 2kg per acre during sowing.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Cattle Feed Supplement",
//       category: "Livestock",
//       type: "Liquid",
//       usage: "Mix 20ml per animal daily.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Poultry Growth Booster",
//       category: "Poultry",
//       type: "Powder",
//       usage: "Add 5g per 1kg feed.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Aqua Water Probiotic",
//       category: "Aqua",
//       type: "Liquid",
//       usage: "Add 1L per acre of pond water weekly.",
//       image: "https://via.placeholder.com/150",
//     },
//   ],
//   Agriculture: [
//     {
//       name: "Organic Biofertilizer",
//       type: "Granules",
//       usage: "Apply 2kg per acre during sowing.",
//       image: "https://via.placeholder.com/150",
//     },
//   ],
//   Livestock: [
//     {
//       name: "Cattle Feed Supplement",
//       type: "Liquid",
//       usage: "Mix 20ml per animal daily.",
//       image: "https://via.placeholder.com/150",
//     },
//   ],
//   Poultry: [
//     {
//       name: "Poultry Growth Booster",
//       type: "Powder",
//       usage: "Add 5g per 1kg feed.",
//       image: "https://via.placeholder.com/150",
//     },
//   ],
//   Aqua: [
//     {
//       name: "Aqua Water Probiotic",
//       type: "Liquid",
//       usage: "Add 1L per acre of pond water weekly.",
//       image: "https://via.placeholder.com/150",
//     },
//   ],
// };

// // Translations for dropdown (dummy text for now)
// const translations = {
//   en: "Welcome to Biofactor - Sustainable Agri Solutions",
//   hi: "बायोफैक्टर में आपका स्वागत है - सतत कृषि समाधान",
//   te: "బయోఫాక్టర్‌కి స్వాగతం - స్థిరమైన వ్యవసాయ పరిష్కారాలు",
//   ta: "பயோஃபாக்டருக்கு வரவேற்கிறோம் - நிலையான வேளாண் தீர்வுகள்",
//   kn: "ಬಯೋಫ್ಯಾಕ್ಟರ್‌ಗೆ ಸ್ವಾಗತ - ಸಸ್ಥಿರ ಕೃಷಿ ಪರಿಹಾರಗಳು",
//   ml: "ബയോഫാക്ടറിലേക്ക് സ്വാഗതം - സ്ഥിരമായ കാർഷിക പരിഹാരങ്ങൾ",
// };

// const RetailerPage = () => {
//   const [language, setLanguage] = useState("en");
//   const [activeCategory, setActiveCategory] = useState("All");

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Language Dropdown */}
//       <div className="mb-6 flex justify-end">
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="border rounded-lg px-4 py-2 shadow"
//         >
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="te">Telugu</option>
//           <option value="ta">Tamil</option>
//           <option value="kn">Kannada</option>
//           <option value="ml">Malayalam</option>
//         </select>
//       </div>

//       {/* Hero Text */}
//       <h1 className="text-2xl font-bold text-green-700 mb-8 text-center">
//         {translations[language]}
//       </h1>

//       {/* Category Cards */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
//         {["All", "Agriculture", "Livestock", "Poultry", "Aqua"].map((cat) => (
//           <div
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`cursor-pointer p-6 rounded-xl shadow-md text-center font-semibold 
//             ${
//               activeCategory === cat
//                 ? "bg-green-600 text-white"
//                 : "bg-white text-green-700 border border-green-600"
//             }`}
//           >
//             {cat}
//           </div>
//         ))}
//       </div>

//       {/* Products Section */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products[activeCategory]?.map((prod, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
//           >
//             <img
//               src={prod.image}
//               alt={prod.name}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-lg font-bold text-green-700">{prod.name}</h2>
//             <p className="text-sm text-gray-600">Type: {prod.type}</p>
//             <p className="text-sm text-gray-600">Usage: {prod.usage}</p>
//             <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               See More
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Extra Info for Livestock */}
//       {activeCategory === "Livestock" && (
//         <div className="mt-10 p-6 bg-green-50 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold text-green-800 mb-2">
//             Livestock - Biofactor
//           </h3>
//           <p className="text-gray-700">
//             Biofactor is a biotechnology and sustainable agriculture company
//             that develops natural, eco-friendly solutions for agriculture,
//             aquaculture, and animal nutrition. It specializes in biofertilizers,
//             bio-stimulants, microbial formulations, and enzymes to improve soil
//             health, crop yield, animal productivity, and reduce environmental
//             impact.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RetailerPage;
