import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeMethod, setActiveMethod] = useState('form');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      id: 'form',
      icon: 'fa-comment-dots',
      title: 'Message',
      subtitle: 'Send us a message'
    },
    {
      id: 'email',
      icon: 'fa-envelope',
      title: 'Email',
      subtitle: 'contact@fewinfos.com',
      link: 'mailto:contact@fewinfos.com'
    },
    {
      id: 'phone',
      icon: 'fa-phone',
      title: 'Call',
      subtitle: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      id: 'location',
      icon: 'fa-map-marker-alt',
      title: 'Visit',
      subtitle: 'Karur, Tamil Nadu'
    }
  ];

  return (
    <div className="contact-page-new">
      <div className="contact-split">
        {/* Left Side - Visual */}
        <div className="contact-visual">
          <div className="visual-content">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            
            <div className="contact-header">
              <h1>Let's Connect</h1>
              <p>Choose your preferred way to reach us</p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className={`method-card ${activeMethod === method.id ? 'active' : ''}`}
                  onClick={() => setActiveMethod(method.id)}
                >
                  <i className={`fas ${method.icon}`}></i>
                  <div className="method-info">
                    <h3>{method.title}</h3>
                    <p>{method.subtitle}</p>
                  </div>
                  {method.link && <i className="fas fa-arrow-right method-arrow"></i>}
                </div>
              ))}
            </div>

            <div className="social-bar">
              <span>Follow us</span>
              <div className="social-icons">
                <a href="https://github.com/navi-04" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="http://www.linkedin.com/in/navithiyagu" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/naveenraj.thiyagarajan" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form/Content */}
        <div className="contact-content">
          {activeMethod === 'form' && (
            <div className="form-section">
              <div className="section-header">
                <h2>Send a Message</h2>
                <p>We'll get back to you within 24 hours</p>
              </div>
              
              <form className="modern-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Your Name</label>
                  <div className="input-border"></div>
                </div>

                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Your Email</label>
                  <div className="input-border"></div>
                </div>

                <div className="input-wrapper">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows="4"
                  ></textarea>
                  <label>Your Message</label>
                  <div className="input-border"></div>
                </div>

                <button type="submit" className="modern-btn">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          )}

          {activeMethod === 'email' && (
            <div className="info-section">
              <div className="info-visual">
                <i className="fas fa-envelope"></i>
              </div>
              <h2>Email Us</h2>
              <p>Drop us an email anytime, we'll respond as soon as possible.</p>
              <a href="mailto:contact@fewinfos.com" className="modern-btn">
                <span>contact@fewinfos.com</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          )}

          {activeMethod === 'phone' && (
            <div className="info-section">
              <div className="info-visual">
                <i className="fas fa-phone"></i>
              </div>
              <h2>Call Us</h2>
              <p>Available Monday to Saturday, 9 AM to 6 PM IST.</p>
              <a href="tel:+919876543210" className="modern-btn">
                <span>+91 98765 43210</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          )}

          {activeMethod === 'location' && (
            <div className="info-section">
              <div className="info-visual">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h2>Visit Us</h2>
              <p>Find us at our office location in Tamil Nadu.</p>
              <div className="location-details">
                <div className="location-item">
                  <i className="fas fa-building"></i>
                  <span>FewInfos</span>
                </div>
                <div className="location-item">
                  <i className="fas fa-map"></i>
                  <span>Karur, Tamil Nadu</span>
                </div>
                <div className="location-item">
                  <i className="fas fa-flag"></i>
                  <span>India</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
