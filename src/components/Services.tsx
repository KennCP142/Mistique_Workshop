import React from 'react';
import { Settings, Zap, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Engine Remapping",
      description: "Optimize your vehicle's performance with our expert engine remapping service. Enhance power, improve fuel efficiency, and unlock the full potential of your engine with custom ECU tuning tailored to your specific needs.",
      image: "images/IMG_0608.jpg"
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Performance Tuneup",
      description: "Keep your vehicle running at peak performance with our comprehensive tuneup service. From spark plugs to fuel systems, we meticulously inspect and optimize every component to ensure smooth operation, improved mileage, and reliable performance.",
      image: "images/IMG_0686.jpg"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      title: "Custom Car Projects",
      description: "Turn your automotive dreams into reality with our custom car project service. From performance upgrades to complete restorations, our expert team will work with you to create a unique vehicle that stands out from the crowd and delivers exceptional performance.",
      image: "images/IMG_0587.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Services</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            At Mistique Workshop, we offer premium automotive services to enhance your vehicle's performance and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;