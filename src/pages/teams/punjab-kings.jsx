import React, { useEffect, useState } from "react";
import { getPBKSTeamProfile ,getPBKSBatters,getPBKSBowlers,getPBKSAllRounders} from "../../services/teamServices/pbksdataService";

const PunjabKings = () => {
    const [profile, setProfile] =useState({});
    const [batters, setBatters] = useState([]);
    const [bowlers, setBowlers] = useState([]);
    const [allRounders, setAllRounders] = useState([]);

    useEffect(() => {
        setProfile(getPBKSTeamProfile());
        setBatters(getPBKSBatters());
        setBowlers(getPBKSBowlers());
        setAllRounders(getPBKSAllRounders());
    }, []);

    return(<>
    <section className="pbksteam-details">
          {/* ===== TEAM HEADER SECTION ===== */}
          <header className="pbksteam-header-container">
            
            {/* LEFT: Logo & Name Area */}
            <div className="pbksteam-identity">
              <img src="https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png" alt="PBKS Logo" className="pbksmain-logo" />
              <div className="pbksteam-title-block">
                <h1 className="pbksteam-name-text">{profile.name}</h1>
    
                <button className="pbksofficial-site-btn">
                  <a href="https://www.instagram.com/punjabkingsipl/" target="blank">Official Team Instagram </a>
                </button>
              </div>
            </div>
    
            {/* RIGHT: Data Table Area */}
            <div className="pbksstats-box">
              <table className="pbksprofile-table">
                <tbody>
                  <tr>
                    <td className="pbkslabel">Captain</td>
                    <td className="pbkssep">-</td>
                    <td className="pbksval">{profile.captain}</td>
                  </tr>
                  <tr>
                    <td className="pbkslabel">Coach</td>
                    <td className="pbkssep">-</td>
                    <td className="pbksval">{profile.coach}</td>
                  </tr>
                  <tr>
                    <td className="pbkslabel">Owner</td>
                    <td className="pbkssep">-</td>
                    <td className="pbksval">{profile.owner}</td>
                  </tr>
                  <tr>
                    <td className="pbkslabel">Venue</td>
                    <td className="pbkssep">-</td>
                    <td className="pbksval">{profile.venue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>
    </section>
          {/* ===== BATTERS SECTION ===== */}
          <section className="pbksroster-container">
            <h3 className="pbkscategory-title">BATTERS</h3>
            <div className="pbksplayer-grid">
              {batters.map((player) => (
                <article key={player.name} className="pbksplayer-card">
                  <div className="pbksplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="pbksplayer-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="pbkscategory-title">ALL ROUNDERS</h3>
            <div className="pbksplayer-grid">
              {allRounders.map((player)=>(
                <article key={player.name} className="pbksplayer-card">
                  <div className="pbksplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="pbksplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="pbkscategory-title">BOWLERS</h3>
            <div className="pbksplayer-grid">
              {bowlers.map((player)=>(<article key={player.name} className="pbksplayer-card">
               <div className="pbksplayer-img-wrapper">
                    <img src={player.img} alt={player.name} />
                  </div>
                  <div className="pbksplayer-info">
                     <h4>{player.name}</h4>
                     <p>{player.role}</p>
                  </div>
              </article>))}
            </div>
          </section>
    </>);
}
export default PunjabKings;
