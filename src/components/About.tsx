import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img 
                src="/images/IMG_0598.jpg" 
                className="rounded-lg shadow-2xl w-full"
              />
            
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Mistique Workshop</h2>
            <div className="h-1 w-20 bg-red-500 mb-6"></div>
            <p className="text-gray-300 mb-6">
              Mistique Workshop adalah bengkel otomotif yang berfokus pada layanan tune-up dan remap serta  project mobil JDM. Kami menangani berbagai jenis project mulai dari restorasi hingga modifikasi penuh, dengan pendekatan detail dan personal sesuai karakter mobil.
            </p>
            <p className="text-gray-300 mb-6">
              Untuk mobil harian maupun performa, layanan tune-up dan remap kami dirancang untuk mengoptimalkan mesin agar lebih responsif, efisien, dan tahan lama — dengan solusi yang terus berkembang dan terbuka untuk dikonsultasikan kapan saja.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-300">Warranty Service</span>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;