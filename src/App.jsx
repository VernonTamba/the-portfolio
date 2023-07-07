import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import MiniProjects from "./components/MiniProjects";
import Hobbies from "./components/Hobbies";
import ContactMe from "./components/ContactMe";
import Ending from "./components/Ending";

// TODO:
// - Download all the images

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* NAVBAR/HEADER */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ABOUT ME INTRO/LANDING PAGE */}
      <Intro />

      {/* WHAT DO I WANT TO BECOME/DO? */}
      <Main />

      {/* EDUCATION */}
      <Education />

      {/* WORK EXPERIENCE */}
      <WorkExperience />

      {/* PERSONAL MINI PROJECTS */}
      <MiniProjects />

      {/* HOBBIES/INTERESTS */}
      <Hobbies />

      {/* CONTACT ME */}
      <ContactMe />

      {/* THANK YOU "Thank you for scrolling up to the end!" */}
      <Ending />
    </div>
  );
}

export default App;
