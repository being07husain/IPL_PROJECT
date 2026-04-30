import { MITteamProfile ,MIbatters,MIbowlers,MIallRounders } from "../../data/teamsdata/midata";
export const getMITeamProfile = () =>{ return MITteamProfile; };
export const getMIBatters = () =>{ return MIbatters; };
export const getMIBowlers = () =>{ return MIbowlers; };
export const getMIAllRounders = () =>{ return MIallRounders; };
export const getMIFullSquad = () => {
  return [
    ...MIbatters,
    ...MIbowlers,
    ...MIallRounders
  ];
};
export const getMIPlayerByName = (name) => {
  const squad = [
    ...MIbatters,
    ...MIbowlers,
    ...MIallRounders
  ];

    return squad.find(player => player.name.toLowerCase() === name.toLowerCase());};