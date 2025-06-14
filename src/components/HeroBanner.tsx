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

  // Auto-transition every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Stack */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-20" />
      </div>

      {/* Carousel Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        &#8594;
      </button>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <img
          src="/logo/logo_white_text.png"
          alt="Mistique Workshop"
          className="h-30 mb-6 object-contain"
        />
        <button
          onClick={() => {
            const section = document.getElementById('services');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Our Services
        </button>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-30">
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
