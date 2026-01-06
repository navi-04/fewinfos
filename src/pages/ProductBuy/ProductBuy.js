import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import emailjs from '@emailjs/browser';
import './ProductBuy.css';

const ProductBuy = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData[parseInt(productId)];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialog, setDialog] = useState({ show: false, type: '', message: '' });

  if (!product) {
    return (
      <div className="product-buy-page">
        <div className="error-container">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/products')}>Back to Products</button>
        </div>
      </div>
    );
  }

  if (product.isFree) {
    return (
      <div className="product-buy-page">
        <div className="error-container">
          <h2>This is a free product</h2>
          <p>You can try this product directly without purchasing.</p>
          <button onClick={() => navigate(`/try-product/${productId}`)}>Try It Now</button>
          <button onClick={() => navigate('/products')} style={{ marginLeft: '10px' }}>Back to Products</button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showDialog = (type, message) => {
    setDialog({ show: true, type, message });
  };

  const closeDialog = () => {
    setDialog({ show: false, type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      product_name: product.title,
      product_price: product.isFree ? 'FREE' : `₹${product.price}`,
      customer_name: formData.fullName,
      customer_email: formData.email,
      customer_phone: formData.phone,
      company_name: formData.company,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      showDialog('success', product.isFree 
        ? 'Thank you! Your download link has been sent to your email.'
        : 'Thank you for your purchase! Payment details and product access information have been sent to your email.');
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showDialog('error', 'Failed to submit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-buy-page">
      <div className="product-buy-container">
        <button className="back-button" onClick={() => navigate('/products')}>
          <i className="fas fa-arrow-left"></i> Back to Products
        </button>

        <div className="product-buy-content">
          <div className="product-info-section">
            <div className="product-image-large">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <div className="product-category-badge">{product.category}</div>
              <h1>{product.title}</h1>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-price-large">
                {product.isFree ? (
                  <span className="price-free">FREE</span>
                ) : (
                  <span className="price-value">₹{product.price}</span>
                )}
              </div>

              <div className="product-features-list">
                <h3>Features:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>{product.isFree ? 'Get Your Download' : 'Complete Your Purchase'}</h2>
            <p className="form-subtitle">
              Fill in your details to proceed
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Processing...
                  </>
                ) : (
                  <>
                    <i className={product.isFree ? "fas fa-download" : "fas fa-shopping-cart"}></i>
                    {product.isFree ? 'Download Now' : 'Buy Now'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {dialog.show && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className={`dialog-box ${dialog.type}`} onClick={(e) => e.stopPropagation()}>
            <div className="dialog-icon">
              {dialog.type === 'success' ? (
                <i className="fas fa-check-circle"></i>
              ) : (
                <i className="fas fa-exclamation-circle"></i>
              )}
            </div>
            <p>{dialog.message}</p>
            <button onClick={closeDialog} className="dialog-close-btn">OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBuy;
