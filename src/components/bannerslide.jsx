import FINAL from "../assets/logos/FINAL.png";
import GLORY from "../assets/logos/GLORY.png";
import BANNER from "../assets/logos/BANNER.png";
import AUCTION from "../assets/logos/AUCTION.png";
import IPL from "../assets/logos/IPL.png";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BannerSlide() {
  const slides = [IPL, BANNER, GLORY, FINAL, AUCTION];
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`slide ${index === current ? "active" : ""}`}
            alt="banner"
          />
        ))}
      </div>

      <div className="banner-cta">
        <button className="btn-primary"><Link to="/teams">Explore Teams</Link></button>
        <button className="btn-secondary">Watch Highlights</button>
      </div>
    </div>
  );
}

export default BannerSlide;
