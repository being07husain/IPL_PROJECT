import {
  rcbteamProfile,
  rcbbatters,
  rcballRounder,
  rcbbowlers
} from "../../data/teamsdata/rcbdata";

export const getRCBTeamProfile = () => {
  return rcbteamProfile;
};

export const getRCBBatters = () => {
  return rcbbatters;
};

export const getRCBBowlers = () => {
  return rcbbowlers;
};

export const getRCBAllRounders = () => {
  return rcballRounder;
};

export const getRCBFullSquad = () => {
  return [
    ...rcbbatters,
    ...rcbbowlers,
    ...rcballRounder
  ];
};

export const getRCBPlayerByName = (name) => {
  const squad = [
    ...rcbbatters,
    ...rcbbowlers,
    ...rcballRounder
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};
