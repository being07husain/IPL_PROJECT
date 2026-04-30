import React,{useEffect, useState} from "react";
import { getLSGTeamProfile, getLSGBatters, getLSGBowlers, getLSGAllRounders } from "../../services/teamServices/lsgdataService";
const LucknowSuperGiants = () => {
    const [profile,setProfile]=useState({});
    const [batters,setBatters]=useState([]);
    const [bowlers,setBowlers]=useState([]);
    const [allRounders,setAllRounders]=useState([]);

    useEffect(() => {
        const teamProfile = getLSGTeamProfile();
        const teamBatters = getLSGBatters();
        const teamBowlers = getLSGBowlers();
        const teamAllRounders = getLSGAllRounders();

        console.log("Team Profile:", teamProfile);
        console.log("Batters:", teamBatters);
        console.log("Bowlers:", teamBowlers);
        console.log("All-Rounders:", teamAllRounders);

        setProfile(teamProfile);
        setBatters(teamBatters);
        setBowlers(teamBowlers);
        setAllRounders(teamAllRounders);
    }, []);

return (
    <>
   <section className="lsgteam-details">
               {/* ===== TEAM HEADER SECTION ===== */}
               <header className="lsgteam-header-container">
                 {/* LEFT: Logo & Name Area */}
                 <div className="lsgteam-identity">
                   <img
                     src="https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png"
                     alt="LSG Logo"
                     className="lsgmain-logo"
                   />
   
                   <div className="lsgteam-title-block">
                     <h1 className="lsgteam-name-text">{profile.name}</h1>
   
                     <button className="lsgofficial-site-btn">
                       <a
                         href="https://www.instagram.com/lucknowsupergiants/"
                         target="blank"
                       >
                         Official Team Instagram
                       </a>
                     </button>
                   </div>
                 </div>
   
                 {/* RIGHT: Data Table Area */}
                 <div className="lsgstats-box">
                   <table className="lsgprofile-table">
                     <tbody>
                       <tr>
                         <td className="lsglabel">Captain</td>
                         <td className="lsgsep">-</td>
                         <td className="lsgval">{profile.captain}</td>
                       </tr>
   
                       <tr>
                         <td className="lsglabel">Coach</td>
                         <td className="lsgsep">-</td>
                         <td className="lsgval">{profile.coach}</td>
                       </tr>
   
                       <tr>
                         <td className="lsglabel">Owner</td>
                         <td className="lsgsep">-</td>
                         <td className="lsgval">{profile.owner}</td>
                       </tr>
   
                       <tr>
                         <td className="lsglabel">Venue</td>
                         <td className="lsgsep">-</td>
                         <td className="lsgval">{profile.venue}</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </header>
             </section>
   
             {/* ===== BATTERS SECTION ===== */}
             <section className="lsgroster-container">
               <h3 className="lsgcategory-title">BATTERS</h3>
   
               <div className="lsgplayer-grid">
                 {batters.map((player) => (
                   <article key={player.name} className="lsgplayer-card">
                     <div className="lsgplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="lsgplayer-info">
                       <h4>{player.name}</h4>
                       <p>{player.role}</p>
                     </div>
                   </article>
                 ))}
               </div>
   
               <h3 className="lsgcategory-title">ALL ROUNDERS</h3>
   
               <div className="lsgplayer-grid">
                 {allRounders.map((player) => (
                   <article key={player.name} className="lsgplayer-card">
                     <div className="lsgplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="lsgplayer-info">
                       <h4>{player.name}</h4>
                       <p>{player.role}</p>
                     </div>
                   </article>
                 ))}
               </div>
   
               <h3 className="lsgcategory-title">BOWLERS</h3>
   
               <div className="lsgplayer-grid">
                 {bowlers.map((player) => (
                   <article key={player.name} className="lsgplayer-card">
                     <div className="lsgplayer-img-wrapper">
                       <img src={player.img} alt={player.name} />
                     </div>
   
                     <div className="lsgplayer-info">
                       <h4>{player.name}</h4>
                       <p>{player.role}</p>
                     </div>
                   </article>
                 ))}
               </div>
             </section>
    </>
);
}
export default LucknowSuperGiants;