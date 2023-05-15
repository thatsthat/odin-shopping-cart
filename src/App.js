import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <div style={{ zIndex: "1000" }}>
          <NavBar />
        </div>
        <div
          style={{
            position: "fixed",
            zIndex: "1100",
          }}
        >
          <ShoppingCart />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
