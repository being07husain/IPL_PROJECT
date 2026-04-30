import React, { useEffect, useState } from "react";
import Trophy from "../../assets/logos/ipl-trophy.png";

import {
  getCSKTeamProfile,
  getCSKBatters,
  getCSKBowlers,
  getCSKAllRounders
} from "../../services/teamServices/cskdataService";
 const ChennaiSuperKings = () => {

  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getCSKTeamProfile());
    setBatters(getCSKBatters());
    setBowlers(getCSKBowlers());
    setAllRounders(getCSKAllRounders());
  }, []);

  return (<>
<section className="cskteam-details">
  {/* ===== TEAM HEADER SECTION ===== */}
  <header className="cskteam-header-container">
    
    {/* LEFT: Logo & Name Area */}
    <div className="cskteam-identity">
      <img
        src="https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png"
        alt="CSK Logo"
        className="cskmain-logo"
      />

      <div className="cskteam-title-block">
        <h1 className="cskteam-name-text">{profile.name}</h1>

        <div className="csktrophy-badge">
          <img
            src={Trophy}
            alt="Trophy"
            className="csktrophy-img"
          />
          <span className="csktrophy-years">
            {profile.trophies}
          </span>
        </div>

        <button className="cskofficial-site-btn">
          <a
            href="https://www.instagram.com/chennaiipl/"
            target="blank"
          >
            Official Team Instagram
          </a>
        </button>
      </div>
    </div>

    {/* RIGHT: Data Table Area */}
    <div className="cskstats-box">
      <table className="cskprofile-table">
        <tbody>
          <tr>
            <td className="csklabel">Captain</td>
            <td className="csksep">-</td>
            <td className="cskval">{profile.captain}</td>
          </tr>

          <tr>
            <td className="csklabel">Coach</td>
            <td className="csksep">-</td>
            <td className="cskval">{profile.coach}</td>
          </tr>

          <tr>
            <td className="csklabel">Owner</td>
            <td className="csksep">-</td>
            <td className="cskval">{profile.owner}</td>
          </tr>

          <tr>
            <td className="csklabel">Venue</td>
            <td className="csksep">-</td>
            <td className="cskval">{profile.venue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </header>
</section>


{/* ===== BATTERS SECTION ===== */}
<section className="cskroster-container">

  <h3 className="cskcategory-title">BATTERS</h3>

  <div className="cskplayer-grid">
    {batters.map((player) => (
      <article key={player.name} className="cskplayer-card">

        <div className="cskplayer-img-wrapper">
          <img src={player.img} alt={player.name} />
        </div>

        <div className="cskplayer-info">
          <h4>{player.name}</h4>
          <p>{player.role}</p>
        </div>

      </article>
    ))}
  </div>


  <h3 className="cskcategory-title">ALL ROUNDERS</h3>

  <div className="cskplayer-grid">
    {allRounders.map((player) => (
      <article key={player.name} className="cskplayer-card">

        <div className="cskplayer-img-wrapper">
          <img src={player.img} alt={player.name} />
        </div>

        <div className="cskplayer-info">
          <h4>{player.name}</h4>
          <p>{player.role}</p>
        </div>

      </article>
    ))}
  </div>


  <h3 className="cskcategory-title">BOWLERS</h3>

  <div className="cskplayer-grid">
    {bowlers.map((player) => (
      <article key={player.name} className="cskplayer-card">

        <div className="cskplayer-img-wrapper">
          <img src={player.img} alt={player.name} />
        </div>

        <div className="cskplayer-info">
          <h4>{player.name}</h4>
          <p>{player.role}</p>
        </div>

      </article>
    ))}
  </div>

</section>
    </>);
}

export default ChennaiSuperKings;