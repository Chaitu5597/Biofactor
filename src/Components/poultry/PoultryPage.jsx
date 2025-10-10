import React, { useEffect, useRef, useState } from "react";
import VideoStatsSection from "./poultry_micro/VideoStatsSection";

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

        // Map Section1 for VideoStatsSection
        const sectionData = {
          title: data.Section1.title,
          cardData: data.Section1.cardData,
          videoUrl:
            data.Section1.videoUrl,
        };
        setPoultry(sectionData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">Error: {error}</p>;

  return (
    <VideoStatsSection
      mainHeading={poultry.title}
      videoUrl={poultry.videoUrl}
      overlayColor="bg-black bg-opacity-40"
      cardData={poultry.cardData}
    />
  );
};

export default PoultryPage;
