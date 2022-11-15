import React from "react";
import { Routes, Route } from "react-router-dom";
import Analyse from "./pages/Analyse";
import Report from "./pages/Report";

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Analyse />} />
        <Route exact path="/analyse/:analyse_id" element={<Report />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
