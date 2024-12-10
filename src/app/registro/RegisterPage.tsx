"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usa Link para navegar

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showDialog, setShowDialog] = useState(false); // Controla la visibilidad del diálogo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del registro:", formData);
    setShowDialog(true); // Mostrar el diálogo después de enviar el formulario

    // Opcional: Ocultar el diálogo después de 3 segundos
    setTimeout(() => {
      setShowDialog(false);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Banner Amarillo */}
      <div className="bg-yellow-400 p-4 text-center">
        <img
          src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
          alt="Mercado Libre Logo"
          className="mx-auto h-12"
        />
      </div>

      {/* Dialogo Condicional */}
      {showDialog && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-3 z-50">
          <p>¡Oh no! Al parecer tenemos fallas Intentalo Mas Tarde...</p>
        </div>
      )}

      {/* Formulario de Registro */}
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Crea una contraseña"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
