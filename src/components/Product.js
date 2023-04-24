import React, { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";

const Product = (props) => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount((a) => a + 1);
    console.log(amount);
    return;
  };

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
      <img
        className={styles.photo}
        alt="product"
        src={images[`${props.name}.svg`]}
      />
      <div className={styles.description}>
        <div>
          <b>{props.name}</b>
        </div>
        <div>2.5€ / Kg</div>
        <div className={styles.shopButton} onClick={increaseAmount}>
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Product;
