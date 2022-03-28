import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Cart, Products, Saved } from "./containers";
import { NavBar } from "./components";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}
