import React, { useEffect, useState } from "react";
import { getDCTeamProfile ,getDCBatters,getDCBowlers,getDCAllRounders} from "../../services/teamServices/dcdataService";

const DelhiCapitals = () => {
    const [profile, setProfile] =useState({});
    const [batters, setBatters] = useState([]);
    const [bowlers, setBowlers] = useState([]);
    const [allRounders, setAllRounders] = useState([]);

    useEffect(() => {
        setProfile(getDCTeamProfile());
        setBatters(getDCBatters());
        setBowlers(getDCBowlers());
        setAllRounders(getDCAllRounders());
    }, []);

    return(<>
    <section className="dcteam-details">
          {/* ===== TEAM HEADER SECTION ===== */}
          <header className="dcteam-header-container">
            
            {/* LEFT: Logo & Name Area */}
            <div className="dcteam-identity">
              <img src="https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png" alt="DC Logo" className="dcmain-logo" />
              <div className="dcteam-title-block">
                <h1 className="dcteam-name-text">{profile.name}</h1>
    
                <button className="dcofficial-site-btn">
                  <a href="https://www.instagram.com/delhicapitals/" target="blank">Official Team Instagram </a>
                </button>
              </div>
            </div>
    
            {/* RIGHT: Data Table Area */}
            <div className="dcstats-box">
              <table className="dcprofile-table">
                <tbody>
                  <tr>
                    <td className="dclabel">Captain</td>
                    <td className="dcsep">-</td>
                    <td className="dcval">{profile.captain}</td>
                  </tr>
                  <tr>
                    <td className="dclabel">Coach</td>
                    <td className="dcsep">-</td>
                    <td className="dcval">{profile.coach}</td>
                  </tr>
                  <tr>
                    <td className="dclabel">Owner</td>
                    <td className="dcsep">-</td>
                    <td className="dcval">{profile.owner}</td>
                  </tr>
                  <tr>
                    <td className="dclabel">Venue</td>
                    <td className="dcsep">-</td>
                    <td className="dcval">{profile.venue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>
    </section>
          {/* ===== BATTERS SECTION ===== */}
          <section className="dcroster-container">
            <h3 className="dccategory-title">BATTERS</h3>
            <div className="dcplayer-grid">
              {batters.map((player) => (
                <article key={player.name} className="dcplayer-card">
                  <div className="dcplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="dcplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="dccategory-title">ALL ROUNDERS</h3>
            <div className="dcplayer-grid">
              {allRounders.map((player)=>(
                <article key={player.name} className="dcplayer-card">
                  <div className="dcplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="dcplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="dccategory-title">BOWLERS</h3>
            <div className="dcplayer-grid">
              {bowlers.map((player)=>(<article key={player.name} className="dcplayer-card">
               <div className="dcplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="dcplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
              </article>))}
            </div>
          </section>
    </>);
}
export default DelhiCapitals;