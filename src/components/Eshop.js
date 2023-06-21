import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ProductPage from "./ProductPage";
import styles from "../styles/Eshop.module.css";

const Eshop = () => {
  let initialCounters = [0, 0, 0, 0, 0, 0];
  const [counters, setCounters] = useState(initialCounters);
  const names = ["apple", "banana", "grapes", "melon", "pear", "plum"];
  const prices = [1, 2, 3, 4, 5, 6];

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
      <HashRouter>
        <NavBar
          incClick={oneMore}
          decClick={oneLess}
          quantities={counters}
          fruitNames={names}
          fruitPrices={prices}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <ProductPage
                clickButton={oneMore}
                fruitNames={names}
                fruitPrices={prices}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Eshop;
