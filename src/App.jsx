import React, { Suspense, lazy, useState, useEffect } from 'react';
import './index.css';
import { pictures } from './assets/images/pictires'; // ✅ fix spelling if needed

// Lazy load routes
const AppRoute = lazy(() => import('./AppRoute'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 100 / (2000 / 50);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const sliderImages = [
    { src: pictures.logo, alt: 'BioFactory Logo' },
    { src: pictures.cow, alt: 'Cow' },
    { src: pictures.growth, alt: 'Growth' },
    { src: pictures.fish, alt: 'Fish' },
    { src: pictures.farmer, alt: 'Farmer' },
  ];

  const SplashScreen = () => (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="text-center w-full max-w-lg">
        <div className="relative overflow-hidden h-24 mb-4">
          <div className="flex animate-slide">
            {sliderImages.map((image, idx) => (
              <div key={idx} className="flex-shrink-0 w-full flex items-center justify-center h-24">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-full bg-gray-800 rounded-full h-1 overflow-hidden shadow-lg">
          <div
            className="bg-gradient-to-r from-green-600 via-lime-500 to-amber-500 h-full transition-all duration-100" // ✅ fixed
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return isLoading ? <SplashScreen /> : <Suspense fallback={<SplashScreen />}><AppRoute /></Suspense>;
}

export default App;
