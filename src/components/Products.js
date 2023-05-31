import React, { useState, useEffect } from "react";
import Product from "./Product";
import styles from "../styles/Products.module.css";

const Products = (props) => {
  const [state, setState] = useState({});

  const names = ["apple", "banana", "grapes", "melon", "pear", "plum"];

  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <div>
      <div className={styles.productgrid}>
        {Array(...Array(6)).map((v, i) => (
          <Product
            key={i}
            id={i}
            name={names[i]}
            clickButton={props.clickButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
