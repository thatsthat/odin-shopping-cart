import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { ReactComponent as Logo } from "../images/shopping-cart.svg";

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
      <div className={styles.logo}>
        <Logo title="shoppingCart" />
      </div>
    </div>
  );
};

export default Home;
