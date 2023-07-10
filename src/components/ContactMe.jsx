import React from "react";
import "./ContactMe.css";
import GitHub from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import WhatsApp from "../img/whatsapp.png";
import Gmail from "../img/gmail.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";

const ContactMe = ({ darkMode }) => {
  const GITHUB_URL = "https://github.com/VernonTamba";
  const LINKEDIN_URL = "https://linkedin.com/in/vernon-joseph-yeremia-tamba";
  const INSTAGRAM_URL = "https://www.instagram.com/bernuntambz/";
  const FACEBOOK_URL = "https://www.facebook.com/vernon.tamba.54/";
  const WHATSAPP_URL = "https://web.whatsapp.com/";
  const GMAIL_URL = "https://mail.google.com/?";

  const contactInfo = [
    {
      appName: "GitHub",
      imgUrl: `${GitHub}`,
      contactName: "Vernon Tamba",
      appUrl: `${GITHUB_URL}`,
    },
    {
      appName: "LinkedIn",
      imgUrl: `${LinkedIn}`,
      contactName: "Vernon Joseph Yeremia Tamba",
      appUrl: `${LINKEDIN_URL}`,
    },
    {
      appName: "Phone & WhatsApp",
      imgUrl: `${WhatsApp}`,
      contactName: "(+62)87808073353",
      appUrl: `${WHATSAPP_URL}`,
    },
    {
      appName: "Gmail",
      imgUrl: `${Gmail}`,
      contactName: "vernon.tamba777@gmail.com",
      appUrl: `${GMAIL_URL}`,
    },
    {
      appName: "Instagram",
      imgUrl: `${Instagram}`,
      contactName: "@bernuntambz",
      appUrl: `${INSTAGRAM_URL}`,
    },
    {
      appName: "Facebook & Messenger",
      imgUrl: `${Facebook}`,
      contactName: "Vernon Tamba",
      appUrl: `${FACEBOOK_URL}`,
    },
  ];

  return (
    <div className={`ContactMe ${darkMode && "darkMode"}`}>
      <h1 className="ContactMe__title">Let us get connected!</h1>
      <div className="ContactMe__container">
        {contactInfo.map((contact) => (
          <a
            className={`ContactMe__item ${
              darkMode && "ContactMe__item--darkMode"
            }`}
            href={contact.appUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ContactMe__appLogo"
              src={contact.imgUrl}
              alt="appLogo"
            />
            <div className="ContactMe__description">
              <h2 className="ContactMe__appName">{contact.appName}</h2>
              <p className="ContactMe__profileName">{contact.contactName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
