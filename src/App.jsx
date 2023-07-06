import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* NAVBAR/HEADER */}
      {/* <Header /> */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ABOUT ME INTRO/LANDING PAGE */}
      {/* <Intro /> */}
      <Intro />

      {/* WHAT DO I WANT TO BECOME/DO? */}
      {/* <Main */}
      <Main />

      {/* EDUCATION */}
      {/* <Education /> */}

      {/* WORK EXPERIENCE */}
      {/* <WorkExperience /> */}

      {/* PERSONAL MINI PROJECTS */}
      {/* <MiniProjects /> */}

      {/* HOBBIES/INTERESTS */}
      {/* <Hobbies /> */}

      {/* CONTACT ME */}
      {/* <ContactMe /> */}

      {/* THANK YOU "Thank you for scrolling up to the end!" */}
      {/* <Ending /> */}
    </div>
  );
}

export default App;
