import React, { useState, useEffect } from "react";
import styles from "../styles/ProductInCart.module.css";

const ProductInCart = (props) => {
  /* const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount((a) => a + 1);
  }; */

  useEffect(() => {
    (() => {})();
  }, []);

  const images = {
    "apple.svg": "./images/apple.svg",
    "banana.svg": "./images/banana.svg",
    "grapes.svg": "./images/grapes.svg",
    "melon.svg": "./images/melon.svg",
    "pear.svg": "./images/pear.svg",
    "plum.svg": "./images/plum.svg",
  };

  return (
    <div className={styles.product}>
      <img
        className={styles.photo}
        alt={props.name}
        src={images[`${props.name}.svg`]}
      />
      <div className={styles.description}>
        <div>
          <b>{props.name}</b>
        </div>
        <div>$$$</div>
        <div className={styles.quantityControls}>
          <div
            className={styles.quantityButton}
            onClick={() => props.clickButton(props.id)}
          >
            -
          </div>
          <div className={styles.quantity}>0</div>
          <div
            className={styles.quantityButton}
            onClick={() => props.clickButton(props.id)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
