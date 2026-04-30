import {
  pbksteamProfile,
  pbksbatters,
  pbksallrounders,
  pbksbowlers
} from "../../data/teamsdata/pbksdata";

export const getPBKSTeamProfile = () => {
  return pbksteamProfile;
};

export const getPBKSBatters = () => {
  return pbksbatters;
};

export const getPBKSBowlers = () => {
  return pbksbowlers;
};

export const getPBKSAllRounders = () => {
  return pbksallrounders;
};

export const getPBKSFullSquad = () => {
  return [
    ...pbksbatters,
    ...pbksbowlers,
    ...pbksallrounders
  ];
};

export const getPBKSPlayerByName = (name) => {
  const squad = [
    ...pbksbatters,
    ...pbksbowlers,
    ...pbksallrounders
  ];

  return squad.find(player =>
    player.name.toLowerCase() === name.toLowerCase()
  );
};
