import { Dcteamprofile,Dcbatters,Dcbowlers,Dcallrounders } from "../../data/teamsdata/dcdata";
export const getDCTeamProfile = () => {return Dcteamprofile;};
export const getDCBatters = () => {return Dcbatters;};
export const getDCBowlers = () => {return Dcbowlers;};
export const getDCAllRounders = () => {return Dcallrounders;};

export const getDCFullSquad = () => {
    return[
        ...Dcbatters,
        ...Dcbowlers,
        ...Dcallrounders
    ];
}
export const getDCPlayerByName = (name) => {
    const squad = [
        ...Dcbatters,
        ...Dcbowlers,
        ...Dcallrounders
    ];
    return squad.find(player =>
        player.name.toLowerCase() === name.toLowerCase()
    );
}