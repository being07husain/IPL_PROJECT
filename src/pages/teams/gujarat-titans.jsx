import React, { useEffect, useState } from "react";
import Trophy from "../../assets/logos/ipl-trophy.png";

import {
  getGTTeamProfile,
  getGTBatters,
  getGTBowlers,
  getGTAllRounders
} from "../../services/teamServices/gtdataService";

const GujaratTitans = () => {
  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getGTTeamProfile());
    setBatters(getGTBatters());
    setBowlers(getGTBowlers());
    setAllRounders(getGTAllRounders());
  }, []);

  return (
    <>
      <section className="gtteam-details">
        {/* ===== TEAM HEADER SECTION ===== */}
        <header className="gtteam-header-container">
          {/* LEFT: Logo & Name Area */}
          <div className="gtteam-identity">
            <img
              src="https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png"
              alt="GT Logo"
              className="gtmain-logo"
            />

            <div className="gtteam-title-block">
              <h1 className="gtteam-name-text">{profile.name}</h1>

              <div className="gttrophy-badge">
                <img src={Trophy} alt="Trophy" className="gttrophy-img" />
                <span className="gttrophy-years">{profile.trophies}</span>
              </div>

              <button className="gtofficial-site-btn">
                <a
                  href="https://www.instagram.com/gujarat_titans/"
                  target="blank"
                >
                  Official Team Instagram
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT: Data Table Area */}
          <div className="gtstats-box">
            <table className="gtprofile-table">
              <tbody>
                <tr>
                  <td className="gtlabel">Captain</td>
                  <td className="gtsep">-</td>
                  <td className="gtval">{profile.captain}</td>
                </tr>

                <tr>
                  <td className="gtlabel">Coach</td>
                  <td className="gtsep">-</td>
                  <td className="gtval">{profile.coach}</td>
                </tr>

                <tr>
                  <td className="gtlabel">Owner</td>
                  <td className="gtsep">-</td>
                  <td className="gtval">{profile.owner}</td>
                </tr>

                <tr>
                  <td className="gtlabel">Venue</td>
                  <td className="gtsep">-</td>
                  <td className="gtval">{profile.venue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </header>
      </section>

      {/* ===== BATTERS SECTION ===== */}
      <section className="gtroster-container">
        <h3 className="gtcategory-title">BATTERS</h3>

        <div className="gtplayer-grid">
          {batters.map((player) => (
            <article key={player.name} className="gtplayer-card">
              <div className="gtplayer-img-wrapper">
                <img src={player.img} alt={player.name} />
              </div>

              <div className="gtplayer-info">
                <h4>{player.name}</h4>
                <p>{player.role}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="gtcategory-title">ALL ROUNDERS</h3>

        <div className="gtplayer-grid">
          {allRounders.map((player) => (
            <article key={player.name} className="gtplayer-card">
              <div className="gtplayer-img-wrapper">
                <img src={player.img} alt={player.name} />
              </div>

              <div className="gtplayer-info">
                <h4>{player.name}</h4>
                <p>{player.role}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="gtcategory-title">BOWLERS</h3>

        <div className="gtplayer-grid">
          {bowlers.map((player) => (
            <article key={player.name} className="gtplayer-card">
              <div className="gtplayer-img-wrapper">
                <img src={player.img} alt={player.name} />
              </div>

              <div className="gtplayer-info">
                <h4>{player.name}</h4>
                <p>{player.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default GujaratTitans;