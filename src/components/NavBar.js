import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { Shop } from "@material-ui/icons";

const NavBar = (props) => {
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    (() => {})();
  }, []);

  const mystyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "3rem",
  };

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <div>
      <div style={{ position: "fixed", zIndex: "1000" }}>
        <div className={styles.navBar}>
          <div className={styles.button}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.button}>
            <Link to="/products">Products</Link>
          </div>
          <div className={styles.button} onClick={showCart}>
            <span className="material-icons-outlined" style={mystyle}>
              shopping_cart
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "1100",
        }}
      >
        {cartVisible ? <ShoppingCart closeCart={hideCart} /> : null}
      </div>
    </div>
  );
};

export default NavBar;
