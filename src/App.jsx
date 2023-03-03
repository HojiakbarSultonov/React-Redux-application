import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Main, Navbar, Register } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;