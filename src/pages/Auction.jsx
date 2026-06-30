import React, { useEffect, useState } from "react";
import {
  getTeamsWithSpending,
  getPlayersByTeam,
  formatCurrency
} from "../services/AuctionDataService";

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);

  useEffect(() => {
    const data = getTeamsWithSpending()
      .sort((a, b) => b.totalSpent - a.totalSpent);

    setTeams(data);
  }, []);

  // toggle expand
  const handleClick = (teamId) => {
    setActiveTeam(activeTeam === teamId ? null : teamId);
  };

  return (
    <div className="leaderboard-container">
      <h2 className="title">🏆 Auction Leaderboard IPL 2026</h2>

      <div className="leaderboard-list">
        {teams.map((team, index) => {
          const players = getPlayersByTeam(team.id);

          return (
            <div key={team.id} className={`team-wrapper team-${team.id}`}>
              
              {/* CARD */}
              <div
                className={`leaderboard-card ${
                  index === 0 ? "top-1" :
                  index === 1 ? "top-2" :
                  index === 2 ? "top-3" : ""
                }`}
                onClick={() => handleClick(team.id)}
              >
                <div className="rank">#{index + 1}</div>

                <img src={team.img} alt={team.name} className="team-logo" />

                <div className="team-info">
                  <h3>{team.name}</h3>
                  <p>Click to view players</p>
                </div>

                <div className="amount">
                  {formatCurrency(team.totalSpent)}
                </div>
              </div>

              {/* EXPANDED SECTION */}
              {activeTeam === team.id && (
                <div className="player-list">
                  {players.map(player => (
                    <div key={player.id} className="player-card">

                      <div className="player-left">
                        <span className="player-name">{player.playerName}</span>
                        <span className="player-category">
                          {player.category.toUpperCase()}
                        </span>
                      </div>

                      <div className="player-right">
                        <span className="base">
                          Base: {formatCurrency(player.basePrice)}
                        </span>
                        <span className="bid">
                          Sold: {formatCurrency(player.winningBid)}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;