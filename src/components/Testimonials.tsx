import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John doe",
      role: "BMW M3 Owner",
      quote: "The engine remap completely transformed my M3. More power, better throttle response, and somehow better fuel economy too. The team at Mistique Workshop really knows their stuff!",
      avatar: "https://www.pngkey.com/png/detail/73-730434_04-dummy-avatar.png"
    },
    {
      name: "Jane Doe",
      role: "Audi S5 Owner",
      quote: "I brought my S5 in for a tuneup and the difference is night and day. The car runs smoother, throttle response is crisper, and the team was professional from start to finish.",
      avatar: "https://www.pngkey.com/png/detail/73-730434_04-dummy-avatar.png"
    },
    {
      name: "Jono Doe",
      role: "Custom Project Client",
      quote: "My custom project with Mistique Workshop exceeded all expectations. They took my vision and made it a reality, with attention to detail that's truly impressive. Worth every penny!",
      avatar: "https://www.pngkey.com/png/detail/73-730434_04-dummy-avatar.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;