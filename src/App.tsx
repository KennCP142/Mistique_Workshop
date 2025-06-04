import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';
import VisitUs from './components/VisitUs';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroBanner />
      <Services />
      <About />
      <Testimonials />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default App;