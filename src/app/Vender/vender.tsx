"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "next/image";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const [showDialog, setShowDialog] = useState(false); // Estado para el diálogo opcional

  const handleCreateAccount = () => {
    navigate("/registrarse");
  };

  const handleLogin = () => {
    setShowDialog(true);

    // Ocultar el diálogo después de 3 segundos
    setTimeout(() => {
      setShowDialog(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Encabezado con el logo */}
      <header className="bg-yellow-400 w-full p-4 flex justify-center shadow-md">
        <Image
          src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
          alt="Mercado Libre Logo"
          width={200}
          height={300}
          className="h-16"
        />
      </header>

      {/* Diálogo opcional */}
      {showDialog && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-3 z-50">
          <p>¡Al parecer no tienes cuenta, intenta registrándote! :)</p>
        </div>
      )}

      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded shadow-lg w-80 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            ¡Hola! Para vender, ingresa a tu cuenta
          </h2>
          <p className="text-gray-500 mb-6">
            Si eres nuevo, crea una cuenta para disfrutar de todas las ventajas
            de vender en Mercado Libre.
          </p>
          <button
            className="bg-blue-600 text-white w-full py-2 rounded mb-4 hover:bg-blue-700 transition-colors"
            onClick={handleCreateAccount}
          >
            Crear cuenta
          </button>
          <button
            className="bg-gray-200 text-blue-600 w-full py-2 rounded hover:bg-gray-300 transition-colors"
            onClick={handleLogin}
          >
            Ingresar
          </button>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="text-center text-sm text-gray-500 py-4">
        Copyright © 1999-2024 DeRemate.com de México S. de R.L. de C.V.
      </footer>
    </div>
  );
};

export default WelcomePage;
