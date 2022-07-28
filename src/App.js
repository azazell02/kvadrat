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
      <Route element={<Homepage />} exact path="/" />
      <Route element={<ProductPage />} exact path="products/:id" />
    </Routes>
  );
}

export default App;
