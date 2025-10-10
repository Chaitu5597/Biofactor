
import React, { useState, useRef } from "react";
import {
    FaLeaf,
    FaWater,
    FaDollarSign,
    FaSeedling,
    FaChartLine,
    FaRecycle,
    FaDownload,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
 
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
    Spanish: [
        { id: 1, title: "Mejora la salud del suelo", icon: <FaLeaf />, content: "Mejora la estructura del suelo y la actividad microbiana, aumentando la fertilidad." },
        { id: 2, title: "Fomenta el crecimiento de las plantas", icon: <FaSeedling />, content: "Proporciona nutrientes esenciales (N, P, K) para un crecimiento saludable de los cultivos." },
        { id: 3, title: "Ecológico", icon: <FaRecycle />, content: "Reduce la dependencia de químicos, haciendo la agricultura sostenible." },
        { id: 4, title: "Rentable", icon: <FaDollarSign />, content: "Reduce los costos de insumos mientras maximiza el rendimiento." },
        { id: 5, title: "Eficiente en agua", icon: <FaWater />, content: "Mejora la retención de agua y la absorción de nutrientes." },
        { id: 6, title: "Rendimiento mejorado", icon: <FaChartLine />, content: "Ayuda a lograr una mayor productividad." },
    ],
    French: [
        { id: 1, title: "Améliore la santé du sol", icon: <FaLeaf />, content: "Améliore la structure du sol et l'activité microbienne, augmentant la fertilité." },
        { id: 2, title: "Favorise la croissance des plantes", icon: <FaSeedling />, content: "Fournit les nutriments essentiels (N, P, K) pour une croissance saine des cultures." },
        { id: 3, title: "Écologique", icon: <FaRecycle />, content: "Réduit la dépendance aux produits chimiques, rendant l'agriculture durable." },
        { id: 4, title: "Rentable", icon: <FaDollarSign />, content: "Réduit les coûts tout en maximisant le rendement." },
        { id: 5, title: "Efficace en eau", icon: <FaWater />, content: "Améliore la rétention d'eau et l'absorption des nutriments." },
        { id: 6, title: "Rendement accru", icon: <FaChartLine />, content: "Aide à atteindre une productivité plus élevée." },
    ],
    German: [
        { id: 1, title: "Verbessert die Bodengesundheit", icon: <FaLeaf />, content: "Verbessert die Bodenstruktur und die mikrobielle Aktivität, steigert die Fruchtbarkeit." },
        { id: 2, title: "Fördert das Pflanzenwachstum", icon: <FaSeedling />, content: "Bietet essentielle Nährstoffe (N, P, K) für gesundes Pflanzenwachstum." },
        { id: 3, title: "Umweltfreundlich", icon: <FaRecycle />, content: "Reduziert chemische Abhängigkeit und macht die Landwirtschaft nachhaltig." },
        { id: 4, title: "Kosteneffektiv", icon: <FaDollarSign />, content: "Senkt die Betriebskosten und maximiert den Ertrag." },
        { id: 5, title: "Wasser effizient", icon: <FaWater />, content: "Verbessert die Wasserspeicherung und Nährstoffaufnahme." },
        { id: 6, title: "Ertrag gesteigert", icon: <FaChartLine />, content: "Hilft, eine höhere Produktivität zu erreichen." },
    ],
    Chinese: [
        { id: 1, title: "改善土壤健康", icon: <FaLeaf />, content: "增强土壤结构和微生物活动，提高肥力。" },
        { id: 2, title: "促进植物生长", icon: <FaSeedling />, content: "提供健康作物生长所需的基本营养（N、P、K）。" },
        { id: 3, title: "环保", icon: <FaRecycle />, content: "减少化学依赖，使农业可持续发展。" },
        { id: 4, title: "成本效益", icon: <FaDollarSign />, content: "降低投入成本，同时最大化产量。" },
        { id: 5, title: "节水", icon: <FaWater />, content: "提高水分保持和养分吸收。" },
        { id: 6, title: "产量提高", icon: <FaChartLine />, content: "帮助实现更高的生产力。" },
    ],
};

const ApplicationDosage = () => {
    const languages = Object.keys(languageData);
    const [activeLanguage, setActiveLanguage] = useState(languages[0]);
    const [activeBenefit, setActiveBenefit] = useState(languageData[languages[0]][0]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pdfRef = useRef(null);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const handleLanguageClick = (lang) => {
        setActiveLanguage(lang);
        setActiveBenefit(languageData[lang][0]);
    };

    const handleDownloadPDF = async () => {
        if (!pdfRef.current) return;
        const canvas = await html2canvas(pdfRef.current, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`KeyBenefits_${activeLanguage}.pdf`);
    };

    return (
        <div   className="   p-8 bg-gradient-to-r from-green-50 via-white to-green-100 rounded-xl shadow-lg relative">   
            <h2 className="text-4xl text-green-800 mb-6">Application and Dosage</h2>
        <div className="flex flex-col md:flex-row gap-8 ">

            {/* Left Menu */}
            <div className="w-full md:w-1/3 flex flex-col gap-3">
                {languageData[activeLanguage].map((b) => (
                    <button
                        key={b.id}
                        onClick={() => setActiveBenefit(b)}
                        className={`relative flex items-center gap-3 max-h-18 p-4 rounded-lg shadow-md border text-left font-semibold overflow-hidden group
              ${activeBenefit.id === b.id
                                ? "bg-green-600 text-white border-green-600 scale-105"
                                : "bg-white text-gray-800 border-gray-300"
                            }`}
                    >
                        <span className="text-xl">{b.icon}</span>
                        <span className="relative z-10">{b.title}</span>

                        {activeBenefit.id !== b.id && (
                            <span className="absolute left-0 top-0 w-0 h-full bg-green-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-6 flex flex-row gap-6">

                {/* Left Column: Benefit Content */}
                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-green-700 flex items-center gap-3">{activeBenefit.icon} {activeBenefit.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mt-4">{activeBenefit.content}</p>
                </div>

            </div>
            {/* Right Column: Collapsible Language Selector & Download */}
            <div className="flex flex-col gap-4 min-w-[180px] ">


                {/* Download Button (always visible) */}
                <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 px-4 py-6 rounded-lg font-bold
            bg-gradient-to-r bd-white  text-green-700 shadow-lg   transition-all duration-300 mt-4"
                >
                    <FaDownload /> Download
                </button>

                {/* Collapse Header */}
                <div
                    className="flex justify-between items-center shadow-lg cursor-pointer bg-gradient-to-r bd-white bg-white px-4 py-6 rounded-lg"
                    onClick={toggleCollapse}
                >
                    <span className="font-bold text-green-700">Select Language</span>
                    {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                </div>


                {/* Collapse Content */}
                {!isCollapsed && (
                    <div className="flex flex-col gap-3 bg-gradient-to-r bd-white py-8 px-4 rounded-md h-52 overflow-y-auto">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageClick(lang)}
                                className={`px-4 py-2 md:py-1 rounded-full border font-semibold transition-colors text-sm md:text-base
                                        ${activeLanguage === lang ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-800 border-gray-300"}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                )}



            </div>

            {/* Hidden PDF container */}
            <div style={{ position: "absolute", left: "-9999px", top: 0 }} ref={pdfRef}>
                {languageData[activeLanguage].map((b) => (
                    <div key={b.id} style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                        <h3 style={{ color: "#16a34a", fontSize: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                            {b.icon} {b.title}
                        </h3>
                        <p style={{ fontSize: "14px", marginLeft: "32px" }}>{b.content}</p>
                    </div>
                ))}
            </div>


      </div> 
       </div>
    );
};

export default ApplicationDosage;