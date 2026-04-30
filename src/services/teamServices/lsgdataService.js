import { LSGteamProfile,LSGbatters,LSGbowlers,LSGallRounders } from "../../data/teamsdata/lsgdata";
export const getLSGTeamProfile=()=>{
    return LSGteamProfile;
}

export const getLSGBatters=()=>{
    return LSGbatters;
}

export const getLSGBowlers=()=>{
    return LSGbowlers;
}

export const getLSGAllRounders=()=>{
    return LSGallRounders;
}

export const getLSGFullSquad=()=>{
    return [...getLSGBatters(),...getLSGBowlers(),...getLSGAllRounders()];
}

export const getLSGPlayerByName=(name)=>{
    const squad=[...getLSGBatters(),...getLSGBowlers(),...getLSGAllRounders()];
    return squad.find(player=>player.name.toLowerCase()===name.toLowerCase());
}
