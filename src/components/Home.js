import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div>
        <img
          className={styles.logo}
          alt="logo"
          src={`${process.env.PUBLIC_URL}/images/shopping-cart.svg`}
        />
      </div>
    </div>
  );
};

export default Home;
