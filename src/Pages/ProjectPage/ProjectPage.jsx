import React from "react";
import Project from "../../Components/Project/Project";
import Navbar from "../../Components/Navbar/Navbar";
import jobfinderImg from "../../assets/images/Project images/jobfinder.png";
import pocketNoteImg from "../../assets/images/Project images/pocketNotes.png";
import supperAppImg from "../../assets/images/Project images/supperapp.png";
import Contact from "../../Components/Contact/Contact";
const ProjectPage = () => {
  const projectDetails = [
    {
      description:
        "Developed a full-stack jobFinder application using MERN stack, featuring secure login/register pages, intuitive job search by title and skills, and unique registration for both jobseekers and recruiters. Implemented functionalities include job application tracking for users and job posting capabilities for recruiters, all data are stored in MongoDB database. user-friendly Design to enhance navigation and experience.",
      img: jobfinderImg,
      porjectName:'jobFinder',
      Link:'https://joblisting-six.vercel.app/'

    },
    {
      description: "Pocket Notes is React application, which allows users to organize their notes efficiently. Users can create customize groups for their notes. Users can add notes to specific groups. Notes are saved in local storage. The application automatically fetches relevant notes when users switch between groups. The application is designed on both desktop and mobile devices.",
      img: pocketNoteImg,
      porjectName:'Pocket Notes',
      Link:'https://pocket-notes-rouge-three.vercel.app/'
    },
    {
      description: "SuperApp is a react based basic entertainment platform featuring seamless registration. Users select from a variety of Entertainment categories before accessing profile page. weather updates and a note-taking feature enhance user engagement. The timer functionality and curated news section. dedicated movie section based on chosen categories.",
      img: supperAppImg,
      porjectName:'SuperApp',
      Link:'https://supperapp-7a46b.web.app/'
    },
  ];
  return (
    <>
   
    <Navbar />
   
      <div style={{
            width:'93vw',
            margin:'0 auto',
            marginTop: "150px "
    }} >
     

      <h1 style={{ fontSize: "48px",
                   fontWeight: "600",
                   color: "black",
                   margin: "0 0 20px 0" 
    }} >Projects</h1>
      {projectDetails.map((project,index)=>(
        <div key={index} >
          <Project project={project} index={index} />
          </div>

      ))}
      </div>
      <Contact positions="" />
      
     
    </>
  );
};

export default ProjectPage;
