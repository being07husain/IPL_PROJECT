import React, { useEffect, useState } from "react";
import { getRRTeamProfile, getRRBatters, getRRBowlers, getRRAllRounders } from "../../services/teamServices/rrdataService";

const RajasthanRoyals = () => {
    const [profile, setProfile] = useState({});
    const [batters, setBatters] = useState([]);
    const [bowlers, setBowlers] = useState([]);
    const [allRounders, setAllRounders] = useState([]);

    useEffect(() => {
        setProfile(getRRTeamProfile());
        setBatters(getRRBatters());
        setBowlers(getRRBowlers());
        setAllRounders(getRRAllRounders());
    }, []);

    return (<>
    <section className="rrteam-details">
          {/* ===== TEAM HEADER SECTION ===== */}
          <header className="rrteam-header-container">
            
            {/* LEFT: Logo & Name Area */}
            <div className="rrteam-identity">
              <img src="https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png" alt="RR Logo" className="rrmain-logo" />
              <div className="rrteam-title-block">
                <h1 className="rrteam-name-text">{profile.name}</h1>
    
                <button className="rrofficial-site-btn">
                  <a href="https://www.instagram.com/rajasthanroyals/" target="blank">Official Team Instagram </a>
                </button>
              </div>
            </div>
    
            {/* RIGHT: Data Table Area */}
            <div className="rrstats-box">
              <table className="rrprofile-table">
                <tbody>
                  <tr>
                    <td className="rrlabel">Captain</td>
                    <td className="rrsep">-</td>
                    <td className="rrval">{profile.captain}</td>
                  </tr>
                  <tr>
                    <td className="rrlabel">Coach</td>
                    <td className="rrsep">-</td>
                    <td className="rrval">{profile.coach}</td>
                  </tr>
                  <tr>
                    <td className="rrlabel">Owner</td>
                    <td className="rrsep">-</td>
                    <td className="rrval">{profile.owner}</td>
                  </tr>
                  <tr>
                    <td className="rrlabel">Venue</td>
                    <td className="rrsep">-</td>
                    <td className="rrval">{profile.venue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>
    </section>
          {/* ===== BATTERS SECTION ===== */}
          <section className="rrroster-container">
            <h3 className="rrcategory-title">BATTERS</h3>
            <div className="rrplayer-grid rrbatters-grid">
              {batters.map((player) => (
                <article key={player.name} className="rrplayer-card">
                  <div className="rrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="rrplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="rrcategory-title">ALL ROUNDERS</h3>
            <div className="rrplayer-grid rrallrounders-grid">
              {allRounders.map((player)=>(
                <article key={player.name} className="rrplayer-card">
                  <div className="rrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="rrplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="rrcategory-title">BOWLERS</h3>
            <div className="rrplayer-grid rrbowlers-grid">
              {bowlers.map((player)=>(<article key={player.name} className="rrplayer-card">
               <div className="rrplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="rrplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
              </article>))}
            </div>
          </section>
    </>);
}
export default RajasthanRoyals;
