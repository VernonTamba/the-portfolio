import React from "react";
import "./MiniProjects.css";
import MovieGridVideo from "../video/movie-grid-vid.mp4";
import LandingPageVideo from "../video/simple-landing-page.mp4";
import NetflixVideo from "../video/netflix-clone.mp4";
import LINEVideo from "../video/line-clone.mp4";
import ExpensesInfoVideo from "../video/expenses-info.mp4";
import FamilyWebsiteVideo from "../video/family-website.mp4";
import RockPaperScissorsVideo from "../video/rock-paper-scissors.mp4";
import WindowsWebVideo from "../video/windows-web.mp4";
import TodoListVideo from "../video/todo-list.mp4";
import MovieListVideo from "../video/movie-list.mp4";

const MiniProjects = ({ darkMode }) => {
  const miniProjects = [
    {
      name: "Simple Landing Page: Light & Dark Mode",
      videoUrl: `${LandingPageVideo}`,
      description:
        "A landing page that is very simple yet responsive. Nothing extraordinary but it has dark mode?",
      techUsed: "HTML, CSS, JavaScript",
      codeUrl:
        "https://github.com/VernonTamba/simple-landing-page-light-dark-mode",
      demoUrl: "-",
    },
    {
      name: "Simple Movie Grid",
      videoUrl: `${MovieGridVideo}`,
      description:
        "Showing movies that are retrieved from The Movie Database (TMDB) that is being displayed in a grid form. Responsive and simple. With a bit of Framer Motion touches there.",
      techUsed: "React JS, CSS",
      codeUrl: "https://github.com/VernonTamba/simple-movie-grid",
      demoUrl: "-",
    },
    {
      name: "Netflix Clone",
      videoUrl: `${NetflixVideo}`,
      description:
        "A Netflix clone that only shows the front-end look of the real application. Perhaps not as similar to the Netflix now, but it still has that Netflix vibe!",
      techUsed: "React JS, CSS",
      codeUrl: "https://github.com/VernonTamba/netflix-clone-front-end",
      demoUrl: "-",
    },
    {
      name: "LINE Clone",
      videoUrl: `${LINEVideo}`,
      description:
        "A clone of a social media application called LINE. This clone is only about its front-end side/appearance. The logos used are from Material UI!",
      techUsed: "React JS, CSS",
      codeUrl: "https://github.com/VernonTamba/line-clone-front-end",
      demoUrl: "-",
    },
    {
      name: "Expenses List Info",
      videoUrl: `${ExpensesInfoVideo}`,
      description:
        "A small and simple app where it can store the expenses information and will display the summary information based on the specified year in the diagram form. As a matter of fact, this project was the requirement for my last phase of the internship interview in SRKK!",
      techUsed: "HTML, CSS (a bit of Bootstrap), JavaScript",
      codeUrl: "https://github.com/VernonTamba/expenses-list-info",
      demoUrl: "-",
    },
    {
      name: "Simple Family Website",
      videoUrl: `${FamilyWebsiteVideo}`,
      description:
        "My father asked me to create our family website. And this simple website was actually me trying to practice in making the family website. But, turns out, I have not started making my own family website. Hopefully, in the near future, I will be able to accomplish that.",
      techUsed: "HTML, CSS, JavaScript",
      codeUrl: "https://github.com/VernonTamba/simple-family-website",
      demoUrl: "-",
    },
    {
      name: "Simple Rock Scissors Paper Game",
      videoUrl: `${RockPaperScissorsVideo}`,
      description:
        "A very simple web-based rock paper scissors game. The animation is made and supported by GSAP. Truthfully speaking, the animation is sadly only working in full screen size and thus not responsive. But anyways, the game is still playable and presentable.",
      techUsed: "HTML, CSS, JavaScript",
      codeUrl: "https://github.com/VernonTamba/simple-rock-paper-scissors-game",
      demoUrl: "-",
    },
    {
      name: "Simple Windows Web",
      videoUrl: `${WindowsWebVideo}`,
      description:
        "Windows 11 in web! Just the front-end look of Windows 11. No functionalities or back-end things here unfortunately. Still, it looks quite similar, no?",
      techUsed: "HTML, CSS, JavaScript (with a tiny bits of GSAP)",
      codeUrl: "https://github.com/VernonTamba/simple-web-windows",
      demoUrl: "-",
    },
    {
      name: "Simple Todo List",
      videoUrl: `${TodoListVideo}`,
      description:
        "A very simple todo list app has the basic functionality of adding and removing the todos.",
      techUsed: "React JS, CSS",
      codeUrl: "https://github.com/VernonTamba/simple-todo-list-app",
      demoUrl: "-",
    },
    {
      name: "Simple Movie List",
      videoUrl: `${MovieListVideo}`,
      description:
        "Another movie grid app that brings you movies that you might be interested in. The movies are retrieved from an open movie database called OMDb API. Plus, this app has dark mode, man.",
      techUsed: "React JS, CSS",
      codeUrl: "https://github.com/VernonTamba/simple-movies-list",
      demoUrl: "-",
    },
  ];

  return (
    <div className={`MiniProjects ${darkMode && "darkMode"}`}>
      <h1 className="MiniProjects__title">Mini Projects</h1>
      <p className="MiniProjects__subtitle">
        Here are some of the simple mini projects I have done. Both old and new.
        I have arranged it ascendingly based on its last update in GitHub. I
        apologize in advance for the limitations/flaws/bugs that you will find
        in the codes and demo. I genuinely hope that you will enjoy exploring
        each of them😄
      </p>
      <div className="MiniProjects__container">
        {miniProjects.map((project) => (
          <div className="MiniProjects__item">
            <h2 className="MiniProjects__projectTitle">{project.name}</h2>
            <video autoPlay loop muted className="MiniProjects__preview">
              <source src={project.videoUrl} type="video/mp4" />
            </video>
            <p className="MiniProjects__description">{project.description}</p>
            <div className="MiniProjects__technologies">
              <p>{project.techUsed}</p>
            </div>
            <div className="MiniProjects__buttons">
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                Codes
              </a>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="MiniProjects__footer">
        My <b>GitHub</b>? Surf here:{" "}
        <a href="https://github.com/VernonTamba">
          https://github.com/VernonTamba
        </a>
      </p>
    </div>
  );
};

export default MiniProjects;
