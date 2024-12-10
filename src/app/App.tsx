"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./page"; // Asumiendo que About está en "page.tsx"
import Home from "./Home"; // Asegúrate de importar Home desde la ruta correcta

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />{" "}
        {/* Asegúrate de que el componente Home exista */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
