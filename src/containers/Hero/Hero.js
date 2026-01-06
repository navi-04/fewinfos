// import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  // const [showScroll, setShowScroll] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowScroll(false);
  //     } else {
  //       setShowScroll(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="hero-content">
        <span className="hero-tag">Welcome to the Future</span>
        <h1 className="hero-heading">
          Transform Your Business with
          <span className="highlight"> FewInfos</span>
        </h1>
        <p className="hero-text">
          Building services, products, and open-source technologies that power innovation, growth, and global success.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
        
        <div className="hero-actions">
          <button className="cta-button primary" onClick={() => navigate('/services')}>Start Now</button>
          <button className="cta-button secondary" onClick={() => navigate('/about')}>
            Learn More
          </button>
        </div>
        
        {/* {showScroll && (
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Hero;
