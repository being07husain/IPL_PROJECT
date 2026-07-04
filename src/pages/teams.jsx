import React from "react";
import { Link } from "react-router-dom";
import TEAMWALLPAPER from "../assets/logos/IPL-BANNER.png";


import { teams, graphs } from "../services/teamsService";

function Teams() {
  return (
    <>
      {/* Banner */}
      <div className="banner-container">
        <img src={TEAMWALLPAPER} className="IPLBANNER" alt="IPL Teams Banner" />
      </div>

      {/* Teams */}
      <section className="teams-section">
        <div className="teams-grid">
          {teams.map((team, index) => {
            const teamColors = {
              "Chennai Super Kings": "#f4ce13",
              "Mumbai Indians": "#004ba0",
              "Royal Challengers Bengaluru": "#d31515",
              "Kolkata Knight Riders": "#3b215d",
              "Sunrisers Hyderabad": "#F97316",
              "Delhi Capitals": "#004c93",
              "Punjab Kings": "#d71920",
              "Gujarat Titans": "#1b2133",
              "Lucknow Super Giants": "#081a3e",
              "Rajasthan Royals": "#EC4899"
            };

            return (
              <Link
                key={index}
                to={team.path}
                className="team-link">
                <div
                  className={`TEAM-CARD ${team.titles ? "champion" : ""}`}
                  style={{ backgroundColor: teamColors[team.name] || "#162787" }}>
                  <img src={team.logo} alt={team.name} />
                  <h3>{team.name}</h3>
                  {team.titles && <p>{team.titles}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>


      {/* Graphs */}
      <section className="GRAPHS">
        <h2 className="graph-title">Team Performance – 2025</h2>

        {graphs.map((graph, index) => (
          <div key={index} className="graph-wrapper">
            <div className="graph-card">
              <img src={graph.img} className="graph-img" alt="IPL Graph" />
            </div>
            <p className="graph-insight">{graph.insight}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Teams;
