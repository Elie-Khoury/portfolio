import PropTypes from "prop-types";
import s from "./projects.module.scss";
import { useEffect } from "react";
import Card from "./components/card";
import Model from "../home/components/model";

import { House } from "lucide-react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

function Projects(props) {
  const handleClick = () => {
    const container = document.querySelector(`.${s.projectsContainer}`);

    if (container) {
      container.classList.add(s.animateOut);

      setTimeout(() => {
        container.classList.remove(s.animateOut);
        props.toggleHomeActive();
      }, 2000);
    } else {
      console.error("Element not found");
    }
  };

  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      description:
        "For my internship with inmind.ai, I was tasked with building an ecommerce website using Angular integrating features from both its old and new versions such as Signals, Standalone components, Modules, and Observables.\n- The website includes authentication using JWT tokens and authorization for seperate users (customer and admin) to access different dashboards.\n- State management using NgRx to is implemented to keep track of the authentication state.\n- The website also utilizes local storage to keep track of items added to cart and search history.\n- An AI chatbot was also implemented and trained to answer questions regarding the products being sold.",
      image: "./images/ecommerce.webp",
      url: "https://github.com/Elie-Khoury/ecommerce-project",
      tools: ["angular", "docker", "typescript"],
    },
    {
      id: 2,
      title: "Todo Website",
      description:
        "For my internship with inmind.ai, I was tasked with building a simple ToDo website.\n- Angular was used for the front-end and .NET Core was used to build the back-end along with PostgreSQL as the database.\n- The project was then dockerized and Docker Compose was used to create networks that link the three services using external and internal ports and to build and run a container with ease.",
      image: "./images/todo.webp",
      url: "https://github.com/Elie-Khoury/ToDo",
      tools: ["angular", "docker", "postgresql", "typescript", "net"],
    },
    {
      id: 3,
      title: "Borrowed Time Website",
      description: "",
      image: "./images/borrowed-time.webp",
      url: "https://borrowed-time-lb.github.io/",
      tools: ["html","css","javascript"],
    },
  ];

  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className={s.projectsContainer}>
      <div className={s.titleContainer}>
        <h1 className="title" data-splitting>
          Projects
        </h1>
        <button onClick={handleClick}>
          <House className={s.houseIcon} />
        </button>
      </div>
      <div className={s.cardsContainer}>
        {projects.map((project, index) => (
          <div className={s.card} key={index} style={{ "--card-index": index }}>
            <Card project={project} />
          </div>
        ))}
      </div>
      <div id={s.model}>
        <Model />
      </div>
    </div>
  );
}

Projects.propTypes = {
  toggleHomeActive: PropTypes.func.isRequired,
};

export default Projects;
