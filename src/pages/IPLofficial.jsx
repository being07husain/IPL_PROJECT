import React from "react";
import IPLchairman from "../assets/OFFICIALpeoplePic/IPLchairman.jpeg";
import CM1 from "../assets/OFFICIALpeoplePic/GCM1.jpeg";
import CM2 from "../assets/OFFICIALpeoplePic/GCM2.jpeg";
import CM3 from "../assets/OFFICIALpeoplePic/GCM3.jpeg";
import PRESIDENTBBCI from "../assets/OFFICIALpeoplePic/BCCIpresident.png";
import BCCIsec from "../assets/OFFICIALpeoplePic/BCCIsec.jpeg";
import BCCIvicepresident from "../assets/OFFICIALpeoplePic/BCCIvicepresident.jpg";
import UMPIRE1 from "../assets/OFFICIALpeoplePic/UMPIRE1.jpeg";
import UMPIRE2 from "../assets/OFFICIALpeoplePic/UMPIRE2.jpeg";
import UMPIRE3 from "../assets/OFFICIALpeoplePic/UMPIRE3.jpg";
import UMPIRE4 from "../assets/OFFICIALpeoplePic/UMPIRE4.jpeg";
import UMPIRE5 from "../assets/OFFICIALpeoplePic/UMPIRE5.jpeg";
import REFREE1 from "../assets/OFFICIALpeoplePic/REFREE.jpeg";
import REFREE2 from "../assets/OFFICIALpeoplePic/REFREE2.jpeg";
import BROADCASTER1 from "../assets/OFFICIALpeoplePic/BROADCASTER1.jpeg";
import BROADCASTER2 from "../assets/OFFICIALpeoplePic/BROADCASTER2.jpeg";
import DRS1 from "../assets/OFFICIALpeoplePic/DRS1.jfif";
import DRS2 from "../assets/OFFICIALpeoplePic/DRS2.jpeg";
import DRS3 from "../assets/OFFICIALpeoplePic/DR3.jpeg";

function IPLofficial() {
  return (
    <section className="ipl-officials">

      {/* ================= IPL GOVERNING COUNCIL ================= */}
      <div className="official-section">
        <h2>IPL Governing Council</h2>
        <p className="section-desc">
          The IPL Governing Council serves as the league’s highest executive
          authority. It governs franchise operations, auction frameworks,
          salary caps, commercial policies, and ensures that the IPL functions
          within BCCI and ICC regulations.
        </p>

        <div className="IPLCHAIRMAN">
          <h4>IPL Chairman</h4>
          <img src={IPLchairman} alt="IPL Chairman Arun Singh Dhumal" className="official-image" />
          <p>
            <b>Arun Singh Dhumal</b> – Currently serving his re-elected term.
            As Chairman, he acts as the primary link between franchises,
            broadcasters, sponsors, and the BCCI, balancing commercial growth
            with sporting integrity.
          </p>
        </div>

        <h4>Governing Council Members</h4>
        <ul className="COUNCIL-MEMBERS">
          <li>
            <img src={CM1} alt="CM1" className="official-image-small" />
            <b>Avishek Dalmiya:</b> Senior administrator and re-elected council
            member involved in long-term policy decisions.
          </li>
          <li>
            <img src={CM2} alt="CM2" className="official-image-small" />
            <b>Vankina Chamundeswara Nath:</b> Player Representative
            (ICA Nominee), ensuring players’ rights and concerns are represented.
          </li>
          <li>
            <img src={CM3} alt="CM3" className="official-image-small" />
            <b>A. Raghuram Bhat:</b> Treasurer of BCCI and ex-official member,
            responsible for financial governance and oversight.
          </li>
          <li>
            <b>CM Sane:</b> CAG (Comptroller & Auditor General) nominee, appointed
            to maintain financial transparency and accountability.
          </li>
        </ul>
      </div>

      {/* ================= BCCI OFFICIALS ================= */}
      <div className="official-section">
        <h2>BCCI Officials (IPL Oversight)</h2>
        <p className="section-desc">
          Although the IPL operates as a standalone league, it is fully governed
          by the Board of Control for Cricket in India (BCCI). BCCI officials
          ensure compliance with national cricket policy, ICC regulations,
          and financial integrity.
        </p>

        <ul className="BCCI-OFFICIALS-LIST">
          <li>
            <img src={PRESIDENTBBCI} alt="BCCI President Mithun Manhas" className="official-image-small" />
            <b>BCCI President – Mithun Manhas:</b> Provides strategic leadership
            and final approval on major league reforms and disciplinary matters.
          </li>
          <li>
            <img src={BCCIsec} alt="BCCI Secretary Devajit Saikia" className="official-image-small" />
            <b>BCCI Secretary – Devajit Saikia:</b> Oversees scheduling,
            administration, and ICC coordination following Jay Shah’s
            transition to ICC Chairman.
          </li>
          <li>
            <img src={BCCIvicepresident} alt="BCCI VICE PRESIDENT" className="official-image-small"/>
            <b>BCCI Vice President – Rajeev Shukla:</b> Veteran administrator
            playing a key diplomatic role in stakeholder and franchise relations.
          </li>
        </ul>
      </div>

      {/* ================= MATCH OFFICIALS ================= */}
      <div className="official-section">
        <h2>Match Officials</h2>
        <p className="section-desc">
          Match officials operate independently of franchises and teams.
          IPL matches are officiated by members of the ICC Elite Panel,
          ensuring neutrality, consistency, and adherence to international
          standards.
        </p>

        <h4>On-Field & TV Umpires</h4>
        <ul className="UMPIRES-LIST">
          <li>
            <img src={UMPIRE1} alt="UMPIRE NITIN MENON" className="official-image-small"/>
            <b>Nitin Menon (India):</b> The highest-ranked Indian umpire on the
            global stage, regularly officiating marquee fixtures.
          </li>
          <li>
            <img src={UMPIRE2} alt="UMPIRE RICHARD ILLINGWORTH" className="official-image-small"/>
            <b>Richard Illingworth (England):</b> Trusted with high-pressure
            playoff and knockout matches.
          </li>
          <li>
            <img src={UMPIRE3} alt="UMPIRE KUMAR DHARMASENA" className="official-image-small"/>
            <b>Alex Wharf & Allahudien Paleker:</b> New Elite Panel additions for
            the 2025–26 cycle.
          </li>
          <li>
            <img src={UMPIRE5} alt="UMPIRE ANIL CHAUDHARY" className="official-image-small"/>
            <img src={UMPIRE4} alt="UMPIRE MARAIS ERASMUS" className="official-image-small"/>
            <b>Third Umpire Specialists:</b> Senior Indian umpire
            <b> Anil Chaudhary</b> <b>JayaRaman Madangopal</b>
          </li>
        </ul>
        </div>
       <div className="official-section">
        <h2>Match Officials</h2>
        <h4>Match Referees</h4>
        <p className="section-desc">
          Match referees function as off-field judges with authority to impose
          fines, issue warnings, recommend suspensions, and submit reports to
          the IPL disciplinary committee.
        </p>
        <ul className="REFREE-list">
          <li>
            <img src={REFREE1} alt="REFREE RAVI SHAStri" className="official-image-small"/>
            <b>Javagal Srinath (India):</b> One of the most experienced match
            referees in IPL history.
          </li>
          <li>
            <img src={REFREE2} alt="REFREE RANJAN MADUGALLE" className="official-image-small"/>
            <b>Ranjan Madugalle (Sri Lanka):</b> Frequently appointed for matches
            requiring international-level oversight.
          </li>
        </ul>
      </div>

      {/* ================= TECHNOLOGY & BROADCAST ================= */}
      <div className="official-section">
        <h2>Technology & Broadcast Operations</h2>
        <p className="section-desc">
          Technology plays a crucial role in maintaining decision accuracy and
          enhancing the fan experience. Advanced broadcast tools and officiating
          systems ensure transparency and world-class production quality.
        </p>

        <h4>Broadcast Partners</h4>
        <ul className="BROADCASTERS-list">
          <li>
            <img src={BROADCASTER1} alt="BROADCASTER VIACOM18" className="official-image-small"/>
            <b>Viacom18 (JioCinema):</b> Digital broadcast partner led by
            <b> Siddharth Sharma</b> (Head – Content, TV & Digital), managing 4K
            feeds, multi-camera views, and interactive fan features.
          </li>
          <li>
            <img src={BROADCASTER2} alt="BROADCASTER DISNEY STAR" className="official-image-small"/>
            <b>Disney Star:</b> Linear television partner delivering regional
            language feeds and traditional broadcast coverage.
          </li>
        </ul>

        <h4>Decision Review System (DRS)</h4>
        <ul className="DRS-LIST">
          <li>
            <img src={DRS1} alt="DRS HAWK EYE" className="official-image-small"/>
            <b>Hawk-Eye Innovations:</b> Provides ball-tracking, pitching impact,
            and edge-detection technology.
          </li>
          <li>
            <img src={DRS2} alt="DRS VS6 SPORTS" className="official-image-small"/>
            <b>VS6 Sports:</b> Indian-developed DRS system supplying real-time
            Ultra-Edge data in domestic and league matches.
          </li>
          <li>
            <img src={DRS3} alt="DRS QUIDICH INNOVATION LABS" className="official-image-small"/>
            <b>Quidich Innovation Labs:</b> Creators of Buggy Cam, Spider-cam
            visuals, and advanced broadcast graphics.
          </li>
        </ul>
      </div>

    </section>
  );
}

export default IPLofficial;