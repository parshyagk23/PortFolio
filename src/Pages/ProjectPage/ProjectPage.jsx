import React from "react";
import Project from "../../Components/Project/Project";
import Navbar from "../../Components/Navbar/Navbar";
import jobfinderImg from "../../assets/images/Project images/jobfinder.png";
import pocketNoteImg from "../../assets/images/Project images/pocketNotes.png";
import supperAppImg from "../../assets/images/Project images/supperapp.png";
import RockPaperScissor from "../../assets/images/Project images/rockpaperscissors.png";
import Calculator from "../../assets/images/Project images/calculator.png";
import Contact from "../../Components/Contact/Contact";
import styles from "../../Components/Project/Project.module.css";
const ProjectPage = () => {
  const projectDetails = [
    {
      description:
        "Developed a full-stack jobFinder application using MERN stack, featuring secure login/register pages, intuitive job search by title and skills, and unique registration for both jobseekers and recruiters. Implemented functionalities include job application tracking for users and job posting capabilities for recruiters, all data are stored in MongoDB database. user-friendly Design to enhance navigation and experience.",
      img: jobfinderImg,
      porjectName: "jobFinder",
      Link: "https://joblisting-six.vercel.app/",
    },
    {
      description:
        "Pocket Notes is React application, which allows users to organize their notes efficiently. Users can create customize groups for their notes. Users can add notes to specific groups. Notes are saved in local storage. The application automatically fetches relevant notes when users switch between groups. The application is designed on both desktop and mobile devices.",
      img: pocketNoteImg,
      porjectName: "Pocket Notes",
      Link: "https://pocket-notes-rouge-three.vercel.app/",
    },
    {
      description:
        "SuperApp is a react based basic entertainment platform featuring seamless registration. Users select from a variety of Entertainment categories before accessing profile page. weather updates and a note-taking feature enhance user engagement. The timer functionality and curated news section. dedicated movie section based on chosen categories.",
      img: supperAppImg,
      porjectName: "SuperApp",
      Link: "https://supperapp-7a46b.web.app/",
    },
    {
      description:
        "Immerse yourself in the classic game of Rock, Paper, Scissors through this interactive web application. Created using HTML, CSS, and JavaScript, the project delivers an engaging experience with responsive design, visually appealing CSS styling, and dynamic gameplay powered by JavaScript logic. Click to make your selection and witness real-time outcomes, showcasing a seamless integration of front-end technologies for an entertaining digital twist on a timeless game.",
      img: RockPaperScissor,
      porjectName: "RockPaperScussor",
      Link: "https://parshyagk23.github.io/RockPaperScissorss/",
    },
    {
      description:
        "Project design using HTML, CSS, and JavaScript. This minimalist yet functional tool offers straightforward numeric calculations with a clean design. The responsive layout ensures usability across devices, making it a simple and effective solution for quick math tasks.",
      img: Calculator,
      porjectName: "Calculator app",
      Link: "https://parshyagk23.github.io/Calculator/",
    },
  ];

  return (
    <>
      <Navbar />

      <div className={styles.projectdiv}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "black",
            margin: "0 0 20px 0",
          }}
        >
          Projects
        </h1>
        {projectDetails.map((project, index) => (
          <div key={index}>
            <Project project={project} index={index} />
          </div>
        ))}
      </div>
      <Contact com={"project"} />
    </>
  );
};

export default ProjectPage;
