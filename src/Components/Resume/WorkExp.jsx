import React from "react";
import styles from "./Resume.module.css";
const WorkExp = ({ resume }) => {
  const resumeKeys = Object?.keys(resume);

  return (
    <main className={styles.RusumeContainer}>
      <section className={styles?.resumesection}>
        <div className={styles?.resumetitle}>
          <h1>{resume?.title}</h1>
        </div>
        <div className={styles?.resumepoints}>
          <p>{resume?.Duration} </p>
          <div >
            <h3>{resume?.role}</h3>
            <ul>
              <li>
                <b>{resumeKeys[3] + ":"}</b>
                 <span  > {resume?.Organization}</span>
              </li>
              <li>
                <b>{resumeKeys[4] + ":"}</b>
                 <span> {resume?.Course}</span>
              </li>
              <li>
                <b> {resumeKeys[5] + ":"}</b>
                 <span> {resume?.Skills}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.line}></div>
    </main>
  );
};

export default WorkExp;
