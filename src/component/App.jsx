import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dash from "./pages/Dash";

const App = () => {
  const [user, setUser] = useState({ session: true });

  console.log({ user });

  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/dash/*"
          element={user.session ? <Dash /> : <Navigate to="/" />}
        />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
