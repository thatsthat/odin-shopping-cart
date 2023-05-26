import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import styles from "../styles/Eshop.module.css";

function Eshop() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Eshop;
