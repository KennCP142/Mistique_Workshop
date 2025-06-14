import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Centered About Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="/images/IMG_0004.jpg"
                className="rounded-lg shadow-2xl w-full"
                alt="Workshop"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="p-4">
              <img src="/logo/logo_white_text.png" alt="Mistique Logo" className="h-30" />
            </div>
            <p className="text-gray-300 mb-6">
              Mistique Workshop adalah bengkel otomotif yang berfokus pada layanan tune-up dan remap serta car project, 
              dan lainnya. Kami menangani berbagai jenis project mulai dari restorasi hingga modifikasi penuh, dengan pendekatan detail
              dan personal sesuai karakter mobil.
            </p>
            <p className="text-gray-300 mb-6">
              Untuk mobil harian maupun performa, layanan tune-up dan remap kami dirancang untuk mengoptimalkan mesin 
              agar lebih responsif, efisien, dan tahan lama — dengan solusi yang terus 
              berkembang dan terbuka untuk dikonsultasikan kapan saja.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                'Guarantee',
                'Engine Remap',
                'Engine Tune up',
                'Full Modification',
                'Full Restoration',
                'Minor Electrical Issue',
                'Major Electrical Remap',
                'Oil Change'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;