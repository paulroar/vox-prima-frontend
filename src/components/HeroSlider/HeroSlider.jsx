import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image: "https://res.cloudinary.com/dszajuzln/image/upload/v1744121832/qewynafteutxdujufiny.jpg", 
    title: "Express yourself with art",
    subtitle: "Wear pieces that tell your story",
  },
  {
    image: "https://res.cloudinary.com/dszajuzln/image/upload/v1744121833/kbi7egexnybaltdzgrmf.jpg",
    title: "Nature in every thread",
    subtitle: "Sustainable style inspired by the earth",
  },
  {
    image: "https://res.cloudinary.com/dszajuzln/image/upload/v1744121833/u33h9fcgzqg8ttfjujj2.jpg",
    title: "Find your inner rhythm",
    subtitle: "Designs inspired by music and emotion",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
              Learn More →
            </button>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
