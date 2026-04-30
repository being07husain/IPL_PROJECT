import React from "react";
import IPLofficial from "./IPLofficial"

function AboutIPL() {
  return (
    <main className="about-ipl">

      {/* INTRO SECTION */}
      <section className="about-ipl-intro">
        <h1>About the Indian Premier League (IPL)</h1>
        <p>
          The Indian Premier League (IPL) is a professional Twenty20 cricket
          league governed by the Board of Control for Cricket in India (BCCI).
          Beyond teams and players, the league operates through a structured
          governance and officiating system that ensures fairness, integrity,
          and global broadcasting standards.
        </p>
      </section>

      {/* OFFICIALS & GOVERNANCE */}
      <IPLofficial />

    </main>
  );
}

export default AboutIPL;
