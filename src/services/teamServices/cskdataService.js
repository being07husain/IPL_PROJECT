import {
  cskteamProfile,
  cskbatters,
  cskallRounder,
  cskbowlers
} from "../../data/teamsdata/cskdata";

export const getCSKTeamProfile = () => {
  return cskteamProfile;
};

export const getCSKBatters = () => {
  return cskbatters;
};

export const getCSKBowlers = () => {
  return cskbowlers;
};

export const getCSKAllRounders = () => {
  return cskallRounder;
};

export const getCSKFullSquad = () => {
  return [
    ...cskbatters,
    ...cskbowlers,
    ...cskallRounder
  ];
};

export const getCSKPlayerByName = (name) => {
  const squad = [
    ...cskbatters,
    ...cskbowlers,
    ...cskallRounder
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};