import {
  srhteamProfile,
  srhbatters,
  srhallRounder,
  srhbowlers
} from "../../data/teamsdata/srhdata";

export const getSRHTeamProfile = () => {
  return srhteamProfile;
};

export const getSRHBatters = () => {
  return srhbatters;
};

export const getSRHBowlers = () => {
  return srhbowlers;
};

export const getSRHAllRounders = () => {
  return srhallRounder;
};

export const getSRHFullSquad = () => {
  return [
    ...srhbatters,
    ...srhbowlers,
    ...srhallRounder
  ];
};

export const getSRHPlayerByName = (name) => {
  const squad = [
    ...srhbatters,
    ...srhbowlers,
    ...srhallRounder
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};
