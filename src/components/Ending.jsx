import React from "react";
import "./Ending.css";
import logo from "../logo.svg";
import LoveProfilePicture from "../img/vernon-1-nobg-cropped.png";

const Ending = ({ darkMode }) => {
  return (
    <div className={`Ending ${darkMode && "darkMode"}`}>
      <h1 className="Ending__title">THE END OF MY PORTFOLIO!</h1>
      <p className="Ending__content">
        Thank you for scrolling down up until the very end. I genuinely
        appreciate your time. I hope you somehow have found this portfolio
        enjoyable to look and read despite of its simplicity and staticness.
        Hopefully, I can become better in the near future and improve this
        portfolio. This is all from me, much blessings to you!
      </p>
      <p className="Ending__contentFooter">Much luv and have a lovely day!</p>
      <div className="Ending__footerDiv">
        <h2 className="Ending__footer">
          This portfolio is built with React JS
        </h2>
        <img src={logo} className="Ending__footerLogo" alt="react-logo" />
      </div>
      <img
        className="Ending__profilePicture"
        src={LoveProfilePicture}
        alt="me"
      />
    </div>
  );
};

export default Ending;
