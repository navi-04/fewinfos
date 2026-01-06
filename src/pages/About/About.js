import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './About.css';


const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About FewInfos</h1>
          <p>Empowering businesses through innovative technology solutions</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize the technology landscape, FewInfos has grown from a small startup into a trusted partner for businesses worldwide. Our journey is defined by continuous innovation, an unwavering commitment to quality, and a deep understanding of our clients’ evolving needs.
            </p>
            <p>
              We believe in the power of technology to transform businesses and create lasting impact. Every service we deliver, product we build, and open-source contribution we make is guided by this belief ensuring our solutions not only meet expectations but consistently exceed them.
            </p>
          </div>
          <div className="story-image">
            <img src={require('../../assets/hero.png')} alt="FewInfos Company" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, delivering quality solutions that drive real results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We embrace innovation and continuously explore new technologies to stay ahead of the curve.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical business practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Customer Focus</h3>
              <p>Our clients' success is our success. We prioritize their needs and goals above all else.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-journey">
        <div className="journey-container">
          <h2>Our Journey</h2>
          <p className="journey-intro">
            From humble beginnings to industry leaders - here's how we've grown
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2023</div>
                <h4>The Beginning</h4>
                <p>Not even know what is start up and how to make one but decided to build one</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h4>Failed attempts</h4>
                <p>Tried hard to build a team to build something and failed over 100 times and 500+ meets wasted</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2025</div>
                <h4>First initiative</h4>
                <p>successfully launched the website and got our first client</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2026</div>
                <h4>Scaling up</h4>
                <p>Now we are building more open source projects and products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-container">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how we can help transform your business</p>
          <button onClick={() => navigate('/services')} className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default About;
