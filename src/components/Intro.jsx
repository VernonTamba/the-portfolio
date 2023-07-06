import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="Intro__left">
        <h1 className="Intro__title">Hello World!</h1>
        <p className="Intro__subtitle">
          Welcome to my humble and simple portfolio. Thank you for stopping by.
          From the bottom of my heart, I hope you will enjoy scrolling until the
          very end. Much luv!
        </p>
        {/* <p className="Intro__subtitle">Let's start!</p> */}
      </div>
      <div className="Intro__right">
        {/* Put image of yourself */}
        <img
          className="Intro__profilePicture"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/228afacd-dd9a-43d0-a47d-637191012049/d6ai27n-d9664d2f-7ccd-44be-a67d-31a6352c8154.png/v1/fill/w_1192,h_670/random_asian_guy_by_acarobasito_d6ai27n-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjI4YWZhY2QtZGQ5YS00M2QwLWE0N2QtNjM3MTkxMDEyMDQ5XC9kNmFpMjduLWQ5NjY0ZDJmLTdjY2QtNDRiZS1hNjdkLTMxYTYzNTJjODE1NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.G4ytqY42wAfv-MIcNI6rXncRLlD8_aLnP0d1RbKlHEo"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
