import React from 'react'
import styles from "./Resume.module.css";
const ResumeSkills = ({resume}) => {
    const Skillentries =Object.entries(resume.Skill);
    console.log(Skillentries)
    
  return (
   
    <main className={styles.RusumeContainer}>
    <section className={styles?.resumesection}>
      <div style={{ width:'39vw' }}  className={styles?.resumetitle}>
        <h1>{resume?.title}</h1>
      </div>
      <div style={{ width: "61vw" }} className={styles?.resumepoints}>
        <div >    <ul>
            {Skillentries.map(([key, val] = entry, index)=>(
              <li key={index} >
              <b> {key}: </b>
              {val}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </main>
  )
}

export default ResumeSkills