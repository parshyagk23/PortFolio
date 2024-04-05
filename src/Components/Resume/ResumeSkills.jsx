import React, { useEffect, useState } from 'react'
import styles from "./Resume.module.css";
const ResumeSkills = ({resume}) => {
    
    
    const skill =[
      {
         name: "HTML",
          icon: "/src/assets/icons/html5.png"
      },
      {
         name: "CSS",
          icon: "/src/assets/icons/css3.png"
      },
      {
         name: "JavaScript",
          icon: "/src/assets/icons/js.png"
      },
      {
         name: "ReactJS", 
          icon: "/src/assets/icons/react.png"
      },
      {
         name: "ExpressJS",
          icon: "/src/assets/icons/express js.png"
      },
      {
         name: "NodeJS",
          icon: "/src/assets/icons/nodejs.png"
      },
      
      {
         name: "TailwindCSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
      },
      
      {
         name: "Java",
          icon: "/src/assets/icons/java.png"
      },
      
      {
         name: "MongoDB",
          icon: "/src/assets/icons/mongodb.png"
      },
      {
         name: "MySQL",
          icon:  "/src/assets/icons/mysql.png"
      },
      
      {
         name: "GitHub",
          icon: "/src/assets/images/Social icons/github.png"
      }
        
  ]
    

    
    
   
    return (
   
    <main className={styles.RusumeContainer}>
    <section >
      <div style={{ width:'39vw' }}  className={styles?.resumetitle}>
        <h1>Skills</h1>
      </div>
      <div style={{ width: "78vw", margin:'0 auto' }} className={styles.skillsection}>
       
            {skill?.map((skill,index)=>(
              <div className={styles.skillsbox} key={index} >
              <img  src={skill.icon} alt=""  />
              <h2>{skill.name}</h2>
              </div>
            ))}

      </div>
    </section>
  </main>
  )
}

export default ResumeSkills