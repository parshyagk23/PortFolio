import React, { useEffect, useState } from 'react'
import styles from "./Resume.module.css";
import html from "../../assets/icons/html5.png";
import css from "../../assets/icons/css3.png";
import js from "../../assets/icons/js.png";
import react from "../../assets/icons/react.png";
import express from "../../assets/icons/express js.png";
import node from "../../assets/icons/nodejs.png";
import mongodb from "../../assets/icons/mongodb.png";
import Java from "../../assets/icons/java.png";
import sql from "../../assets/icons/mysql.png";
import git from '../../assets/images/Social icons/github.png'
const ResumeSkills = ({resume}) => {
    
    
    const skill =[
      {
         name: "HTML",
          icon: html
      },
      {
         name: "CSS",
          icon: css
      },
      {
         name: "JavaScript",
          icon: js
      },
      {
         name: "ReactJS", 
          icon: react
      },
      {
         name: "ExpressJS",
          icon: express
      },
      {
         name: "NodeJS",
          icon: node
      },
      
      {
         name: "TailwindCSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
      },
      
      {
         name: "Java",
          icon: Java
      },
      
      {
         name: "MongoDB",
          icon: mongodb
      },
      {
         name: "MySQL",
          icon: sql
      },
      
      {
         name: "GitHub",
          icon: git
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