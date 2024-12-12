"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usa Link para la navegación
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false); // Controla si el diálogo es visible

  // Función para mostrar el diálogo
  const handleContinue = () => {
    setShowDialog(true);

    // Opcional: Ocultar el diálogo después de 3 segundos
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
          className="h-16" // Aumentar el tamaño del logo
        />
      </header>

      {/* Dialogo Condicional */}
      {showDialog && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-3 z-50">
          <p>¡Al parecer no tienes cuenta intenta Registrandote :)!</p>
        </div>
      )}

      {/* Contenido de la página */}
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-lg mb-4 text-gray-700">
          Ingresa tu e-mail o teléfono para iniciar sesión
        </h2>

        {/* Formulario de inicio de sesión */}
        <div className="bg-white p-8 rounded shadow-lg w-80">
          <input
            type="text"
            placeholder="Correo electrónico o teléfono"
            className="border border-gray-300 p-2 rounded w-full mb-4"
          />
          <button
            className="bg-blue-600 text-white w-full py-2 rounded mb-2"
            onClick={handleContinue} // Mostrar el diálogo al hacer clic
          >
            Continuar
          </button>
          {/* Aquí usamos el componente Link para redirigir */}
          <Link to="/registrarse">
            <button className="bg-gray-200 text-blue-600 w-full py-2 rounded">
              No tengo cuenta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
