import CSK from "../assets/logos/teams/CSK.png";
import DC from "../assets/logos/teams/DC.png";
import GT from "../assets/logos/teams/GT.png";
import KKR from "../assets/logos/teams/KKR.png";
import LSG from "../assets/logos/teams/LSG.png";
import MI from "../assets/logos/teams/MI.png";
import PBKS from "../assets/logos/teams/PBKS.png";
import RR from "../assets/logos/teams/RR.png";
import RCB from "../assets/logos/teams/RCB.png";
import SRH from "../assets/logos/teams/SRH.png";

import graph1 from "../assets/graphs/HR.png";
import graph2 from "../assets/graphs/HR2.png";
import graph3 from "../assets/graphs/HR3.png";
import graph4 from "../assets/graphs/HR4.png";

export const teams = [
  { name: "Chennai Super Kings", logo: CSK, titles: "2010 | 2011 | 2018 | 2021 | 2023", path: "/teams/chennai-super-kings" },
  { name: "Delhi Capitals", logo: DC, path: "/teams/delhi-capitals" },
  { name: "Gujarat Titans", logo: GT, titles: "2022", path: "/teams/gujarat-titans" },
  { name: "Kolkata Knight Riders", logo: KKR, titles: "2012 | 2014 | 2024", path: "/teams/kolkata-knight-riders" },
  { name: "Lucknow Super Giants", logo: LSG, path: "/teams/lucknow-super-giants" },
  { name: "Mumbai Indians", logo: MI, titles: "2013 | 2015 | 2017 | 2019 | 2020", path: "/teams/mumbai-indians" },
  { name: "Punjab Kings", logo: PBKS, path: "/teams/punjab-kings" },
  { name: "Rajasthan Royals", logo: RR, titles: "2008", path: "/teams/rajasthan-royals" },
  { name: "Royal Challengers Bengaluru", logo: RCB, titles: "2025", path: "/teams/royal-challengers-bengaluru" },
  { name: "Sunrisers Hyderabad", logo: SRH, titles: "2016", path: "/teams/sunrisers-hyderabad" }
];

export const graphs = [
  {
    img: graph1,
    insight: `🔥 Sunrisers Hyderabad (277) posted the highest team total of IPL 2025,
    reflecting an ultra-aggressive batting philosophy driven by fearless powerplay intent
    and exceptional boundary-hitting depth till No.8.

    In contrast, Delhi Capitals (221) recorded the lowest "highest-score" among teams,
    indicating a more conservative batting approach with fewer extreme high-ceiling innings
    across the season.`
  },

  {
    img: graph2,
    insight: `🧠 Punjab Kings successfully defended the lowest total of the season (111),
    showcasing elite bowling discipline, sharp field placements, and exceptional death-over execution
    under scoreboard pressure.

    Sunrisers Hyderabad required comparatively higher totals to defend,
    suggesting a strategic dependence on batting-heavy wins and matches played on
    batting-friendly surfaces rather than low-scoring tactical battles.`
  },

  {
    img: graph3,
    insight: `🚀 SRH completed the highest successful run chase of IPL 2025 (228),
    highlighting extraordinary chasing temperament, sustained run-rate management,
    and domination during both powerplay and death overs.

    This reflects a data-backed chasing strategy where SRH maximized match-ups
    and minimized dot-ball pressure rather than relying on late-innings miracles.`
  },

  {
    img: graph4,
    insight: `🏆 Royal Challengers Bangalore displayed remarkable batting stability throughout IPL 2025,
    remaining unbeaten (never bowled out) across the entire season — a rare indicator of depth,
    role clarity, and controlled risk-taking.

    On the other end, Kolkata Knight Riders were bowled out the most times (3),
    exposing middle-order fragility and high-risk batting collapses,
    including the lowest team total recorded in the tournament.`
  }
];