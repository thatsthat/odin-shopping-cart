import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { ReactComponent as Logo } from "../shopping-cart.svg";

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
    <div className={styles.logo}>
      <Logo />
    </div>
  );
};

export default Home;
