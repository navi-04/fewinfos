import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    if (price >= 1000) {
      const kValue = price / 1000;
      // If it's a whole number in k format, don't show decimals
      if (kValue % 1 === 0) {
        return `${kValue}k`;
      }
      // Otherwise show one decimal place
      return `${kValue.toFixed(1)}k`;
    }
    return price.toString();
  };

  const scrollToService = (index) => {
    const element = document.getElementById(`service-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleShare = async (service, index) => {
    const shareData = {
      title: service.title,
      text: `Check out ${service.title} - ${service.description}. Starting from ₹${formatPrice(service.price)}`,
      url: `https://fewinfos.com/service-buy/${index}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Professional solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          {/* Mobile Service Navigation */}
          <div className="mobile-service-nav">
            <div className="service-nav-wrapper">
              {servicesData.map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToService(index)}
                  className="service-nav-item"
                >
                  <i className={service.icon}></i>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
            <div className="scroll-indicator">
              <i className="fas fa-arrow-right"></i>
              <span>Swipe to see more</span>
            </div>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} id={`service-${index}`} className="service-card">
                <div className="service-icon-wrapper">
                  <i className={service.icon}></i>
                </div>
                
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">
                    ₹{formatPrice(service.price)}
                  </span>
                </div>

                <div className="service-technologies">
                  <h4>Includes:</h4>
                  <ul>
                    {service.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>
                        <i className="fas fa-check"></i>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-actions">
                  <button 
                    className="service-btn"
                    onClick={() => navigate(`/service-buy/${index}`)}
                  >
                    Get Started
                  </button>
                  <button 
                    className="share-btn"
                    onClick={() => handleShare(service, index)}
                    title="Share this service"
                  >
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
