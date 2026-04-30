import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoLoader from "./components/loader";
import HEADER from "./components/header";
import NAVBAR from "./components/navbar";
import FOOTER from "./components/footer";

import HOME from "./pages/home";
import Teams from "./pages/teams";
import AboutIPL from "./pages/AboutIPL";
import ChennaiSuperKings from "./pages/teams/chennai-super-kings";
import DelhiCapitals from "./pages/teams/delhi-capitals";
import GujaratTitans from "./pages/teams/gujarat-titans";
import KolkataKnightRiders from "./pages/teams/kolkata-knight-riders";
import LucknowSuperGiants from "./pages/teams/lucknow-super-giants";
import MumbaiIndians from "./pages/teams/mumbai-indians";
import PunjabKings from "./pages/teams/punjab-kings";
import RajasthanRoyals from "./pages/teams/rajasthan-royals";
import RoyalChallengersBengaluru from "./pages/teams/royal-challengers-bengaluru";
import SunrisersHyderabad from "./pages/teams/sunrisers-hyderabad";
import Leaderboard from "./pages/Auction";
// import MATCHES from "./pages/matches";
// import POINTSTABLE from "./pages/pointstable";
// import VIDEOS from "./pages/videos";
// import STATS from "./pages/stats";
// import AUCTION from "./pages/auction";
// import ABOUT from "./pages/about";

import "./App.css";
import "./styles/main.css";
import "./styles/seasonslider.css";
import "./styles/teams/Cskteam.css";
import "./styles/teams/DCteam.css";
import "./styles/teams/GTteam.css";
import "./styles/teams/KKRteam.css";
import "./styles/teams/LSGteam.css";
import "./styles/teams/MIteam.css";
import "./styles/teams/PBKSteam.css";
import "./styles/teams/RRteam.css";
import "./styles/teams/RCBteam.css";
import "./styles/teams/SRHteam.css";
import "./styles/IPLofficial.css";
import "./styles/TeamPage.css";
import "./styles/OfficialAPP.css";
import "./styles/Auction.css";
import "./styles/topbar.css";
import "./styles/navbar.css";
import "./styles/footer.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading ? (
        <VideoLoader onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <div className="theme-modern">
            <HEADER />
            <NAVBAR />

            {/* 🔀 ROUTES */}
            <Routes>
              <Route path="/" element={<HOME />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/about-ipl" element={<AboutIPL />} />
              <Route path="/teams/chennai-super-kings" element={<ChennaiSuperKings />} />
              <Route path="/teams/delhi-capitals" element={<DelhiCapitals />} />
              <Route path="/teams/gujarat-titans" element={<GujaratTitans />} />
              <Route path="/teams/kolkata-knight-riders" element={<KolkataKnightRiders />} />
              <Route path="/teams/lucknow-super-giants" element={<LucknowSuperGiants />} />
              <Route path="/teams/mumbai-indians" element={<MumbaiIndians />} />
              <Route path="/teams/punjab-kings" element={<PunjabKings />} />
              <Route path="/teams/rajasthan-royals" element={<RajasthanRoyals />} />
              <Route path="/teams/royal-challengers-bengaluru" element={<RoyalChallengersBengaluru />} />
              <Route path="/teams/sunrisers-hyderabad" element={<SunrisersHyderabad />} />
              <Route path="/auction" element={<Leaderboard />} />
              {/* <Route path="/matches" element={<MATCHES />} />
              <Route path="/points-table" element={<POINTSTABLE />} />
    
              <Route path="/videos" element={<VIDEOS />} />
              <Route path="/stats" element={<STATS />} />
              <Route path="/auction" element={<AUCTION />} /> */}
            </Routes>
            <FOOTER />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
