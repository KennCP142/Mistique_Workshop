import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="bg-transparent hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent rounded px-4 py-2 transition-colors duration-300 text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;