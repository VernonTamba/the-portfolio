import React from "react";
import "./Intro.css";
import WavingMan from "../img/waving-man.gif";
import WavingWoman from "../img/waving-woman.gif";

const Intro = ({ darkMode }) => {
  return (
    <div className={`Intro ${darkMode && "darkMode"}`}>
      <div className="Intro__left">
        <img
          className="Intro__profilePicture"
          src={WavingMan}
          alt="waving-man"
        />
      </div>
      <div className="Intro__middle">
        <h1 className={`Intro__title ${darkMode && "Intro__title--darkMode"}`}>
          Hello World!
        </h1>
        <p className="Intro__subtitle">
          Welcome to my humble and simple portfolio. Thank you for stopping by.
          From the bottom of my heart, I hope you will enjoy scrolling until the
          very end. Much luv!
        </p>
      </div>
      <div className="Intro__right">
        <img
          className="Intro__profilePicture"
          src={WavingWoman}
          alt="waving-woman"
        />
      </div>
    </div>
  );
};

export default Intro;
