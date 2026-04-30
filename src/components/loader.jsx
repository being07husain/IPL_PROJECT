import React, { useEffect, useRef, useState } from "react";
import "../styles/main.css";
import video from "../assets/logos/LOADER2.mp4";

const VideoLoader = ({ onFinish }) => {
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);
  const finishedRef = useRef(false);

  const finishLoader = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    setFade(true);
    setTimeout(() => {
      onFinish();
    }, 900);
  };

  // Normal video end
  const handleEnd = () => {
    finishLoader();
  };

  // Handle tab switching
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        // User switched tab → skip loader
        finishLoader();
      } else if (document.visibilityState === "visible") {
        // Resume if still visible
        videoRef.current?.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className={`loader ${fade ? "fade-out" : ""}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        className="loader-video"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoLoader;
