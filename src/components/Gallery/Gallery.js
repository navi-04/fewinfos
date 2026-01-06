import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Separate image arrays for each row
  const row1Images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg', 
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];

  const row2Images = [
    '11.jpg',
    '12.jpg',
    // '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
  ];

  const row3Images = [
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
  ];

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <p>Explore our portfolio of successful projects</p>
      </div>
      
      <div className="gallery-container">
        {/* First Row - Scrolling Left */}
        <div className="gallery-row scroll-left">
          {row1Images.map((img, index) => (
            <div key={`row1-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {row1Images.map((img, index) => (
            <div key={`row1-dup-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        
        {/* Second Row - Scrolling Right */}
        <div className="gallery-row scroll-right">
          {row2Images.map((img, index) => (
            <div key={`row2-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {row2Images.map((img, index) => (
            <div key={`row2-dup-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Third Row - Scrolling Left */}
        <div className="gallery-row scroll-left">
          {row3Images.map((img, index) => (
            <div key={`row3-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {row3Images.map((img, index) => (
            <div key={`row3-dup-${index}`} className="gallery-item">
              <img src={require(`../../assets/images/${img}`)} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
