import React from 'react'
import Home from '../../Components/Home/Home'
import Navbar from '../../Components/Navbar/Navbar'
import Contact from '../../Components/Contact/Contact'
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Contact com={'home'} />
    </>
  )
}

export default HomePage