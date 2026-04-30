import {
  GTteamprofile,
  GTbatters,
  GTallRounders,
  GTbowlers
} from "../../data/teamsdata/gtdata";

export const getGTTeamProfile = () => {
  return GTteamprofile;
};

export const getGTBatters = () => {
  return GTbatters;
};

export const getGTBowlers = () => {
  return GTbowlers;
};

export const getGTAllRounders = () => {
  return GTallRounders;
};

export const getGTFullSquad = () => {
  return [
    ...GTbatters,
    ...GTbowlers,
    ...GTallRounders
  ];
};

export const getGTPlayerByName = (name) => {
  const squad = [
    ...GTbatters,
    ...GTbowlers,
    ...GTallRounders
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};