"use client";

import React, { useState } from "react";

interface CodigoPostalModalProps {
  onClose: () => void; // Agrega esta interfaz para aceptar `onClose`
}

const CodigoPostalModal: React.FC<CodigoPostalModalProps> = ({ onClose }) => {
  const [codigoPostal, setCodigoPostal] = useState(""); // Almacena el código postal

  // Maneja el cambio en el input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigoPostal(event.target.value);
  };

  // Acción al presionar "Usar"
  const usarCodigo = () => {
    if (codigoPostal.trim() !== "") {
      alert(`Código Postal usado: ${codigoPostal}`);
      onClose(); // Llama a la función onClose
    } else {
      alert("Por favor ingresa un código postal válido.");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <h2 className="text-lg font-bold mb-2">
          Elige dónde recibir tus compras
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Podrás ver costos y tiempos de entrega precisos en todo lo que
          busques.
        </p>
        <div className="mb-4">
          <label
            htmlFor="codigoPostal"
            className="block text-sm font-medium text-gray-700"
          >
            Código Postal
          </label>
          <input
            id="codigoPostal"
            type="text"
            placeholder="Ingresar un código postal"
            value={codigoPostal}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={usarCodigo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Usar
          </button>
          <button
            className="text-blue-600 text-sm underline"
            onClick={() =>
              alert("Estas pendejo? como no vas a saber tu Codigo Postal.")
            }
          >
            No sé mi código
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodigoPostalModal;
