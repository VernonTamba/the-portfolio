import React from "react";
import "./Main.css";
import MyProfilePicture from "../img/vernon-2-nobg-cropped.png";

const Main = ({ darkMode }) => {
  return (
    <div className={`Main ${darkMode && "darkMode"}`}>
      <h2 className="Main__header">Brief intro about me!</h2>
      <div className={`Main__content ${darkMode && "Main__content--darkMode"}`}>
        <div className="Main__left">
          <img src={MyProfilePicture} alt="me" />
        </div>
        <div className="Main__right">
          <p className="Main__description">
            Hi, again! My name is <span>Vernon Joseph Yeremia Tamba</span> from
            Bekasi, Indonesia. I am an Information Technology fresh graduate and{" "}
            <span>
              genuinely aspiring to be involved in the web development world
            </span>
            . Dreaming of having the opportunity on being involved in making
            awesome, engaging, and user-friendly web apps with other developers
            out there! Ready to learn from them and explore more about web dev
            things which I have not used and known yet!
          </p>
        </div>
      </div>
      <h2 className="Main__footer">Born in APRIL 8, 2001 --- 22 years old</h2>
    </div>
  );
};

export default Main;
