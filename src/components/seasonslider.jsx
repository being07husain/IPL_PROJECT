import React, { useEffect, useState } from "react";
import { getAllSeasons } from "../services/SeasonDataService";

function SeasonCards() {

  const [seasons, setSeasons] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // load data
  useEffect(() => {
    setSeasons(getAllSeasons());
  }, []);

  // auto slide (smooth + pause support)
  useEffect(() => {
    if (seasons.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === seasons.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [seasons, isPaused]);

  // jersey color mapping
  const teamColors = {
    "Chennai Super Kings": "linear-gradient(180deg,#e6c300,#b39500)",
    "Mumbai Indians": "linear-gradient(180deg,#004ba0,#002a5c)",
    "Royal Challengers Bangalore": "linear-gradient(180deg,#cc0000,#800000)",
    "Kolkata Knight Riders": "linear-gradient(180deg,#3b0a45,#24062a)",
    "Sunrisers Hyderabad": "linear-gradient(180deg,#e65c00,#993d00)",
    "Rajasthan Royals": "linear-gradient(180deg,#ff3399,#b30059)",
    "Delhi Capitals": "linear-gradient(180deg,#00416a,#002135)",
    "Gujarat Titans": "linear-gradient(180deg,#141e30,#0a0f18)",
    "Lucknow Super Giants": "linear-gradient(180deg,#00c6ff,#0059b3)",
    "Deccan Chargers": "linear-gradient(180deg,#1e90ff,#0a3d91)",
    "Kochi Tuskers Kerala": "linear-gradient(180deg,#2ecc71,#1c6b3a)"
  };

  // next
  const nextSeason = () => {
    setCurrentIndex(
      currentIndex === seasons.length - 1 ? 0 : currentIndex + 1
    );
  };

  // prev
  const prevSeason = () => {
    setCurrentIndex(
      currentIndex === 0 ? seasons.length - 1 : currentIndex - 1
    );
  };

  if (seasons.length === 0) return <h2>Loading...</h2>;

  return (
    <div className="season-container">

      <div className="title-container">
        <div className="title-line left"></div>
        <h1 className="season-title">IPL SEASONS <span>(2008 - 2025)</span></h1>
        <div className="title-line right"></div>
      </div>

      <div className="season-slider">

        <button className="nav-btn" onClick={prevSeason}>&#10094;</button>

        <div
          className="season-card-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="season-card-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {seasons.map((season, index) => {
              const dynamicColor =
                teamColors[season.champion] ||
                "linear-gradient(180deg,#1565c0,#0d47a1)";

              return (
                <div className="season-slide" key={index}>
                  <div className="season-card">

                    <div className="season-year-badge-wrapper">
                      <div className="season-year-badge">IPL {season.year}</div>
                    </div>

                    <div className="all-cards-row">

                      {/* ORANGE CAP */}
                      <div className="card-section bg-orange">
                        <div className="card-header">ORANGE CAP</div>
                        <img src={season.OrangeLeaderPIC} alt="orange cap" />
                        <h3>{season.orangeCap}</h3>
                        <p>🏏 Runs: {season.orangeRuns}</p>
                      </div>

                      {/* CHAMPIONS */}
                      <div className="champions-section" style={{ background: dynamicColor }}>
                        <div className="card-header">CHAMPIONS</div>
                        <img src={season.championImg} alt="champion" />
                        <div className="champ-bottom">
                          <span className="trophy-icon">🏆</span>
                          <span className="champ-name">{season.champion}</span>
                        </div>
                      </div>

                      {/* PURPLE CAP */}
                      <div className="card-section bg-red">
                        <div className="card-header">PURPLE CAP</div>
                        <img src={season.PurpleLeaderPIC} alt="purple cap" />
                        <h3>{season.purpleCap}</h3>
                        <p>🏐 Wickets: {season.wickets}</p>
                      </div>

                      {/* PLAYER OF THE SERIES */}
                      <div className="card-section bg-blue">
                        <div className="card-header">PLAYER OF THE SERIES</div>
                        <img src={season.PlayerOfTheSeriesPIC} alt="player" />
                        <h3>⭐ {season.playerOfSeries}</h3>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="nav-btn" onClick={nextSeason}>&#10095;</button>

      </div>

      {/* DOTS */}
      <div className="season-dots">
        {seasons.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={
              dotIndex === currentIndex
                ? "season-dot active"
                : "season-dot"
            }
            onClick={() => setCurrentIndex(dotIndex)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default SeasonCards;