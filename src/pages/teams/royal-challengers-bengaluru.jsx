import React, { useEffect, useState } from "react";
import { getRCBTeamProfile, getRCBBatters, getRCBBowlers, getRCBAllRounders } from "../../services/teamServices/rcbdataService";

const RoyalChallengersBengaluru = () => {
  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getRCBTeamProfile());
    setBatters(getRCBBatters());
    setBowlers(getRCBBowlers());
    setAllRounders(getRCBAllRounders());
  }, []);

  return (<>
    <section className="rcbteam-details">
      {/* ===== TEAM HEADER SECTION ===== */}
      <header className="rcbteam-header-container">

        {/* LEFT: Logo & Name Area */}
        <div className="rcbteam-identity">
          <img src="https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png" alt="RCB Logo" className="rcbmain-logo" />
          <div className="rcbteam-title-block">
            <h1 className="rcbteam-name-text">{profile.name}</h1>

            <button className="rcbofficial-site-btn">
              <a href="https://www.instagram.com/royalchallengers.bengaluru/" target="blank">Official Team Instagram </a>
            </button>
          </div>
        </div>

        {/* RIGHT: Data Table Area */}
        <div className="rcbstats-box">
          <table className="rcbprofile-table">
            <tbody>
              <tr>
                <td className="rcblabel">Captain</td>
                <td className="rcbsep">-</td>
                <td className="rcbval">{profile.captain}</td>
              </tr>
              <tr>
                <td className="rcblabel">Coach</td>
                <td className="rcbsep">-</td>
                <td className="rcbval">{profile.coach}</td>
              </tr>
              <tr>
                <td className="rcblabel">Owner</td>
                <td className="rcbsep">-</td>
                <td className="rcbval">{profile.owner}</td>
              </tr>
              <tr>
                <td className="rcblabel">Venue</td>
                <td className="rcbsep">-</td>
                <td className="rcbval">{profile.venue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </section>
    {/* ===== BATTERS SECTION ===== */}
    <section className="rcbroster-container">
      <h3 className="rcbcategory-title">BATTERS</h3>
      <div className="rcbplayer-grid">
        {batters.map((player) => (
          <article key={player.name} className="rcbplayer-card">
            <div className="rcbplayer-img-wrapper">
              <img src={player.img} alt={player.name} />
            </div>
            <div className="rcbplayer-info">
              <h4>{player.name}</h4>
              <p>{player.role}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="rcbcategory-title">ALL ROUNDERS</h3>
      <div className="rcbplayer-grid">
        {allRounders.map((player) => (
          <article key={player.name} className="rcbplayer-card">
            <div className="rcbplayer-img-wrapper">
              <img src={player.img} alt={player.name} />
            </div>
            <div className="rcbplayer-info">
              <h4>{player.name}</h4>
              <p>{player.role}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="rcbcategory-title">BOWLERS</h3>
      <div className="rcbplayer-grid">
        {bowlers.map((player) => (<article key={player.name} className="rcbplayer-card">
          <div className="rcbplayer-img-wrapper">
            <img src={player.img} alt={player.name} />
          </div>
          <div className="rcbplayer-info">
            <h4>{player.name}</h4>
            <p>{player.role}</p>
          </div>
        </article>))}
      </div>
    </section>
  </>);
}
export default RoyalChallengersBengaluru;
