import React from "react";
import styles from "./Header.module.css";
import Minutentag from "../Media/Minutentag.png";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg1} />
      <div className={styles.headerBg2} />
      <div className={styles.headerLogo}>
        <img src={Minutentag} alt="minutentag-logo" />
      </div>
      <div className={styles.hero}>
        <div className={styles.sloganContainer}>
          <p className={styles.slogan}>Taking your ideas</p>
          <p className={styles.slogan}>to the next level</p>
        </div>
        <button className={`shadow`}>Let's work together!</button>
      </div>
    </>
  );
};

export default Header;
