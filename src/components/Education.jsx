import React from "react";
import "./Education.css";
import AUPLogo from "../img/aup-logo.png";

const Education = ({ darkMode }) => {
  return (
    <div className={`Education ${darkMode && "darkMode"}`}>
      <div className="Education__left">
        <h1
          className={`Education__title ${
            darkMode && "Education__title--darkMode"
          }`}
        >
          Education
        </h1>
        <div className="Education__description">
          <h2 className="Education__schoolName">
            Adventist University of the Philippines
          </h2>
          <p className="Education__course">
            Bachelor of Science in Information Technology
          </p>
          <p className="Education__year">August 2019 - May 2023</p>
        </div>
      </div>
      <div
        className={`Education__right ${
          darkMode && "Education__right--darkMode"
        }`}
      >
        <img className="Education__schoolLogo" src={AUPLogo} alt="AUP Logo" />
      </div>
    </div>
  );
};

export default Education;
