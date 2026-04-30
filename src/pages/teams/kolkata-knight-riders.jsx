import React, { useEffect, useState } from "react";
import Trophy from "../../assets/logos/ipl-trophy.png";

import {
  getKKRTeamProfile,
  getKKRBatters,
  getKKRBowlers,
  getKKRAllRounders
} from "../../services/teamServices/kkrdataService";

const KolkataKnightRiders = () => {
  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getKKRTeamProfile());
    setBatters(getKKRBatters());
    setBowlers(getKKRBowlers());
    setAllRounders(getKKRAllRounders());
  }, []);

  return (
    <>
       <section className="kkrteam-details">
            {/* ===== TEAM HEADER SECTION ===== */}
            <header className="kkrteam-header-container">
              {/* LEFT: Logo & Name Area */}
              <div className="kkrteam-identity">
                <img
                  src="https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"
                  alt="KKR Logo"
                  className="kkrmain-logo"
                />

                <div className="kkrteam-title-block">
                  <h1 className="kkrteam-name-text">{profile.name}</h1>

                  <div className="kkrtrophy-badge">
                    <img src={Trophy} alt="Trophy" className="kkrtrophy-img" />
                    <span className="kkrtrophy-years">{profile.trophies}</span>
                  </div>

                  <button className="kkrofficial-site-btn">
                    <a
                      href="https://www.instagram.com/kkriders/"
                      target="blank"
                    >
                      Official Team Instagram
                    </a>
                  </button>
                </div>
              </div>

              {/* RIGHT: Data Table Area */}
              <div className="kkrstats-box">
                <table className="kkrprofile-table">
                  <tbody>
                    <tr>
                      <td className="kkrlabel">Captain</td>
                      <td className="kkrsep">-</td>
                      <td className="kkrval">{profile.captain}</td>
                    </tr>

                    <tr>
                      <td className="kkrlabel">Coach</td>
                      <td className="kkrsep">-</td>
                      <td className="kkrval">{profile.coach}</td>
                    </tr>

                    <tr>
                      <td className="kkrlabel">Owner</td>
                      <td className="kkrsep">-</td>
                      <td className="kkrval">{profile.owner}</td>
                    </tr>

                    <tr>
                      <td className="kkrlabel">Venue</td>
                      <td className="kkrsep">-</td>
                      <td className="kkrval">{profile.venue}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </header>
          </section>

          {/* ===== BATTERS SECTION ===== */}
          <section className="kkrroster-container">
            <h3 className="kkrcategory-title">BATTERS</h3>

            <div className="kkrplayer-grid">
              {batters.map((player) => (
                <article key={player.name} className="kkrplayer-card">
                  <div className="kkrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>

                  <div className="kkrplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="kkrcategory-title">ALL ROUNDERS</h3>

            <div className="kkrplayer-grid">
              {allRounders.map((player) => (
                <article key={player.name} className="kkrplayer-card">
                  <div className="kkrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>

                  <div className="kkrplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="kkrcategory-title">BOWLERS</h3>

            <div className="kkrplayer-grid">
              {bowlers.map((player) => (
                <article key={player.name} className="kkrplayer-card">
                  <div className="kkrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>

                  <div className="kkrplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
    </>);
}
export default KolkataKnightRiders;