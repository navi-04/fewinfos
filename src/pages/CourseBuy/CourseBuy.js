import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import emailjs from '@emailjs/browser';
import './CourseBuy.css';

const CourseBuy = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData[parseInt(courseId)];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    transactionId: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialog, setDialog] = useState({ show: false, type: '', message: '' });

  if (!course) {
    return (
      <div className="course-buy-page">
        <div className="error-container">
          <h2>Course not found</h2>
          <button onClick={() => navigate('/products', { state: { activeTab: 'courses' } })}>Back to Courses</button>
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
      course_name: course.title,
      course_price: course.price,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experience_level: formData.experience || 'Not specified',
      goals: formData.message || 'Not specified',
      transaction_id: formData.transactionId,
    };

    // Debug logs
    console.log('EmailJS Configuration:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_COURSE_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not Set',
    });
    console.log('Template Params:', templateParams);

    // Check if environment variables are set
    const missingVars = [];
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID) missingVars.push('REACT_APP_EMAILJS_SERVICE_ID');
    if (!process.env.REACT_APP_COURSE_EMAILJS_TEMPLATE_ID) missingVars.push('REACT_APP_COURSE_EMAILJS_TEMPLATE_ID');
    if (!process.env.REACT_APP_EMAILJS_PUBLIC_KEY) missingVars.push('REACT_APP_EMAILJS_PUBLIC_KEY');
    
    if (missingVars.length > 0) {
      console.error('Missing EmailJS environment variables:', missingVars);
      showDialog('error', `Email configuration is incomplete. Missing: ${missingVars.join(', ')}. Please restart your development server.`);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_COURSE_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);
      showDialog('success', 'Registration successful! Our team will contact you shortly with course access details and payment confirmation.');
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        message: '',
        transactionId: '',
      });
    } catch (error) {
      console.error('EmailJS Error Details:', {
        error: error,
        message: error?.message,
        text: error?.text,
        status: error?.status,
      });
      
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      showDialog('error', `Failed to submit registration: ${errorMessage}. Please ensure all fields are filled correctly or contact us directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="course-buy-page">
      <div className="course-buy-container">
        <button className="back-button" onClick={() => navigate('/products', { state: { activeTab: 'courses' } })}>
          <i className="fas fa-arrow-left"></i> Back to Courses
        </button>

        <div className="course-buy-content">
          <div className="course-info-section">
            <div className="course-image-large">
              <img src={course.image} alt={course.title} />
              {course.isFeatured && (
                <div className="featured-badge-large">
                  <i className="fas fa-star"></i> Featured Course
                </div>
              )}
            </div>
            
            <div className="course-details">
              <div className="course-category-badge">{course.category}</div>
              <h1>{course.title}</h1>
              <p className="course-desc">{course.description}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <i className="fas fa-signal"></i>
                  <span>{course.level}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-star"></i>
                  <span>{course.rating} Rating</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-users"></i>
                  <span>{course.students} Students</span>
                </div>
              </div>

              <div className="course-price-section">
                <div className="pricing">
                  {course.discount > 0 && (
                    <>
                      <span className="original-price-large">₹{course.originalPrice}</span>
                      <span className="discount-badge-large">{course.discount}% OFF</span>
                    </>
                  )}
                  <div className="current-price-large">₹{course.price}</div>
                </div>
              </div>

              <div className="course-features-list">
                <h3>What you'll learn:</h3>
                <ul>
                  {course.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {course.detailedDescription && (
                <div className="course-detailed-description">
                  <h3>
                    <i className="fas fa-info-circle"></i>
                    Course Details
                  </h3>
                  <div className="description-content">
                    {typeof course.detailedDescription === 'string' ? (
                      <p>{course.detailedDescription}</p>
                    ) : (
                      course.detailedDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="registration-form-section">
            <h2>Register for this Course</h2>
            <p className="form-subtitle">
              Fill in your details to enroll in this course
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
                <label htmlFor="experience">Your Experience Level</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to take this course?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your goals and expectations..."
                />
              </div>

              {/* Payment Section */}
              <div className="payment-section">
                <h3>
                  <i className="fas fa-credit-card"></i>
                  Payment Information
                </h3>
                <p className="payment-instruction">
                  Please scan the QR code below to make the payment and upload your transaction details.
                </p>

                <div className="qr-code-container">
                  <div className="qr-code-box">
                    {course.paymentQR ? (
                      <img src={course.paymentQR} alt="Payment QR Code" className="qr-code-image" />
                    ) : (
                      <div className="qr-placeholder">
                        <i className="fas fa-qrcode"></i>
                        <p>QR Code will be displayed here</p>
                      </div>
                    )}
                  </div>
                  <div className="qr-code-info">
                    <h4>Scan to Pay</h4>
                    <p>Course Fee: <strong>₹{course.price}</strong></p>
                    <div className="payment-note">
                      <i className="fas fa-info-circle"></i>
                      <span>After payment, please fill in the transaction details below</span>
                    </div>
                  </div>
                </div>

                <div className="transaction-fields">
                  <div className="form-group">
                    <label htmlFor="transactionId">
                      <i className="fas fa-hashtag"></i>
                      Transaction ID *
                    </label>
                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      placeholder="Enter your transaction ID"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Processing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus"></i>
                    Register Now
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

export default CourseBuy;
