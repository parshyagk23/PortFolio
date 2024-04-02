import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import profileImg from '../../assets/images/Profile/profile4.png'

const Navbar = () => {
  return (
    <nav className={styles.navContainer} >
      <Link to='/' className={styles.profileImg} >
        <img src={profileImg} width='40px' height='40px' alt="Profile Image" />
         <h1>Prashant Gatkwar</h1>
      </Link>
      <div className={styles.links} >
        <div>
            <Link className={styles.link} to='/'>Home</Link>
        </div>
        <div>
            <Link className={styles.link} to='/resume'>Resume</Link>
        </div>
        <div>
            <Link className={styles.link} to='/project'>Projects</Link>
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar
