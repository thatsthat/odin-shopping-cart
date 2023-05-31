import React, { useState, useEffect } from "react";
import ProductInPage from "./ProductInPage";
import styles from "../styles/ProductPage.module.css";

const ProductPage = (props) => {
  const [state, setState] = useState({});

  const names = ["apple", "banana", "grapes", "melon", "pear", "plum"];

  useEffect(() => {
    (() => {})();
  }, []);
  return (
    <div>
      <div className={styles.productgrid}>
        {Array(...Array(6)).map((v, i) => (
          <ProductInPage
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

export default ProductPage;
