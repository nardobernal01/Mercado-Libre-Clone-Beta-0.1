"use client";
import Image from "next/image";
import React from "react";
import { useNavigate } from "react-router-dom";

const NoPurchases: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/mas-vendidos");
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
          className="h-16" // Aumentar el tamaño del logo
        />
      </header>
      {/* Contenido principal */}
      <main className="flex-grow flex items-center justify-center flex-col">
        <h1>Aún no has realizado ninguna compra</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleButtonClick}
        >
          IR AL INICIO
        </button>
      </main>
    </div>
  );
};

export default NoPurchases;
