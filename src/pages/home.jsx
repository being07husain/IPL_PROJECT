import React from "react";
import PROMOTIONAPP from "../components/home/promotionApp";
import BannerSlide from "../components/bannerslide";
import SeasonCards from "../components/seasonslider";
import WALLPAPER from "../assets/logos/WALLPAPER.png";

function HOME() {
  return (
    <div className="home-page">

      <BannerSlide />
      {/* ===== EXCITEMENT SECTION ===== */}
      <section className="excitement-section">

        {/* LEFT: text + icons */}
        <div className="excitement-left">
          <p className="excitement-eyebrow">EXCITEMENT. ENERGY. EMOTIONS.</p>
          <h2 className="excitement-headline">
            THAT'S <span className="excitement-highlight">IPL</span>
          </h2>

          <div className="excitement-features">
            <div className="feat-item">
              <span className="feat-icon">🌟</span>
              <span className="feat-label">World Class Talent</span>
            </div>
            <div className="feat-item">
              <span className="feat-icon">⚡</span>
              <span className="feat-label">Unstoppable Action</span>
            </div>
            <div className="feat-item">
              <span className="feat-icon">🔥</span>
              <span className="feat-label">Electric Atmosphere</span>
            </div>
            <div className="feat-item">
              <span className="feat-icon">📣</span>
              <span className="feat-label">Fans That Never Stop</span>
            </div>
          </div>
        </div>

        {/* RIGHT: player poster */}
        <div className="excitement-right">
          <img src={WALLPAPER} alt="IPL Players" className="excitement-poster" />
        </div>

      </section>

      {/* ✅ Season Slider will appear here */}
      <SeasonCards />

      <PROMOTIONAPP />

    </div>
  );
}

export default HOME;