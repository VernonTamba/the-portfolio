import React from "react";
import "./ContactMe.css";
import GitHub from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import WhatsApp from "../img/whatsapp.png";
import Gmail from "../img/gmail.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";

const ContactMe = ({ darkMode }) => {
  const GITHUB_URL = "";
  const LINKEDIN_URL = "";
  const INSTAGRAM_URL = "";
  const FACEBOOK_URL = "";
  const WHATSAPP_URL = "";
  const GMAIL_URL = "";

  return (
    <div className={`ContactMe ${darkMode && "darkMode"}`}>
      <h1 className="ContactMe__title">Let us get connected!</h1>
      <div className="ContactMe__container">
        <a
          className="ContactMe__item"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={GitHub} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">GitHub</h2>
            <p className="ContactMe__profileName">Vernon Tamba</p>
          </div>
        </a>
        <a
          className="ContactMe__item"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={LinkedIn} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">LinkedIn</h2>
            <p className="ContactMe__profileName">
              Vernon Joseph Yeremia Tamba
            </p>
          </div>
        </a>
        <a
          className="ContactMe__item"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={WhatsApp} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">Phone & WhatsApp</h2>
            <p className="ContactMe__profileName">(+62)87808073353</p>
          </div>
        </a>
        <a
          className="ContactMe__item"
          href={GMAIL_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={Gmail} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">Gmail</h2>
            <p className="ContactMe__profileName">vernon.tamba777@gmail.com</p>
          </div>
        </a>
        <a
          className="ContactMe__item"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={Instagram} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">Instagram</h2>
            <p className="ContactMe__profileName">@bernuntambz</p>
          </div>
        </a>
        <a
          className="ContactMe__item"
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="ContactMe__appLogo" src={Facebook} alt="appLogo" />
          <div className="ContactMe__description">
            <h2 className="ContactMe__appName">Facebook & Messenger</h2>
            <p className="ContactMe__profileName">Vernon Tamba</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
