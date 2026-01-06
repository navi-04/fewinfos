import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import { coursesData } from '../../data/coursesData';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'products');

  const handleUseProduct = (index) => {
    navigate(`/try-product/${index}`);
  };

  const handleShareProduct = async (product, index) => {
    const productUrl = product.isFree 
      ? `https://fewinfos.com/#/try-product/${index}`
      : `https://fewinfos.com/#/product-buy/${index}`;
    
    const shareData = {
      title: product.title,
      text: `Check out ${product.title} - ${product.description}. ${product.isFree ? 'FREE to use!' : `₹${product.price}`}`,
      url: productUrl
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

  const handleShareCourse = async (course, index) => {
    const shareData = {
      title: course.title,
      text: `Check out ${course.title} - ${course.description}. Only ₹${course.price}! ${course.discount > 0 ? `${course.discount}% OFF` : ''}`,
      url: `https://fewinfos.com/#/course-buy/${index}`
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
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>Products & Courses</h1>
          <p>Explore our premium products and educational courses</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="products-container">
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <i className="fas fa-box"></i>
            Products
          </button>
          <button
            className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <i className="fas fa-graduation-cap"></i>
            Courses
          </button>
        </div>

        {/* Products Section */}
        {activeTab === 'products' && (
          <section className="products-section">
            <h2 className="section-title">Our Products</h2>
            <div className="products-grid">
              {productsData.map((product, index) => (
                <div key={index} id={`product-${index}`} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    {product.isFree && (
                      <div className="free-tag">
                        <i className="fas fa-gift"></i> FREE
                      </div>
                    )}
                  </div>
                  
                  <div className="product-content">
                    <div className="product-badge">{product.category}</div>
                    <h3>{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-features">
                      <h4>Features:</h4>
                      <ul>
                        {product.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-footer">
                      {product.isFree ? (
                        <>
                          <div className="product-footer-actions full-width">
                            {product.manualLink && (
                              <button 
                                className="product-btn manual-btn"
                                onClick={() => window.open(product.manualLink, '_blank')}
                              >
                                <i className="fas fa-book"></i>
                                Manual
                              </button>
                            )}
                            {product.contributeLink && (
                              <button 
                                className="product-btn contribute-btn"
                                onClick={() => window.open(product.contributeLink, '_blank')}
                              >
                                <i className="fas fa-code-branch"></i>
                                GitHub
                              </button>
                            )}
                            <button 
                              className="product-btn free-btn"
                              onClick={() => handleUseProduct(index)}
                            >
                              <i className="fas fa-hand-pointer"></i>
                              Use it
                            </button>
                            <button 
                              className="share-btn"
                              onClick={() => handleShareProduct(product, index)}
                              title="Share this product"
                            >
                              <i className="fas fa-share-alt"></i>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="product-price">₹{product.price}</div>
                          <div className="product-footer-actions">
                            <button 
                              className="product-btn buy-btn"
                              onClick={() => navigate(`/product-buy/${index}`)}
                            >
                              <i className="fas fa-shopping-cart"></i>
                              Buy Now
                            </button>
                            <button 
                              className="share-btn"
                              onClick={() => handleShareProduct(product, index)}
                              title="Share this product"
                            >
                              <i className="fas fa-share-alt"></i>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Courses Section */}
        {activeTab === 'courses' && (
          <section className="courses-section">
            <h2 className="section-title">Our Courses</h2>
            <div className="courses-grid">
              {coursesData.map((course, index) => (
                <div key={index} id={`course-${index}`} className={`course-card ${course.isFeatured ? 'featured' : ''}`}>
                  {course.isFeatured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </div>
                  )}
                  
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-overlay">
                      <span className="course-level">{course.level}</span>
                      <span className="course-duration">
                        <i className="fas fa-clock"></i> {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="course-content">
                    <div className="course-category">{course.category}</div>
                    <h3>{course.title}</h3>
                    <p className="course-description">{course.description}</p>

                    <div className="course-stats">
                      <div className="stat">
                        <i className="fas fa-star"></i>
                        <span>{course.rating}</span>
                      </div>
                      <div className="stat">
                        <i className="fas fa-users"></i>
                        <span>{course.students} students</span>
                      </div>
                    </div>

                    <div className="course-features">
                      {course.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="course-footer">
                      <div className="course-pricing">
                        {course.discount > 0 && (
                          <span className="original-price">₹{course.originalPrice}</span>
                        )}
                        <span className="current-price">₹{course.price}</span>
                        {course.discount > 0 && (
                          <span className="discount-badge">{course.discount}% OFF</span>
                        )}
                      </div>
                      <div className="course-footer-actions">
                        <button 
                          className="course-btn"
                          onClick={() => navigate(`/course-buy/${index}`)}
                        >
                          <i className="fas fa-user-plus"></i>
                          Register Now
                        </button>
                        <button 
                          className="share-btn"
                          onClick={() => handleShareCourse(course, index)}
                          title="Share this course"
                        >
                          <i className="fas fa-share-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

    </div>
  );
};

export default Products;
