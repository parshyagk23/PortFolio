import React from "react";
import Education from "../../Components/Resume/Education";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "../../Components/Resume/Resume.module.css";
import WorkExp from "../../Components/Resume/WorkExp";
import ResumeSkills from '../../Components/Resume/ResumeSkills';
import Footer from '../../Components/Contact/Contact'
import ScrollAnimation from 'react-animate-on-scroll';
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
            margin: "0 0 40px 0",
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
