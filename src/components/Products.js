import React, { useState, useEffect } from "react";
import Product from "./Product";
import styles from "../styles/Products.module.css";

const Products = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <div>
      <Product name="pear" />
    </div>
  );
};

export default Products;
