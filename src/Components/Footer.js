import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.sectionTitle}>Follow us</p>
      <div className={styles.icons}>
        <i class="fa-brands fa-xl fa-instagram"></i>
        <i class="fa-brands fa-xl fa-facebook"></i>
        <i class="fa-brands fa-xl fa-linkedin"></i>
      </div>
      <p className={styles.copyright}>© 2022 Minutentag. All right reserved.</p>
    </div>
  );
};

export default Footer;
