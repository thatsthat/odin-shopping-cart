import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

function App() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Logo />
    </div>
  );
}

const Home = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

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
