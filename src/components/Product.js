import React, { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";

const Product = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return "";
    });
    return images;
  }

  const images = importAll(require.context("../images", false, /\.svg$/));

  return (
    <div className={styles.product}>
      <img alt="product" src={images[`${props.name}.svg`]} />
    </div>
  );
};

export default Product;
