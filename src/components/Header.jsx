import React from "react";
import "./Header.css";
import lightModeImage from "../img/light.png";
import darkModeImage from "../img/night-mode.png";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`Header ${darkMode && "darkMode"}`}>
      <h1 className="Header__logo">V-Portfolio</h1>
      <img
        className={`Header__mode ${darkMode && "Header__mode--darkMode"}`}
        src={darkMode ? lightModeImage : darkModeImage}
        alt="darkLightMode"
        onClick={() => setDarkMode(!darkMode)}
      />
    </header>
  );
};

export default Header;
