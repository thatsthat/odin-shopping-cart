import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ProductPage from "./ProductPage";
import styles from "../styles/Eshop.module.css";

const Eshop = () => {
  let initialCounters = [0, 0, 0, 0, 0, 0];
  const [counters, setCounters] = useState(initialCounters);

  function oneMore(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    console.log(nextCounters);
    setCounters(nextCounters);
  }

  function oneLess(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Decrement the clicked counter
        if (c === 0) return c;
        else return c - 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    console.log(nextCounters);
    setCounters(nextCounters);
  }

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <NavBar incClick={oneMore} decClick={oneLess} quantities={counters} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductPage clickButton={oneMore} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Eshop;
