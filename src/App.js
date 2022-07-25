import Homepage from "./pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import WOW from "wowjs";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<ProductPage />} path="products/:id" />
    </Routes>
  );
}

export default App;
