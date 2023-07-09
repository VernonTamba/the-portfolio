import React from "react";
import "./Hobbies.css";
import Badminton from "../img/player.png";
import Football from "../img/soccer.png";
import Swimming from "../img/swimming.png";
import Piano from "../img/piano.png";
import Guitar from "../img/guitar-playing.png";

const Hobbies = ({ darkMode }) => {
  return (
    <div className={`Hobbies ${darkMode && "darkMode"}`}>
      <div className="Hobbies__top">
        <h1
          className={`Hobbies__title ${darkMode && "Hobbies__title--darkMode"}`}
        >
          Hobbies & Interests
        </h1>
        <div className="Hobbies__container">
          <div
            className={`Hobbies__item ${darkMode && "Hobbies__item--darkMode"}`}
          >
            <h2 className="Hobbies__name">Badminton</h2>
            <img src={Badminton} alt="badminton" />
          </div>
          <div
            className={`Hobbies__item ${darkMode && "Hobbies__item--darkMode"}`}
          >
            <h2 className="Hobbies__name">Football/Futsal</h2>
            <img src={Football} alt="football" />
          </div>
          <div
            className={`Hobbies__item ${darkMode && "Hobbies__item--darkMode"}`}
          >
            <h2 className="Hobbies__name">Swimming</h2>
            <img src={Swimming} alt="swimming" />
          </div>
          <div
            className={`Hobbies__item ${darkMode && "Hobbies__item--darkMode"}`}
          >
            <h2 className="Hobbies__name">Piano</h2>
            <img src={Piano} alt="piano" />
          </div>
          <div
            className={`Hobbies__item ${darkMode && "Hobbies__item--darkMode"}`}
          >
            <h2 className="Hobbies__name">Guitar</h2>
            <img src={Guitar} alt="guitar" />
          </div>
        </div>
      </div>
      <div className="Hobbies__bottom">
        <p className="Hobbies__footer">
          <span>Disclaimer:</span> Just a hobby. I love playing these things.
          But it certainly does not mean I am a pro or anything😁
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
