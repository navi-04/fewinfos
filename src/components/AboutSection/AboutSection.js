import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-content-center">
          <div className="about-card">
            <div className="card-header">
              <h3>About FewInfos</h3>
            </div>
            <p className="about-desc">
              We are pioneers in delivering transformative technology services, products, and open-source innovations that empower businesses to thrive in the digital age. Our passion for innovation drives everything we do.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="number">2+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="number">30+</span>
                <span className="label">Happy Clients</span>
              </div>
              <div className="highlight-item">
                <span className="number">25+</span>
                <span className="label">Projects Done</span>
              </div>
            </div>
            <button className="learn-more-btn" onClick={() => navigate('/about')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
