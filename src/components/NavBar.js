import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

  const mystyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "2rem",
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.button}>Home</div>
      <div className={styles.button}>Products</div>
      <div className={styles.button}>
        <span className="material-icons-outlined" style={mystyle}>
          shopping_cart
        </span>
      </div>
    </div>
  );
};

export default NavBar;
