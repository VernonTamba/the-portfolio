import { useState } from "react";
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
// - Change the a tags to link

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      {/* NAVBAR/HEADER */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ABOUT ME INTRO/LANDING PAGE */}
      <Intro darkMode={darkMode} />

      {/* WHAT DO I WANT TO BECOME/DO? */}
      <Main darkMode={darkMode} />

      {/* EDUCATION */}
      <Education darkMode={darkMode} />

      {/* WORK EXPERIENCE */}
      <WorkExperience darkMode={darkMode} />

      {/* PERSONAL MINI PROJECTS */}
      <MiniProjects darkMode={darkMode} />

      {/* HOBBIES/INTERESTS */}
      <Hobbies darkMode={darkMode} />

      {/* CONTACT ME */}
      <ContactMe darkMode={darkMode} />

      {/* THANK YOU "Thank you for scrolling up to the end!" */}
      <Ending darkMode={darkMode} />
    </div>
  );
}

export default App;
