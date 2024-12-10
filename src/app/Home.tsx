// pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link to="/about">Ir a Acerca de</Link>
    </div>
  );
};

export default Home;
