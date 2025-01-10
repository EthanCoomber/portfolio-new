import React, {useContext, useState, useEffect} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      {/* <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div> */}
      <div className="loading-container">
        <div className="loading-bar">
          <div 
            className="loading-progress"
            style={{
              width: `${loadingProgress}%`,
              backgroundColor: isDark ? "#00ff95" : "#37538C",
              height: "4px",
              transition: "width 0.2s ease-in-out"
            }}
          />
        </div>
        <p className={isDark ? "dark-mode loading-text" : "loading-text"}>
          Loading... {loadingProgress}%
        </p>
      </div>
    </div>
  );
}
