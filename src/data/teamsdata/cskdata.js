import DHONI from "../../assets/CSK/BATSMAN/MS DHONI.png";
import SAMSON from "../../assets/CSK/BATSMAN/SANJU SAMSON.png";
import GAIKWAD from "../../assets/CSK/BATSMAN/RUTURAJ.png";
import BREVIS from "../../assets/CSK/BATSMAN/DEWALD.png";
import MAHATRE from "../../assets/CSK/BATSMAN/MAHATRE.png";
import Sharma from "../../assets/CSK/BATSMAN/SHARMA.png";
import Khan from "../../assets/CSK/BATSMAN/KHAN.png";
import Patel from "../../assets/CSK/BATSMAN/PATEL.png";

import COMBOZ from "../../assets/CSK/ALL-ROUNDER/COMBOZ.png";
import OVERTON from "../../assets/CSK/ALL-ROUNDER/OVERTON.png";
import GHOSH from "../../assets/CSK/ALL-ROUNDER/GHOSH.png";
import DUBE from "../../assets/CSK/ALL-ROUNDER/DUBE.png";
import NOIMAGE from "../../assets/CSK/ALL-ROUNDER/NOimage.png";

import AHMED from "../../assets/CSK/BOWLERS/AHMED.png";
import AHMAD from "../../assets/CSK/BOWLERS/AHMAD.png";
import MUKESH from "../../assets/CSK/BOWLERS/MUKESH.png";
import NATHAN from "../../assets/CSK/BOWLERS/NATHAN.png";
import GOPAL from "../../assets/CSK/BOWLERS/GOPAL.png";
import SINGH from "../../assets/CSK/BOWLERS/SINGH.png";
const cskteamProfile = {
  name: "Chennai Super Kings",
  trophies: "2010, 2011, 2018, 2021, 2023", // Cleaned up for the badge
  coach: "Stephen Fleming",
  captain: "MS Dhoni",
  owner: "Chennai Super Kings Cricket Limited",
  venue: "M. A. Chidambaram Stadium",
};

const cskbatters = [
  {name: "Mahendra Singh Dhoni", role: "WK-Batsman & Captain", img: DHONI },
  {name: "Sanju Samson", role: "WK-Batsman", img: SAMSON },
  {name: "Ruturaj Gaikwad", role: "Batsman", img: GAIKWAD },
  {name: "Dewald Brevis", role: "Batsman", img: BREVIS },
  {name: "Ayush Mahatre",role:"Batsman",img:MAHATRE},
  {name :"Kartik Sharma", role:"WK-Batsman",img:Sharma},
  {name: "Sarfraz Khan",role:"Batsman",img:Khan},
  {name: "Urvil Patel",role:"Batsman",img:Patel}
];

const cskallRounder=[{name: "Anshul Comboz",role: "All Rounder",img: COMBOZ},
  {name: "Jamie Overton",role:"All Rounder",img: OVERTON},
  {name: "RamaKrishna Ghosh",role:"All Rounder",img: GHOSH},
  {name : "Shivam Dube",role:"All Rounder",img:DUBE},
  {name: "Prashant Veer",role:"All Rounder",img:NOIMAGE},
  {name: "Matthew William Short",role:"All Rounder",img:NOIMAGE},
  {name: "Aman Khan",role:"All Rounder",img:NOIMAGE},
  {name: "Zak Foulkes",role:"All Rounder",img:NOIMAGE}
];

const cskbowlers=[{name:"Khaleel Ahmed",role:"Bolwer",img:AHMED},
  {name:"Noor Ahmad",role:"Bowler",img:AHMAD},
  {name:"Mukesh Choudhary",role:"Bowler",img:MUKESH},
  {name:"Nathan Ellis",role:"Bowler",img:NATHAN},
  {name:"Shreyas Gopal",role:"Bowler",img:GOPAL},
  {name:"Gurjapneet Singh",role:"Bowler",img:SINGH},
  {name:"Akeal Hossien",role:"Bowler",img:NOIMAGE},
  {name:"Matt Henry",role:"Bowler",img:NOIMAGE},
  {name:"Rahul Chahar",role:"Bolwer",img:NOIMAGE}
]

export { cskteamProfile, cskbatters, cskallRounder, cskbowlers };