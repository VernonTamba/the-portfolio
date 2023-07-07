import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="Education">
      <div className="Education__left">
        <h1 className="Education__title">Education</h1>
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
      <div className="Education__right">
        <img
          className="Education__schoolLogo"
          src="https://upload.wikimedia.org/wikipedia/en/3/36/Adventist_University_of_the_Philippines_logo.png"
          alt="AUP Logo"
        />
      </div>
    </div>
  );
};

export default Education;
