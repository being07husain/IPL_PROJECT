import {
  rrteamProfile,
  rrbatters,
  rrallRounder,
  rrbowlers
} from "../../data/teamsdata/rrdata";

export const getRRTeamProfile = () => {
  return rrteamProfile;
};

export const getRRBatters = () => {
  return rrbatters;
};

export const getRRBowlers = () => {
  return rrbowlers;
};

export const getRRAllRounders = () => {
  return rrallRounder;
};

export const getRRFullSquad = () => {
  return [
    ...rrbatters,
    ...rrbowlers,
    ...rrallRounder
  ];
};

export const getRRPlayerByName = (name) => {
  const squad = [
    ...rrbatters,
    ...rrbowlers,
    ...rrallRounder
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};
