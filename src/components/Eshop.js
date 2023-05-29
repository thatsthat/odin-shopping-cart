import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import styles from "../styles/Eshop.module.css";

const Eshop = () => {
  let initialCounters = [0, 0, 0, 0];
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  function handleDecrementClick(index) {
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
    setCounters(nextCounters);
  }

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Eshop;
