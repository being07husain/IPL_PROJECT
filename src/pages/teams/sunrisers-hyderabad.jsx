import React, { useEffect, useState } from "react";
import { getSRHTeamProfile, getSRHBatters, getSRHBowlers, getSRHAllRounders } from "../../services/teamServices/srhdataService";

const SunrisersHyderabad = () => {
  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getSRHTeamProfile());
    setBatters(getSRHBatters());
    setBowlers(getSRHBowlers());
    setAllRounders(getSRHAllRounders());
  }, []);

  return (<>
    <section className="srhteam-details">
      {/* ===== TEAM HEADER SECTION ===== */}
      <header className="srhteam-header-container">

        {/* LEFT: Logo & Name Area */}
        <div className="srhteam-identity">
          <img src="https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png" alt="SRH Logo" className="srhmain-logo" />
          <div className="srhteam-title-block">
            <h1 className="srhteam-name-text">{profile.name}</h1>

            <button className="srhofficial-site-btn">
              <a href="https://www.instagram.com/sunrisershyd/" target="blank">Official Team Instagram </a>
            </button>
          </div>
        </div>

        {/* RIGHT: Data Table Area */}
        <div className="srhstats-box">
          <table className="srhprofile-table">
            <tbody>
              <tr>
                <td className="srhlabel">Captain</td>
                <td className="srhsep">-</td>
                <td className="srhval">{profile.captain}</td>
              </tr>
              <tr>
                <td className="srhlabel">Coach</td>
                <td className="srhsep">-</td>
                <td className="srhval">{profile.coach}</td>
              </tr>
              <tr>
                <td className="srhlabel">Owner</td>
                <td className="srhsep">-</td>
                <td className="srhval">{profile.owner}</td>
              </tr>
              <tr>
                <td className="srhlabel">Venue</td>
                <td className="srhsep">-</td>
                <td className="srhval">{profile.venue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </section>
    {/* ===== BATTERS SECTION ===== */}
    <section className="srhroster-container">
      <h3 className="srhcategory-title">BATTERS</h3>
      <div className="srhplayer-grid">
        {batters.map((player) => (
          <article key={player.name} className="srhplayer-card">
            <div className="srhplayer-img-wrapper">
              <img src={player.img} alt={player.name} />
            </div>
            <div className="srhplayer-info">
              <h4>{player.name}</h4>
              <p>{player.role}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="srhcategory-title">ALL ROUNDERS</h3>
      <div className="srhplayer-grid">
        {allRounders.map((player) => (
          <article key={player.name} className="srhplayer-card">
            <div className="srhplayer-img-wrapper">
              <img src={player.img} alt={player.name} />
            </div>
            <div className="srhplayer-info">
              <h4>{player.name}</h4>
              <p>{player.role}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="srhcategory-title">BOWLERS</h3>
      <div className="srhplayer-grid">
        {bowlers.map((player) => (<article key={player.name} className="srhplayer-card">
          <div className="srhplayer-img-wrapper">
            <img src={player.img} alt={player.name} />
          </div>
          <div className="srhplayer-info">
            <h4>{player.name}</h4>
            <p>{player.role}</p>
          </div>
        </article>))}
      </div>
    </section>
  </>);
}
export default SunrisersHyderabad;
