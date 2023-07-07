import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <h2 className="Main__header">Brief intro about me!</h2>
      <div className="Main__content">
        <div className="Main__left">
          <img
            src="https://i.guim.co.uk/img/uploads/2017/10/06/David-Shariatmadari,-L.png?width=300&quality=85&auto=format&fit=max&s=528f2fda71b31830ef9f0acbe9a4aa3c"
            alt="me"
          />
        </div>
        <div className="Main__right">
          <p className="Main__description">
            Hi, again! My name is <span>Vernon Joseph Yeremia Tamba</span> from
            Indonesia. I am an Information Technology fresh graduate and{" "}
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
      <h2 className="Main__footer">Put something here ...</h2>
    </div>
  );
};

export default Main;
