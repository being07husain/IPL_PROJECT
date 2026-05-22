import React from "react";
import APP from "../../assets/logos/APP.png";

function PROMOTIONAPP() {
  return (
    <div className="promotion-app-page">
      {/* Official IPL App Promotion */}
      <section className="ipl-app-section">
        
        {/* Badge / Hook */}
        <span className="ipl-badge">🏏 OFFICIAL • TRUSTED • LIVE</span>

        {/* Main Headline */}
        <h2>
          Experience IPL <span className="highlight">Like Never Before</span>
        </h2>

        {/* Subheading */}
        <p className="subtitle">
          One app. Every match. Every moment. Every stat.
        </p>

        {/* Core Value Proposition */}
        <p>
          The <strong>Official IPL App</strong> brings you closer to the action
          with <strong>live scores</strong>, <strong>ball-by-ball commentary</strong>,
          <strong>match highlights</strong>, <strong>exclusive videos</strong>,
          <strong>player & team stats</strong>, and <strong>breaking IPL news</strong>
          — all in one powerful experience.
        </p>

        {/* Feature Highlights */}
        <div className="ipl-features">
          <span>🔥 Live Match Centre</span>
          <span>📊 Real-time Stats</span>
          <span>🎥 Exclusive Highlights</span>
          <span>📰 Instant News Alerts</span>
        </div>

        {/* Availability */}
        <p className="availability">
          Download now on <strong>Google Play Store</strong> &
          <strong> Apple App Store</strong>
        </p>

        {/* Call to Action */}
        <div className="store-buttons-container">
          <button className="btn-google-play">Get it on Google Play</button>
          <button className="btn-app-store">Download on App Store</button>
        </div>

        {/* Urgency Line */}
        <p className="cta-note">
          Don't just watch the game. <strong>Live it.</strong>
        </p>

      </section>
    </div>
  );
}

export default PROMOTIONAPP;
