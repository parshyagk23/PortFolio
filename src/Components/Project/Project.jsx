import React from "react";

import styles from "./Project.module.css";

const Project = ({ project }) => {

  return (

    <div className={styles.projectcontainer}>
      <section className={styles.project}>
        <div className={styles.description}>
          <div style={{ display: "flex", gap: "10px", margin:" 0 0 20px 0" }}>
            <h1> {project.porjectName} </h1>
            
            <a  className={styles.link} href={project.Link} title="deploy here" target="_blank">
              <b>.</b>
              <span>Live</span>
            </a>
          </div>
          <p>{project.description}</p>
        </div>
       
      </section>
    </div>
    
  );
};


export default Project;
