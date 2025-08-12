import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Testimonial />
      <Banner />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Landing;