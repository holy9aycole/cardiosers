import React from "react";
import { Routes, Route } from "react-router-dom";
// import Analyse from "./pages/Analyse";
// import Report from "./pages/Report";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  // const [user]

  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/dash" children={({}) => <Dashboard />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
