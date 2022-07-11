import Homepage from "./pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<ProductPage />} path="Product" />
    </Routes>
  );
}

export default App;
