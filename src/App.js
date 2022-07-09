import Homepage from "./pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Homepage/>} path="/"/>
    </Routes>
  );
}

export default App;
