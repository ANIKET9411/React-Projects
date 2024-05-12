import { useState } from "react";
import html1 from "../../Components/My work/photos/tedtalk.png";
import html2 from "../../Components/My work/photos/realestate.png";
import html3 from "../../Components/My work/photos/aria.png";
import js1 from "../../Components/My work/photos/Resume_builder.png";
import js2 from "../../Components/My work/photos/Pockeymon.png";
import js3 from "../../Components/My work/photos/leaderboard.png";
import rjs1 from "../../Components/My work/photos/password_generator.png";
import rjs2 from "../../Components/My work/photos/paragrapgh_generator.png";

import "./Mywork.css";
function Mywork() {
  let projects = [
    {
      type: "HTML",
      image: html1,
      name: "TED TALKS",
      hosted_link: "https://aniket9411.github.io/TEDTALKS-Project/",
      github_link: "https://github.com/ANIKET9411/TEDTALKS-Project.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "HTML",
      image: html2,
      name: "REAL ESTATE",
      hosted_link: "https://aniket9411.github.io/THE-REAL-ESTATE/",
      github_link: "https://github.com/ANIKET9411/THE-REAL-ESTATE.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "HTML",
      image: html3,
      name: "ARIA",
      hosted_link: "https://aniket9411.github.io/MAJOR-PROJECT/",
      github_link: "https://github.com/ANIKET9411/MAJOR-PROJECT.git",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "REACT",
      image: rjs1,
      name: "RANDOM PASSWORD GENERATOR",
      hosted_link: "https://aniket-jauhri-weekly-test-1.netlify.app/",
      github_link:
        "https://github.com/ANIKET9411/React-Projects/tree/main/Weekly_test_1",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "REACT",
      image: rjs2,
      name: "PARAGRAPH GENERATOR",
      hosted_link:
        "https://663a02beaa4c1800744feb20--aniket-jauhri-day-5-homework.netlify.app/",
      github_link:
        "https://github.com/ANIKET9411/React-Projects/tree/main/Day_5_Homework",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    // {
    //   type: "REACT",
    //   image: "",
    //   name: "2",
    //   hosted_link: "",
    //   github_link: "",
    // },
    {
      type: "JS",
      image: js1,
      name: "RESUME BUILDER WITH AI",
      hosted_link: "https://aniket9411.github.io/Interview-Ready-with-AI/",
      github_link: "https://github.com/ANIKET9411/Interview-Ready-with-AI",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "JS",
      image: js2,
      name: "POKEMON",
      hosted_link: "https://aniket9411.github.io/New-Pokemon/",
      github_link: "https://github.com/ANIKET9411/New-Pokemon",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
    {
      type: "JS",
      image: js3,
      name: "LEADERBOARD",
      hosted_link: "https://aniket9411.github.io/LeaderBoard-Project/",
      github_link: "https://github.com/ANIKET9411/LeaderBoard-Project",
      description:
        "Web developer with expertise in creating innovative and user-friendly websites. Skilled in HTML, CSS, JavaScript, ",
    },
  ];
  function setup(type) {
    setvalue(type);
  }
  let [value, setvalue] = useState("HTML");

  return (
    <div className="mywork" id="my_work">
      <div className="mywork_inner">
        <h1>MY WORK</h1>
        <div className="mywork_nav menu menu-1">
          <span
            className=""
            onClick={() => {
              setup("HTML");
            }}
          >
            HTML
          </span>
          <span
            onClick={() => {
              setup("JS");
            }}
          >
            JAVASCRIPT
          </span>
          <span
            onClick={() => {
              setup("REACT");
            }}
          >
            REACTJS
          </span>
        </div>
        <div className="mywork_main">
          {projects.map((ele) => {
            if (value == ele.type) {
              console.log(ele.name);
              return (
                <div className="Project">
                  <img src={ele.image} height={"100%"} width={"100%"} />
                  <div className="project_detail">
                    <h2>{ele.name}</h2>
                    <p>{ele.description}</p>
                    <div className="project_links">
                      <a href={ele.github_link}>
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a href={ele.hosted_link}>
                        <i class="fa-solid fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Mywork;
