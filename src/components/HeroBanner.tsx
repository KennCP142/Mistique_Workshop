import React, { useState, useEffect } from 'react';

const images = [
  '/images/IMG_0616.jpg',
  '/images/IMG_0613.jpg',
  '/images/IMG_0606.jpg',
  '/images/IMG_0002.jpg',
  '/images/IMG_0003.jpg'
];

const HeroBanner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 🔁 Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url("${images[currentImage]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.7s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Left / Right Carousel Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        &#8594;
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          <img
            src="/logo/logo_white_text.png"
            alt="Mistique Workshop"
            className="h-25 mx-auto object-contain"
          />
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-10">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
