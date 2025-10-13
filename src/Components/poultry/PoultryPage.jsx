import React, { useEffect, useRef, useState } from "react";
import VideoStatsSection from "./poultry_micro/VideoStatsSection";
import AnimatedVideoSection from "./poultry_micro/AnimatedVideoSection";
import TestimonialSlider from "../testimonialSlider/TestimonialSlider";

const PoultryPage = () => {
  const [poultry, setPoultry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetched = useRef(false); // Prevent duplicate fetches in Strict Mode

  useEffect(() => {
    if (fetched.current) return; // Skip if already fetched
    fetched.current = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/poultry");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        // 🟢 Structure data for both sections 
        const poultryData = {
          section1: {
            title: data.Section1.title,
            videoUrl: data.Section1.videoUrl,
            cardData: data.Section1.cardData,
          },
          section2: {
            title: data.Section2.title,
            description: data.Section2.description,
            videoUrl: data.Section2.videoUrl,
            reverse: data.Section2.reverse || false,
           
          },
        };

        setPoultry(poultryData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading...</p>;
  if (error)
    return <p className="text-center mt-20 text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col gap-20">
      {/* 🟩 Section 1 — Stats + Video */}
      <VideoStatsSection
        mainHeading={poultry.section1.title}
        videoUrl={poultry.section1.videoUrl}
        overlayColor="bg-black bg-opacity-40"
        cardData={poultry.section1.cardData}
      />

      {/* 🟨 Section 2 — Animated Video Section */}
      <AnimatedVideoSection
        videoUrl={poultry.section2.videoUrl}
        heading={poultry.section2.title}
        description={poultry.section2.description}
        reverse={poultry.section2.reverse}
      />

        <TestimonialSlider/>
      
    </div>
  );
};

export default PoultryPage;
