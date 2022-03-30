import React from "react";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSass,
  faJsSquare,
  faHtml5,
  faReact,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import useIsMobile from "../../hooks/useIsMobile";
import projectsInfo from "../../assets/data/projectsInfo";
library.add(fab, faSass, faJsSquare, faHtml5, faReact, faCss3);

const Projects = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <h3 className={styles.projects__title} id="projects__title">
        PROJECTS
      </h3>
      <div className={styles.projects}>
        {projectsInfo.map((project, i) => (
          <article className={styles.project} key={project.title}>
            {i % 2 ? (
              isMobile && (
                <img
                  className={styles.project__image}
                  src={project.img.src}
                  alt={project.img.alt}
                />
              )
            ) : (
              <img
                className={styles.project__image}
                src={project.img.src}
                alt={project.img.alt}
              />
            )}
            <section className={styles.project__description}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.icons.map((icon, i) => (
                  <li key={project.title + "-icon-" + i}>
                    <FontAwesomeIcon icon={icon} />
                  </li>
                ))}
              </ul>
              <div className={styles.project__links}>
                <button>
                  <a href={project.links.code} target="_blank" rel="noreferrer">
                    CODE
                  </a>
                </button>
                <button>
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WEBSITE
                  </a>
                </button>
              </div>
            </section>
            {i % 2
              ? !isMobile && (
                  <img
                    className={styles.project__image}
                    src={project.img.src}
                    alt={project.img.alt}
                  />
                )
              : null}
          </article>
        ))}

        <span className={styles.vertical_line2}></span>
      </div>
    </>
  );
};

export default Projects;
