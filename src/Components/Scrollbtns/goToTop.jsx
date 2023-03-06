import React, { useEffect, useState } from "react";
import pfp from '../../Assets/pfp.png';
import "./goToTop.css";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    
    <div className="Wapperbtn" >
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
         
          <img src={pfp} className="logoScrollTop" alt="logo" />
          
        </div>
      )}
    </div>
  );
};
export default GoToTop;