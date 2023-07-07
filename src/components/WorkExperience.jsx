import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="WorkExperience">
      <h1 className="WorkExperience__title">Work Experience</h1>
      <div className="WorkExperience__description">
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
      <p className="WorkExperience__footer">
        Well, so far I have only had an internship once and sadly it was not
        "web dev related". Not going to lie, this means that I do not have any
        experiences whatsoever in the web development industry. And I also
        believe that I have a very long way to go. These situations made me
        super excited and at the same time super nervous as I will work with
        other web developers out there for the very first time! I hope I will
        have that opportunity sooner or later! Let's get more work experiences
        to learn, grow, and ultimately become better!
      </p>
    </div>
  );
};

export default WorkExperience;
