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


const auctionData = {
  teams: [
    { id: "CSK", name: "Chennai Super Kings", img: CSK },
    { id: "DC", name: "Delhi Capitals", img: DC },
    { id: "GT", name: "Gujarat Titans", img: GT },
    { id: "KKR", name: "Kolkata Knight Riders", img: KKR },
    { id: "LSG", name: "Lucknow Super Giants", img: LSG },
    { id: "MI", name: "Mumbai Indians", img: MI },
    { id: "PBKS", name: "Punjab Kings", img: PBKS },
    { id: "RR", name: "Rajasthan Royals", img: RR },
    { id: "RCB", name: "Royal Challengers Bengaluru", img: RCB },
    { id: "SRH", name: "Sunrisers Hyderabad", img: SRH }
  ],

  players: [
    // CSK
    { id: 1001, playerName: "Kartik Sharma", teamId: "CSK", basePrice: 3000000, winningBid: 142000000, category: "uncapped" },
    { id: 1002, playerName: "Prashant Veer", teamId: "CSK", basePrice: 3000000, winningBid: 142000000, category: "uncapped" },
    { id: 1003, playerName: "Rahul Chahar", teamId: "CSK", basePrice: 10000000, winningBid: 52000000, category: "capped" },
    { id: 1004, playerName: "Matt Henry", teamId: "CSK", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 1005, playerName: "Akeal Hosein", teamId: "CSK", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 1006, playerName: "Matthew Short", teamId: "CSK", basePrice: 15000000, winningBid: 15000000, category: "capped" },
    { id: 1007, playerName: "Zak Foulkes", teamId: "CSK", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 1008, playerName: "Sarfaraz Khan", teamId: "CSK", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 1009, playerName: "Aman Khan", teamId: "CSK", basePrice: 3000000, winningBid: 4000000, category: "uncapped" },

    // DC
    { id: 2001, playerName: "Auqib Dar", teamId: "DC", basePrice: 3000000, winningBid: 84000000, category: "uncapped" },
    { id: 2002, playerName: "Pathum Nissanka", teamId: "DC", basePrice: 7500000, winningBid: 40000000, category: "capped" },
    { id: 2003, playerName: "Kyle Jamieson", teamId: "DC", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 2004, playerName: "Lungisani Ngidi", teamId: "DC", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 2005, playerName: "Ben Duckett", teamId: "DC", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 2006, playerName: "David Miller", teamId: "DC", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 2007, playerName: "Prithvi Shaw", teamId: "DC", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 2008, playerName: "Sahil Parakh", teamId: "DC", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // GT
    { id: 3001, playerName: "Jason Holder", teamId: "GT", basePrice: 20000000, winningBid: 70000000, category: "capped" },
    { id: 3002, playerName: "Tom Banton", teamId: "GT", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 3003, playerName: "Ashok Sharma", teamId: "GT", basePrice: 3000000, winningBid: 9000000, category: "uncapped" },
    { id: 3004, playerName: "Luke Wood", teamId: "GT", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 3005, playerName: "Prithviraj Yarra", teamId: "GT", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // KKR
    { id: 4001, playerName: "Cameron Green", teamId: "KKR", basePrice: 20000000, winningBid: 252000000, category: "capped" },
    { id: 4002, playerName: "Matheesha Pathirana", teamId: "KKR", basePrice: 20000000, winningBid: 180000000, category: "capped" },
    { id: 4003, playerName: "Mustafizur Rahman", teamId: "KKR", basePrice: 20000000, winningBid: 92000000, category: "capped" },
    { id: 4004, playerName: "Tejasvi Singh", teamId: "KKR", basePrice: 3000000, winningBid: 30000000, category: "uncapped" },
    { id: 4005, playerName: "Rachin Ravindra", teamId: "KKR", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 4006, playerName: "Finn Allen", teamId: "KKR", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 4007, playerName: "Tim Seifert", teamId: "KKR", basePrice: 15000000, winningBid: 15000000, category: "capped" },
    { id: 4008, playerName: "Akash Deep", teamId: "KKR", basePrice: 10000000, winningBid: 10000000, category: "capped" },
    { id: 4009, playerName: "Rahul Tripathi", teamId: "KKR", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 4010, playerName: "Daksh Kamra", teamId: "KKR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 4011, playerName: "Sarthak Ranjan", teamId: "KKR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 4012, playerName: "Prashant Solanki", teamId: "KKR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 4013, playerName: "Kartik Tyagi", teamId: "KKR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // LSG
    { id: 5001, playerName: "Josh Inglis", teamId: "LSG", basePrice: 20000000, winningBid: 86000000, category: "capped" },
    { id: 5002, playerName: "Mukul Choudhary", teamId: "LSG", basePrice: 3000000, winningBid: 26000000, category: "uncapped" },
    { id: 5003, playerName: "Akshat Raghuwanshi", teamId: "LSG", basePrice: 3000000, winningBid: 22000000, category: "uncapped" },
    { id: 5004, playerName: "Anrich Nortje", teamId: "LSG", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 5005, playerName: "Wanindu Hasaranga", teamId: "LSG", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 5006, playerName: "Naman Tiwari", teamId: "LSG", basePrice: 3000000, winningBid: 10000000, category: "uncapped" },

    // MI
    { id: 6001, playerName: "Quinton De Kock", teamId: "MI", basePrice: 10000000, winningBid: 10000000, category: "capped" },
    { id: 6002, playerName: "Mayank Rawat", teamId: "MI", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 6003, playerName: "Atharva Ankolekar", teamId: "MI", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 6004, playerName: "Mohammad Izhar", teamId: "MI", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 6005, playerName: "Danish Malewar", teamId: "MI", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // PBKS
    { id: 7001, playerName: "Ben Dwarshuis", teamId: "PBKS", basePrice: 10000000, winningBid: 44000000, category: "capped" },
    { id: 7002, playerName: "Cooper Connolly", teamId: "PBKS", basePrice: 20000000, winningBid: 30000000, category: "capped" },
    { id: 7003, playerName: "Vishal Nishad", teamId: "PBKS", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 7004, playerName: "Pravin Dubey", teamId: "PBKS", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // RR
    { id: 8001, playerName: "Ravi Bishnoi", teamId: "RR", basePrice: 20000000, winningBid: 72000000, category: "capped" },
    { id: 8002, playerName: "Adam Milne", teamId: "RR", basePrice: 20000000, winningBid: 24000000, category: "capped" },
    { id: 8003, playerName: "Ravi Singh", teamId: "RR", basePrice: 3000000, winningBid: 9500000, category: "uncapped" },
    { id: 8004, playerName: "Sushant Mishra", teamId: "RR", basePrice: 3000000, winningBid: 9000000, category: "uncapped" },
    { id: 8005, playerName: "Kuldeep Sen", teamId: "RR", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 8006, playerName: "Brijesh Sharma", teamId: "RR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 8007, playerName: "Aman Rao Perala", teamId: "RR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 8008, playerName: "Vignesh Puthur", teamId: "RR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 8009, playerName: "Yash Raj Punja", teamId: "RR", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // RCB
    { id: 9001, playerName: "Venkatesh Iyer", teamId: "RCB", basePrice: 20000000, winningBid: 70000000, category: "capped" },
    { id: 9002, playerName: "Mangesh Yadav", teamId: "RCB", basePrice: 3000000, winningBid: 52000000, category: "uncapped" },
    { id: 9003, playerName: "Jacob Duffy", teamId: "RCB", basePrice: 20000000, winningBid: 20000000, category: "capped" },
    { id: 9004, playerName: "Jordan Cox", teamId: "RCB", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 9005, playerName: "Kanishk Chouhan", teamId: "RCB", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 9006, playerName: "Vihaan Malhotra", teamId: "RCB", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 9007, playerName: "Vicky Ostwal", teamId: "RCB", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 9008, playerName: "Satvik Deswal", teamId: "RCB", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },

    // SRH
    { id: 10001, playerName: "Liam Livingstone", teamId: "SRH", basePrice: 20000000, winningBid: 130000000, category: "capped" },
    { id: 10002, playerName: "Jack Edwards", teamId: "SRH", basePrice: 5000000, winningBid: 30000000, category: "uncapped" },
    { id: 10003, playerName: "Salil Arora", teamId: "SRH", basePrice: 3000000, winningBid: 15000000, category: "uncapped" },
    { id: 10004, playerName: "Shivam Mavi", teamId: "SRH", basePrice: 7500000, winningBid: 7500000, category: "capped" },
    { id: 10005, playerName: "Krains Fuletra", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 10006, playerName: "Praful Hinge", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 10007, playerName: "Amit Kumar", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 10008, playerName: "Onkar Tarmale", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 10009, playerName: "Sakib Hussain", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" },
    { id: 10010, playerName: "Shivang Kumar", teamId: "SRH", basePrice: 3000000, winningBid: 3000000, category: "uncapped" }
  ]
};

export default auctionData;