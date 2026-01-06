import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import emailjs from '@emailjs/browser';
import './ServiceBuy.css';

const ServiceBuy = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[parseInt(serviceId)];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format price to k format
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

  // Form state
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [customPrice, setCustomPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ type: '', title: '', message: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    companyWebsite: '',
    businessType: '',
    industry: '',
    targetMarket: '',
    businessDescription: ''
  });

  // Get current price based on selected plan
  const getCurrentPrice = () => {
    if (selectedPlan === 'Custom') {
      return customPrice || 0;
    }
    const plan = service.plans.find(p => p.name === selectedPlan);
    return plan ? plan.price : service.price;
  };

  // Handle plan selection
  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
    if (planName !== 'Custom') {
      setCustomPrice('');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Show dialog
  const showDialogMessage = (type, title, message) => {
    setDialogContent({ type, title, message });
    setShowDialog(true);
  };

  // Close dialog
  const closeDialog = () => {
    setShowDialog(false);
  };

  // Handle form submission
  const handleSendRequest = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country || 
        !formData.businessType || !formData.industry || !formData.targetMarket) {
      showDialogMessage('error', 'Missing Information', 'Please fill in all required fields.');
      return;
    }

    // Validate custom price if custom plan is selected
    if (selectedPlan === 'Custom' && (!customPrice || parseFloat(customPrice) <= 0)) {
      showDialogMessage('error', 'Invalid Price', 'Please enter a valid custom price.');
      return;
    }

    setIsSubmitting(true);

    // Prepare email template parameters
    const templateParams = {
      to_name: 'FewInfos Team', // Your company name
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      country: formData.country,
      company_name: formData.companyName || 'N/A',
      company_website: formData.companyWebsite || 'N/A',
      service_name: service.title,
      plan_name: selectedPlan,
      plan_price: `₹${formatPrice(getCurrentPrice())}`,
      business_type: formData.businessType,
      industry: formData.industry,
      target_market: formData.targetMarket,
      business_description: formData.businessDescription || 'N/A',
      message: `
Service Request Details:
------------------------
Service: ${service.title}
Selected Plan: ${selectedPlan}
Price: ₹${formatPrice(getCurrentPrice())}

Customer Information:
--------------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Company: ${formData.companyName || 'N/A'}
Website: ${formData.companyWebsite || 'N/A'}

Business Details:
-----------------
Business Type: ${formData.businessType}
Industry: ${formData.industry}
Target Market: ${formData.targetMarket}
Description: ${formData.businessDescription || 'N/A'}
      `
    };

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Validate that environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      
      const successMessage = `Your contact request has been sent successfully!\n\nService: ${service.title}\nPlan: ${selectedPlan}\nPrice: ₹${formatPrice(getCurrentPrice())}\n\nWe will get back to you soon via email or phone.`;
      showDialogMessage('success', 'Request Sent Successfully!', successMessage);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        companyName: '',
        companyWebsite: '',
        businessType: '',
        industry: '',
        targetMarket: '',
        businessDescription: ''
      });
      setSelectedPlan('Basic');
      setCustomPrice('');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      showDialogMessage('error', 'Failed to Send Request', 'Failed to send contact request. Please try again or contact us directly at support@fewinfos.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!service) {
    return (
      <div className="service-buy-error">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/services')}>Back to Services</button>
      </div>
    );
  }

  return (
    <div className="service-buy-page">
      <div className="service-buy-container">
        <button className="back-button" onClick={() => navigate('/services')}>
          <i className="fas fa-arrow-left"></i> Back to Services
        </button>

        {/* Service Summary Section */}
        <section className="service-summary">
          <div className="summary-header">
            <i className={service.icon}></i>
            <h1>Service Summary</h1>
          </div>
          <div className="summary-content">
            <div className="summary-item">
              <span className="summary-label">Service Name:</span>
              <span className="summary-value">{service.title}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Starting Price:</span>
              <span className="summary-value">₹{formatPrice(service.price)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Tech Stack:</span>
              <span className="summary-value">{service.technologies.join(', ')}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Delivery Type:</span>
              <span className="summary-value">{service.deliveryType}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Estimated Timeline:</span>
              <span className="summary-value">{service.estimatedTimeline}</span>
            </div>
          </div>
        </section>

        {/* Plan Selection Section */}
        <section className="form-section">
          <h2>Select Your Plan</h2>
          <p className="section-description">Choose a plan that fits your needs</p>
          
          <div className="plans-grid">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className={`plan-card ${selectedPlan === plan.name ? 'selected' : ''}`}
                onClick={() => handlePlanSelect(plan.name)}
              >
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">₹</span>
                    <span className="amount">{formatPrice(plan.price)}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                {selectedPlan === plan.name && (
                  <div className="plan-selected-badge">
                    <i className="fas fa-check"></i> Selected
                  </div>
                )}
              </div>
            ))}
            
            {/* Custom Plan */}
            <div
              className={`plan-card custom-plan ${selectedPlan === 'Custom' ? 'selected' : ''}`}
              onClick={() => handlePlanSelect('Custom')}
            >
              <div className="plan-header">
                <h3>Custom</h3>
                <div className="plan-price">
                  <i className="fas fa-cog"></i>
                </div>
              </div>
              <ul className="plan-features">
                <li>
                  <i className="fas fa-check-circle"></i>
                  Custom Requirements
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Flexible Pricing
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Tailored Solution
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Dedicated Support
                </li>
              </ul>
              {selectedPlan === 'Custom' && (
                <div className="custom-price-input">
                  <label htmlFor="customPrice">Enter Your Budget ($)</label>
                  <input
                    type="number"
                    id="customPrice"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    placeholder="Enter amount"
                    min="0"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              {selectedPlan === 'Custom' && (
                <div className="plan-selected-badge">
                  <i className="fas fa-check"></i> Selected
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Customer Information Form */}
        <form onSubmit={handleSendRequest}>
          {/* Basic Information Section */}
          <section className="form-section">
            <h2>Customer Basic Information</h2>
            <p className="section-description">Please provide your contact details</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone / WhatsApp Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">
                  Country / Time Zone <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g., United States (EST)"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName">Company Name (Optional)</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyWebsite">Company Website (Optional)</label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://www.example.com"
                />
              </div>
            </div>
          </section>

          {/* Business Details Section */}
          <section className="form-section">
            <h2>Business & Store Details</h2>
            <p className="section-description">Tell us about your business requirements</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="businessType">
                  Business Type <span className="required">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select business type</option>
                  <option value="physical">Physical Products</option>
                  <option value="digital">Digital Products</option>
                  <option value="services">Services</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="industry">
                  Industry / Niche <span className="required">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select industry</option>
                  <option value="fashion">Fashion</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Food & Beverage</option>
                  <option value="education">Education</option>
                  <option value="health">Health & Wellness</option>
                  <option value="beauty">Beauty & Cosmetics</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Fitness</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="targetMarket">
                  Target Market <span className="required">*</span>
                </label>
                <select
                  id="targetMarket"
                  name="targetMarket"
                  value={formData.targetMarket}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select target market</option>
                  <option value="local">Local</option>
                  <option value="national">National</option>
                  <option value="global">Global</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="businessDescription">
                  Brief Description of Business (Optional)
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  placeholder="Tell us more about your business and what you're looking to achieve..."
                  rows="4"
                ></textarea>
              </div>
            </div>
          </section>

          {/* CTA Buttons */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-submit btn-contact"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Contact Request
                  {selectedPlan && (
                    <span className="btn-price-tag">
                      ₹{formatPrice(getCurrentPrice())}
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Custom Dialog Modal */}
      {showDialog && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <div className={`dialog-header ${dialogContent.type}`}>
              <div className="dialog-icon">
                {dialogContent.type === 'success' && <i className="fas fa-check-circle"></i>}
                {dialogContent.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
                {dialogContent.type === 'info' && <i className="fas fa-info-circle"></i>}
              </div>
              <h3>{dialogContent.title}</h3>
            </div>
            <div className="dialog-body">
              <p>{dialogContent.message}</p>
            </div>
            <div className="dialog-footer">
              <button className="dialog-btn" onClick={closeDialog}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBuy;
