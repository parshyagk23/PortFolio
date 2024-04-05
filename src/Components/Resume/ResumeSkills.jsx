import React, { useEffect, useState } from 'react'
import styles from "./Resume.module.css";
const ResumeSkills = ({resume}) => {
    
    const [skill , setskill] = useState()
    useEffect( ()=>{
       fetchdata()
    },[])
 
    const fetchdata = async ()=>{
      const responce = await fetch('../../../skills.json')
      const data = await responce.json()
      setskill(data)
    }
    
    // console.log(skill)
   
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