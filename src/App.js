import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registr from "./components/Registr";
import Main from "./Main";
import Res from "./components/Res";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Registr />} />
        <Route path="/res" element={<Res />} />
      </Routes>
    </div>
  );
}

export default App;
