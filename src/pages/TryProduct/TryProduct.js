import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import './TryProduct.css';

const TryProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData[parseInt(productId)];
  const contentRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle share functionality
  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: `Try ${product.title} - ${product.description}. FREE to use!`,
      url: `https://fewinfos.com/try-product/${productId}`
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

  // Execute scripts when HTML is loaded
  useEffect(() => {
    if (product?.instructionsHtml && contentRef.current) {
      const timeoutId = setTimeout(() => {
        const container = contentRef.current;
        if (!container) return;
        
        // Extract and execute scripts from HTML string
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = product.instructionsHtml;
        const scripts = tempDiv.querySelectorAll('script');
        
        scripts.forEach((oldScript) => {
          const newScript = document.createElement('script');
          
          // Copy all attributes
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });
          
          // Copy script content or src
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          
          // Append script to container to execute it
          container.appendChild(newScript);
        });
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="try-product-page">
        <div className="try-product-error">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/products')}>Back to Products</button>
        </div>
      </div>
    );
  }

  if (!product.isFree) {
    return (
      <div className="try-product-page">
        <div className="try-product-error">
          <h2>This product is not available for trial</h2>
          <p>This is a paid product. Please visit the buy page to purchase.</p>
          <button onClick={() => navigate(`/product-buy/${productId}`)}>View Product</button>
          <button onClick={() => navigate('/products')} style={{ marginLeft: '10px' }}>Back to Products</button>
        </div>
      </div>
    );
  }

  return (
    <div className="try-product-page">
      <div className="try-product-container">
        <button className="back-button" onClick={() => navigate('/products')}>
          <i className="fas fa-arrow-left"></i> Back to Products
        </button>

        <div className="try-product-header">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="try-product-actions">
            {product.contributeLink && (
              <a 
                href={product.contributeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
            )}
            {product.manualLink && (
              <a 
                href={product.manualLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <i className="fab fa-github"></i> View Manual
              </a>
            )}
            <button className="share-button" onClick={handleShare}>
              <i className="fas fa-share-alt"></i> Share
            </button>
          </div>
        </div>

        <div 
          ref={contentRef}
          className="try-product-content"
          dangerouslySetInnerHTML={{ __html: product.instructionsHtml }}
        />
      </div>
    </div>
  );
};

export default TryProduct;
