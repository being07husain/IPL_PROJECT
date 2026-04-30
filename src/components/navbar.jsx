import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeAll = () => { setIsOpen(false); setMoreOpen(false); };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-logo">
        <img
          src="https://documents.iplt20.com/ipl/assets/images/ipl-logo-new-old.png"
          className="IPL-LOGO"
          alt="IPL Official Logo"
        />
      </div>

      {/* HAMBURGER TOGGLE */}
      <button className={`nav-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      {/* NAV LINKS */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><NavLink to="/" end onClick={closeAll}>HOME</NavLink></li>
        <li><NavLink to="/matches" onClick={closeAll}>MATCHES</NavLink></li>
        <li><NavLink to="/teams" onClick={closeAll}>TEAMS</NavLink></li>
        <li><NavLink to="/points-table" onClick={closeAll}>POINTS TABLE</NavLink></li>
        <li><NavLink to="/stats" onClick={closeAll}>STATS</NavLink></li>

        {/* MORE DROPDOWN */}
        <li
          className={`nav-dropdown-wrapper ${moreOpen ? "open" : ""}`}
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button className="nav-more-btn">
            MORE <span className="dropdown-arrow">▾</span>
          </button>
          <ul className="nav-dropdown">
            <li>
              <NavLink to="/videos" onClick={closeAll}>
                🎬 Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/auction" onClick={closeAll}>
                🏷️ Auction
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-ipl" onClick={closeAll}>
                ℹ️ About IPL
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>

      {/* CTA TICKETS */}
      <div className="nav-cta">
        <button className="btn-tickets">🎟 Tickets</button>
      </div>

    </nav>
  );
}

export default Navbar;
