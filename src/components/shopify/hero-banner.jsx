import React from 'react';
import '../../assets/custom.css'; // Corrected path for the CSS file
import heroImage from '../../assets/images/shopify/hero-banner.jpg'; // Path to the image

const Hero_banner = () => {
  return (
    <div className="bugs-hero-banner">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Banner"
      />
      
      {/* Text Overlay */}
      <div className="bugs-text-overlay">
        <h1>Welcome to Our Shop</h1>
        <p>Discover amazing products at unbeatable prices!</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero_banner;
