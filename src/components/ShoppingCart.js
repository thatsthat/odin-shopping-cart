import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>Your Shopping Cart</div>
      <div>products</div>
      <div className={styles.totalPrice}>Total: 0€</div>
      <div className={styles.button} onClick={console.log("iep")}>
        Checkout
      </div>
      <div className={styles.button} onClick={console.log("iep")}>
        Close
      </div>
    </div>
  );
};

export default ShoppingCart;
