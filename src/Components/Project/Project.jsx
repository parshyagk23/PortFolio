import React from "react";
import styles from "./Project.module.css";

const Project = ({project  }) => {
  return (
    <div className={styles.projectcontainer}>
      
      <section className={styles.project}>
        <div className={styles.description}>
          <div style={{ display:'flex', gap:'10px' }} >
            <h1> {project.porjectName} </h1>
            <a href={project.Link} title="deploy here" target="_blank" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
            </svg>
            </a>
          </div>
          <p>
            {project.description}
          </p>
        </div>
        <div className={styles.projectimg}>
          <img src={project.img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Project;
