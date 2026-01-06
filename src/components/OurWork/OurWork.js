import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurWork.css';

const OurWork = () => {
  const navigate = useNavigate();

  const workItems = [
    {
      title: 'Product',
      description: 'Discover our innovative products designed to meet your needs',
      buttonText: 'Use Now',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      link: '/products'
    },
    {
      title: 'Service',
      description: 'Professional services tailored to your business requirements',
      buttonText: 'Get Now',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      link: '/services'
    },
    {
      title: 'Event',
      description: 'Join our upcoming events and stay connected with our community',
      buttonText: 'View Now',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      link: '/events'
    } 
  ];

  return (
    <section className="our-work">
      <div className="our-work-container">
        <h2 className="our-work-heading">Our Work</h2>
        
        <div className="work-grid">
          {workItems.map((item, index) => (
            <div key={index} className="work-card">
              <div className="work-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button 
                className="work-button"
                onClick={() => navigate(item.link)}
              >
                {item.buttonText}
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
