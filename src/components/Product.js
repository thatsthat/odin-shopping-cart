import React, { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";
import apple from "../images/shopping-cart.svg";

const Product = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.product}>
      <img alt="product" src={apple} />
    </div>
  );
};

export default Product;
