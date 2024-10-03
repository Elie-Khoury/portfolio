/* eslint-disable react/prop-types */
import s from "./card.module.scss";
import ScrollDialog from "./dialogue";

function Card(props) {
  const project = props.project;

  return (
    <div className={s.cardContainer}>
      <div className={s.projectDetails}>
        <div className={s.imgContainer}>
          <img src={project.image} alt="" />
        </div>
        <div className={s.textContent}>
          <h1>{project.title}</h1>
          {project.description !== "" && (
            <ScrollDialog
              title={project.title}
              description={project.description}
              url={project.url}
            />
          )}
        </div>
      </div>
      <div className={s.projectTools}>
        {project.tools.map((tool, index) => (
          <div className={s.toolContainer} key={index}>
            <img src={`./images/${tool}-icon.png`} alt={`${tool} icon`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
