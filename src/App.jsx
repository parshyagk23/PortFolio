
import { Routes, Route } from "react-router-dom"
import ResumePage from './Pages/ResumePage/ResumePage'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import HomePage from "./Pages/HomePage/HomePage"
function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/resume" element={<ResumePage/>} ></Route>
          <Route path="/project" element={<ProjectPage/>} ></Route>
        </Routes>    
    </>
  )
}

export default App
