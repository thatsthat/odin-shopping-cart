import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import Products from "./Products";
const NavBar = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

  const mystyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "3rem",
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.button}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.button}>
        <Link to="/products">Products</Link>
      </div>
      <div className={styles.button}>
        <span className="material-icons-outlined" style={mystyle}>
          shopping_cart
        </span>
      </div>
    </div>
  );
};

export default NavBar;
