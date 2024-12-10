"use client";

import React from "react";

const categories = [
  {
    title: "Accesorios para Vehículos",
    items: [
      "GNV",
      "Herramientas para Vehículos",
      "Accesorios para Autos y Camionetas",
      "Refacciones de Línea Pesada",
      "Repuestos Náuticos",
      "Rines",
    ],
  },
  {
    title: "Agro",
    items: [
      "Agricultura de Precisión",
      "Fertilizantes",
      "Herramientas de Trabajo",
      "Lubricantes y Fluidos",
      "Protección Animal",
      "Repuestos Maquinaria Agrícola",
    ],
  },
  {
    title: "Alimentos y Bebidas",
    items: ["Bebidas", "Comidas Preparadas", "Desperdicio", "Kéfir"],
  },
  {
    title: "Animales y Mascotas",
    items: [
      "Aves",
      "Conejos",
      "Gatos",
      "Juguetes para Mascotas",
      "Perros",
      "Reptiles y Antibióticos",
    ],
  },
  {
    title: "Antigüedades y Colecciones",
    items: [
      "Antigüedades",
      "Esculturas",
      "Monedas y Billetes",
      "Posters",
      "Otros",
    ],
  },
  // Agregar más categorías aquí si lo deseas
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Barra de navegación */}
      <header className="bg-yellow-400 p-4 flex items-center justify-between">
        <a href="./" className="h-12">
          <img
            src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
            alt="Mercado Libre Logo"
            className="h-12"
          />
        </a>
        <input
          type="text"
          className="p-2 rounded-lg"
          placeholder="Buscar productos, marcas y más..."
        />
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto p-6">
        {/* Título de categorías */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Categorías para comprar y vender
        </h2>

        {/* Lista de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-50"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
