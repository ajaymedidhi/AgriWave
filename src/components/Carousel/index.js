import React, { useState, useEffect } from 'react';
import './index.css';

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
        <button className="carousel-arrow prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="carousel-arrow next" onClick={goToNextSlide}>
          &gt;
        </button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
