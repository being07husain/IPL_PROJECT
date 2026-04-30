import SeasonsData from "../data/seasonsdata";

// get all seasons
export const getAllSeasons = () => {
  console.log("SeasonsData:", SeasonsData); // Debugging log
  return SeasonsData;
};

// get season by year
export const getSeasonByYear = (year) => {
  return SeasonsData.find(season => season.year === year);
};

// get latest season
export const getLatestSeason = () => {
  return SeasonsData[SeasonsData.length - 1];
};

// get first season
export const getFirstSeason = () => {
  return SeasonsData[0];
};

// get next season
export const getNextSeason = (currentYear) => {
  const index = SeasonsData.findIndex(season => season.year === currentYear);
  return SeasonsData[index + 1];
};

// get previous season
export const getPreviousSeason = (currentYear) => {
  const index = SeasonsData.findIndex(season => season.year === currentYear);
  return SeasonsData[index - 1];
};