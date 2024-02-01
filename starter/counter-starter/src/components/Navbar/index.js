import ShoppingIcon from "../../assets/shopping-icon.svg";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={ShoppingIcon} alt="shopping-icon" />
      <h1 className={styles.navTitle}>Counter App</h1>
    </nav>
  );
};

export default Navbar;
