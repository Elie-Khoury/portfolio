import PropTypes from "prop-types";
import s from "./home.module.scss";
import { ChevronsRight } from "lucide-react";
import { Download } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import Model from "./components/model";
import myImg from "./images/priest.webp";

function Home(props) {
  const handleClick = () => {
    const container = document.querySelector(`.${s.gridContainer}`);

    if (container) {
      container.classList.add(s.animateOut);

      setTimeout(() => {
        container.classList.remove(s.animateOut);
        props.toggleHomeActive();
      }, 2500);
    } else {
      console.error("Element not found");
    }
  };

  return (
    <div className={s.gridContainer}>
      <div className={s.gridWrapper}>
        <div id={s.container_1} className={s.container}>
          <h2>Who am I?</h2>
          <p>
            Hi, my name is Elie El Khoury. I am a Senior Computer and
            Communcations Engineer at Notre Dame University - Louaize with a
            passion for software development. I am currently learning Angular. I
            am currently learning .NET to refine my backend skills.
          </p>
        </div>
        <div
          id={s.container_2}
          className={s.container}
          style={{ backgroundImage: `url(${myImg})` }}
        >
          <div className={s.socials}>
            <a
              href="https://github.com/Elie-Khoury"
              target="_blank"
              title="GitHub"
            >
              <Github className={s.Github} size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/elie-khoury-a0b06821b"
              target="_blank"
              title="LinkedIn"
            >
              <Linkedin className={s.Linkedin} size={16} />
            </a>
          </div>
        </div>
        <div id={s.container_3} className={s.container}>
          <h2>Full-stack Developer</h2>
        </div>
        <div id={s.container_4} className={s.container}>
          <Model />
        </div>
        <div id={s.container_5} className={s.container}>
          <h2>Toolbox</h2>
          <div className={s.iconsContainer}>
            <div className={s.imgContainer}>
              <img src="./images/angular-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/react-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/typescript-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/javascript-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/net-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/postgresql-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/docker-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/python-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/c-sharp-icon.png" alt="" />
            </div>
            <div className={s.imgContainer}>
              <img src="./images/cpp-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div id={s.container_6} className={s.container} onClick={handleClick}>
          <h1>Projects</h1>
          <ChevronsRight className={s.ChevronsRight} />
        </div>
        <div id={s.container_7} className={s.container}>
          <div className={s.header}>
            <h2>Experience</h2>
            <a href="CV.pdf" download title="Download CV">
              <Download size={16} strokeWidth={3} className={s.Download} />
            </a>
          </div>
          <ul>
            <li>
              <i>Freelance</i> | <i>Project: Arafix</i> &#40; Jan 2024 - Present
              &#41;
            </li>
            <li>
              <i>Intern</i> | <i>inmind.ai</i> &#40; July 2024 - Aug 2024 &#41;
            </li>
            <li>
              <i>UI/UX Design Expert</i> | <i>Simplilearn and Forward MENA</i>{" "}
              &#40; Nov 2022 - Mar 2023 &#41;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  toggleHomeActive: PropTypes.func.isRequired,
};

export default Home;
