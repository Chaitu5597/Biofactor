import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  { question: "What is the recommended dosage and application method?", answer: "Apply 4 kg per acre by mixing directly into soil during final ploughing or at sowing time. Can be combined with organic fertilizers." },
  { question: "How much yield increase can I expect?", answer: "Typically increases crop yield by 25-30% while reducing chemical fertilizer dependency by 20-25%." },
  { question: "Can I use Aadhaar Gold with chemical fertilizers?", answer: "Yes, fully compatible due to bio-encapsulation technology. Avoid mixing with bactericides; keep 7-10 days gap with fungicides." },
  { question: "How long does it remain active in soil?", answer: "Granules release microbes gradually for 60-90 days, providing sustained activity throughout the crop cycle." },
  { question: "What makes Aadhaar Gold different?", answer: "Patented indigenous microbial strains, bio-encapsulation technology for slow release, 2-year shelf life, proven effectiveness across crops." },
  { question: "Which crops can benefit?", answer: "Suitable for paddy, cotton, sugarcane, chilli, vegetables, fruits, spices; specially formulated for Indian agricultural conditions." },
];

const QuestionsAndAnswers = ({ primaryColor = "green" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`p-8 rounded-xl shadow-lg`}
      style={{
        background: `linear-gradient(to right, ${primaryColor}50, white, ${primaryColor}100)`
      }}
    >
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left flex justify-between items-center font-medium text-gray-700"
          >
            {faq.question}
            <span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;


