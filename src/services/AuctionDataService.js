// import data
import auctionData from "../data/auctiondata";

// ✅ Get all teams
export const getAllTeams = () => auctionData.teams;

// ✅ Format currency
export const formatCurrency = (amount) => {
  return `₹${(amount / 10000000).toFixed(2)} Cr`;
};

// ✅ Get teams with spending
export const getTeamsWithSpending = () => {
  return auctionData.teams.map(team => {
    const totalSpent = auctionData.players
      .filter(player => player.teamId === team.id)
      .reduce((sum, player) => sum + player.winningBid, 0);

    return {
      ...team,
      totalSpent
    };
  });
};

export const getPlayersByTeam = (teamId) => {
  return auctionData.players
    .filter(player => player.teamId === teamId)
    .map(player => ({
      ...player,
      basePrice: player.basePrice,
      winningBid: player.winningBid
    }));
};
