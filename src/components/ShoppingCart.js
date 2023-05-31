import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductInCart from "./ProductInCart";
import styles from "../styles/ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    (() => {})();
  }, []);

  const names = ["apple", "banana", "grapes", "melon", "pear", "plum"];

  return (
    <div className={styles.main}>
      <div className={styles.shade} onClick={props.closeCart}></div>
      <div className={styles.cart}>
        <div className={styles.header}>Your Shopping Cart</div>
        <div className={styles.products}>
          {Array(...Array(2)).map((v, i) => (
            <ProductInCart
              key={i}
              id={i}
              name={names[i]}
              clickButton={props.clickButton}
            />
          ))}
        </div>
        <div className={styles.totalPrice}>Total: 0€</div>
        <div className={styles.button} onClick={console.log("checked out")}>
          Checkout
        </div>
        <div className={styles.button} onClick={props.closeCart}>
          Close
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
