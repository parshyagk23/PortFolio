import React from "react";
import Project from "../../Components/Project/Project";
import Navbar from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import styles from "../../Components/Project/Project.module.css";
const ProjectPage = () => {
  const projectDetails = [
    {
      description:
        "Developed a comprehensive quiz creation and sharing platform with secure JWT authentication and encrypted passwords. Users can create, manage, and share quizzes, with real-time analytics to track engagement and performance. Implemented features include anonymous quiz participation, question timers, and trending quiz identification based on impressions.",
      porjectName: "Quiz App",
      Link: "https://quiz-frontend-dun.vercel.app/",
    },
    {
      description:
        "Swiptory is an engaging web application designed for storytelling, offering a range of features to enhance user experience. Users can browse, read, like, bookmark, and share stories, with easy navigation through various categories. The platform supports user authentication, allowing individuals to register and log in for personalized experiences. Registered users can also contribute by adding new stories and editing their own content.",
      porjectName: "Swiptory",
      Link: "https://swiptory-chi.vercel.app/",
    },
    {
      description:
        "Developed a full-stack jobFinder application using MERN stack, featuring secure login/register pages, intuitive job search by title and skills, and unique registration for both jobseekers and recruiters. Implemented functionalities include job application tracking for users and job posting capabilities for recruiters, all data are stored in MongoDB database. user-friendly Design to enhance navigation and experience.",

      porjectName: "jobFinder",
      Link: "https://joblisting-six.vercel.app/",
    },
    {
      description:
        "Pocket Notes is React application, which allows users to organize their notes efficiently. Users can create customize groups for their notes. Users can add notes to specific groups. Notes are saved in local storage. The application automatically fetches relevant notes when users switch between groups. The application is designed on both desktop and mobile devices.",

      porjectName: "Pocket Notes",
      Link: "https://pocket-notes-rouge-three.vercel.app/",
    },
    {
      description:
        "SuperApp is a react based basic entertainment platform featuring seamless registration. Users select from a variety of Entertainment categories before accessing profile page. weather updates and a note-taking feature enhance user engagement. The timer functionality and curated news section. dedicated movie section based on chosen categories.",

      porjectName: "SuperApp",
      Link: "https://supperapp-7a46b.web.app/",
    },
    {
      description:
        "Immerse yourself in the classic game of Rock, Paper, Scissors through this interactive web application. Created using HTML, CSS, and JavaScript, the project delivers an engaging experience with responsive design, visually appealing CSS styling, and dynamic gameplay powered by JavaScript logic. Click to make your selection and witness real-time outcomes, showcasing a seamless integration of front-end technologies for an entertaining digital twist on a timeless game.",

      porjectName: "RockPaperScussor",
      Link: "https://parshyagk23.github.io/RockPaperScissorss/",
    },
    {
      description:
        "Project design using HTML, CSS, and JavaScript. This minimalist yet functional tool offers straightforward numeric calculations with a clean design. The responsive layout ensures usability across devices, making it a simple and effective solution for quick math tasks.",

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
