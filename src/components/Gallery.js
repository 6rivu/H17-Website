import React from 'react';
import './Gallery.css'; // For styling the gallery page

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 1" />
        </div>
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 2" />
        </div>
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 3" />
        </div>
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 4" />
        </div>
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 5" />
        </div>
        <div className="gallery-item">
          <img src="/images/placeholder.jpg" alt="Hostel Image 6" />
          {/* <img src='../'></img> */}
        </div>
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default Gallery;
