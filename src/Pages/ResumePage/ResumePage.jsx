import React from "react";
import Education from "../../Components/Resume/Education";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "../../Components/Resume/Resume.module.css";
import WorkExp from "../../Components/Resume/WorkExp";
import ResumeSkills from '../../Components/Resume/ResumeSkills';
import Footer from '../../Components/Contact/Contact'
const ResumePage = () => {
  const resumeDetails = [
    {
      title: "Work Experience",
      Duration: "Nov 2023 - Mar 2024",
      role: "Training",
      Organization: " Cuvette.tech",
      Course: "MERN Stack Developer",
      Skills: "Html Css Javascript Git React Nodejs Expressjs MongoDB",
    },

    {
      title: "Education",
      Duration: "Jan 2021 - July 2023",
      role: "Under Graduate | Vishwakarma Institute of Information Technology, Pune",
      Course: "Electronics and Tele-Communication Engineering",
      CGPA: "8.87",
    },
    {
      title: "Skills & Expertise",
      Skill:{
        HTML: "Proficient in creating semantic and accessible markup structures for web pages.",
        CSS: "Experienced in styling web pages with CSS, including layout design, responsive design.",
        JavaScript: "Proficient in JavaScript, including DOM manipulation, asynchronous programming.",
        ReactJs: "Strong expertise in building dynamic and interactive user interfaces using React.js.",
        NodeJs:"Skilled in server-side development with Node.js, building scalable and efficient web applications, RESTful APIs, and integrating with databases.",
        ExpressJs: "Proficient in creating web applications and APIs using Express.js, including middleware implementation, routing, and handling HTTP requests/responses.",
        MongoDB: "Experienced in NoSQL database management with MongoDB, including schema design, CRUD operations.",
        Java: "Proficient in Java programming language, including object-oriented principles, data structures, and algorithms.",
        SQL: "Strong expertise in relational database management systems (RDBMS) and SQL, including database design, querying.",
        GitHub:"Proficient in version control with Git and GitHub, including repository management, branching strategies, pull requests.",
      },
    },

  ];

  return (
    <>
      <Navbar />
      <div className={styles.resumediv}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "black",
            margin: "0 0 70px 0",
          }}
        >
          Resume
        </h1>

        <div>
          <WorkExp resume={resumeDetails[0]} />
          <Education resume={resumeDetails[1]} />
          <ResumeSkills resume={resumeDetails[2]}/>
          
        </div>
      </div>
          <Footer com={"project"}  />
    </>
  );
};

export default ResumePage;
