import React, { useEffect, useState } from "react";
import Trophy from "../../assets/logos/ipl-trophy.png";

import {
  getMITeamProfile,
  getMIBatters,
  getMIBowlers,
  getMIAllRounders
} from "../../services/teamServices/midataService";

const MumbaiIndians = () => {
  const [profile, setProfile] = useState({});
  const [batters, setBatters] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [allRounders, setAllRounders] = useState([]);

  useEffect(() => {
    setProfile(getMITeamProfile());
    setBatters(getMIBatters());
    setBowlers(getMIBowlers());
    setAllRounders(getMIAllRounders());
  }, []);

  return (
    <>
       <section className="miteam-details">
               {/* ===== TEAM HEADER SECTION ===== */}
               <header className="miteam-header-container">
                 {/* LEFT: Logo & Name Area */}
                 <div className="miteam-identity">
                   <img
                     src="https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png"
                     alt="MI Logo"
                     className="mimain-logo"
                   />
                   <div className="miteam-title-block">
                     <h1 className="miteam-name-text">{profile.name}</h1>
                    <div className="mitrophy-badge">
                    <img src={Trophy} alt="Trophy" className="mitrophy-img" />
                    <span className="kkrtrophy-years">{profile.trophies}</span>
                    </div>
                     <button className="miofficial-site-btn">
                       <a
                         href="https://www.instagram.com/mumbaiindians/"
                         target="blank"
                       >
                         Official Team Instagram
                       </a>
                     </button>
                   </div>
                 </div>
   
                 {/* RIGHT: Data Table Area */}
                 <div className="mistats-box">
                   <table className="miprofile-table">
                     <tbody>
                       <tr>
                         <td className="milabel">Captain</td>
                         <td className="misep">-</td>
                         <td className="mival">{profile.captain}</td>
                       </tr>
   
                       <tr>
                         <td className="milabel">Coach</td>
                         <td className="misep">-</td>
                         <td className="mival">{profile.coach}</td>
                       </tr>
   
                       <tr>
                         <td className="milabel">Owner</td>
                         <td className="misep">-</td>
                         <td className="mival">{profile.owner}</td>
                       </tr>
   
                       <tr>
                         <td className="milabel">Venue</td>
                         <td className="misep">-</td>
                         <td className="mival">{profile.venue}</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </header>
             </section>
   
             {/* ===== BATTERS SECTION ===== */}
             <section className="miroster-container">
               <h3 className="micategory-title">BATTERS</h3>
   
               <div className="miplayer-grid">
                 {batters.map((player) => (
                   <article key={player.name} className="miplayer-card">
                     <div className="miplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="miplayer-info">
                       <h4>{player.name}</h4>
                       <p>{player.role}</p>
                     </div>
                   </article>
                 ))}
               </div>
   
               <h3 className="micategory-title">ALL ROUNDERS</h3>
   
               <div className="miplayer-grid">
                 {allRounders.map((player) => (
                   <article key={player.name} className="miplayer-card">
                     <div className="miplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="miplayer-info">
                       <h4>{player.name}</h4>
                       <p>{player.role}</p>
                     </div>
                   </article>
                 ))}
               </div>
   
               <h3 className="micategory-title">BOWLERS</h3>
   
               <div className="miplayer-grid">
                 {bowlers.map((player) => (
                   <article key={player.name} className="miplayer-card">
                     <div className="miplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="miplayer-info">
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

export default MumbaiIndians;