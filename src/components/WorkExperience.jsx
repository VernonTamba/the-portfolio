import React from "react";
import "./WorkExperience.css";

const WorkExperience = ({ darkMode }) => {
  return (
    <div className={`WorkExperience ${darkMode && "darkMode"}`}>
      <h1
        className={`WorkExperience__title ${
          darkMode && "WorkExperience__title--darkMode"
        }`}
      >
        Work Experience
      </h1>
      <div
        className={`WorkExperience__description ${
          darkMode && "WorkExperience__description--darkMode"
        }`}
      >
        <img
          className="WorkExperience__image"
          src="https://www.srkk.com/wp-content/uploads/2023/01/SRKK-logo-2022-01.png"
          alt="srkk"
        />
        {/* <h2 className="WorkExperience__company">SRKK</h2> */}
        <p className="WorkExperience__company">
          SRKK UK • Klang, Selangor, Malaysia • ONLINE
        </p>
        <p className="WorkExperience__roleYear">
          <span>SharePoint Developer Intern</span>, August 2022 - November 2022
        </p>
        <p className="WorkExperience__work">
          <span>What I did:</span> Learned and built mini projects and programs
          using Nintex. The Nintex technologies include Nintex Robotic Process
          Automation and Nintex Workflow Cloud. Integrated with SharePoint as
          the data source (SharePoint List)
        </p>
      </div>
      <p
        className={`WorkExperience__footer ${
          darkMode && "WorkExperience__footer--darkMode"
        }`}
      >
        Well, so far I have only had an internship once and sadly it was not
        "web dev related". Not going to lie, this means that I do not have any
        experiences whatsoever in the web development industry. And I also
        believe that I have a very long way to go. These situations made me
        super excited and at the same time super nervous because if I get the
        chance to work with a role as a web dev, that will become my very first
        time to be involved in a web development world! I hope I will have that
        opportunity sooner or later! Just praying and hoping for the best.
      </p>
    </div>
  );
};

export default WorkExperience;
