import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to="https://facebook.com">
            <FaFacebook />
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="https://instagram.com">
            <FaInstagram />
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="https://twitter.com">
            <FaTwitter />
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="https://github.com">
            <FaGithub />
          </Link>
        </li>
      </ul>

      <p className={styles.copy}>
        <span>Costs </span>
        &copy;
      </p>
    </div>
  );
}

export default Footer;
