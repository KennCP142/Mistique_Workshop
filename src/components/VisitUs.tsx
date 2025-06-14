import React from 'react';
import { Instagram, Facebook, MessageCircle, Video } from 'lucide-react';

const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Us</h2>
          <div className="h-1 w-20 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-6">
                <a>
                  <span>mistiqueworkshop@gmail.com</span>
                </a>
                <a></a>
                <a
                  href="https://instagram.com/mistiqueworkshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/6281234888849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://tiktok.com/@mistiqueworkshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <img src="/logo/tiktok-24.png" alt="TikTok" className="h-6 w-6" />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576740235209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  <Facebook size={24} />
                  <span>Facebook</span>
                </a>

              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Saturday:</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.610204416671!2d112.63615!3d-7.9357152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629eecae6d1dd%3A0xe179a15e8bf8ec21!2s%22%20MISTIQUE%22!5e0!3m2!1sen!2sid!4v1749021650741!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mistique Workshop Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;