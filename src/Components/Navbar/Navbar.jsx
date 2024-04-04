import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import profileImg from "../../assets/images/Profile/profile4.png";

const Navbar = () => {
  const [openbar, setopenbar] = useState(false);
  return (
    <div>
      <nav className={styles.navContainer}>
        <Link to="/" className={styles.profileImg}>
          <img
            src={profileImg}
            width="40px"
            height="40px"
            alt="Profile Image"
          />
          <h1>Prashant Gatkwar</h1>
        </Link>
        <div className={styles.links}>
          <div>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/resume">
              Resume
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/project">
              Projects
            </Link>
          </div>
        </div>
        <div className={styles.bar} onClick={() => setopenbar((prev) => !prev)}>
          {!openbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="25"
              height="25"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="25"
              viewBox="0 0 384 512"
            >
              <path
                fill="#000"
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              ></path>
            </svg>
          )}
        </div>
      </nav>
      {openbar && (
        <div className={styles.barlink}>
          <div>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/resume">
              Resume
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/project">
              Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
