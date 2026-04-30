import {
  KKRteamProfile,
  KKRbatters,
  KKRallRounders,
  KKRbowlers
} from "../../data/teamsdata/kkrdata";

export const getKKRTeamProfile = () => {
  return KKRteamProfile;
};

export const getKKRBatters = () => {
  return KKRbatters;
};

export const getKKRBowlers = () => {
  return KKRbowlers;
};

export const getKKRAllRounders = () => {
  return KKRallRounders;
};

export const getKKRFullSquad = () => {
  return [
    ...KKRbatters,
    ...KKRbowlers,
    ...KKRallRounders
  ];
};

export const getKKRPlayerByName = (name) => {
  const squad = [
    ...KKRbatters,
    ...KKRbowlers,
    ...KKRallRounders
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};