import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  discount: string;
}

// Dividir los productos en dos categorías
const phoneProducts: Product[] = [
  {
    id: 1,
    title: "Pocophone Poco M5s",
    price: 4833,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_718939-MLU69664239605_052023-P.webp",
    description: "Pocophone Poco M5s Dual Sim 256 Gb Gris 8 Gb Ram",
    discount: "37% OFF",
  },
  {
    id: 2,
    title: "Kit Funda Para iPhone",
    price: 1057,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_626476-MLM52852615958_122022-P.webp",
    description: "Funda y mica para proteger tu iPhone.",
    discount: "47% OFF",
  },

  {
    id: 3,
    title: "Cargador de carga rapida",
    price: 300,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_989992-MLA73878427003_012024-O.webp",
    description: "Funda y mica para proteger tu iPhone.",
    discount: "47% OFF",
  },
  {
    id: 3,
    title: "Cargador portatil",
    price: 105,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_916643-MLA80364973745_112024-P.webp",
    description: "Cargador portatil con diferentes tipos de entrada.",
    discount: "47% OFF",
  },
  {
    id: 3,
    title: "Audifonos AirPods",
    price: 1057,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_971276-MLU78878971440_092024-F.webp",
    description: "Cancelacion de ruido y bajos increibles!!!.",
    discount: "47% OFF",
  },
  {
    id: 3,
    title: "Audifonos Bluetooth",
    price: 1057,
    imageUrl:
      "	https://http2.mlstatic.com/D_Q_NP_2X_964856-MLU73064138847_112023-P.webp",
    description:
      "Auriculares Xiaomi Redmi Buds 6 Active Bluetooth 5.4 Color Negro",
    discount: "47% OFF",
  },
  {
    id: 3,
    title: "SmartWach",
    price: 1057,
    imageUrl:
      "		https://http2.mlstatic.com/D_Q_NP_2X_627965-CBT80108429473_102024-P.webp",
    description: "Reloj Inteligente.",
    discount: "47% OFF",
  },

  // Agrega más productos de celulares
];

const fashionProducts: Product[] = [
  {
    id: 4,
    title: "Sudadera con Capucha",
    price: 299,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_697992-MLM50612836821_072022-P.webp",
    description: "Sudadera con capucha para hombre.",
    discount: "25% OFF",
  },
  {
    id: 5,
    title: "Chamarra de Invierno",
    price: 799,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_904926-MLM72649651500_112023-P.webp",
    description: "Chamarra de invierno para mujer, estilo moderno.",
    discount: "50% OFF",
  },
  {
    id: 6,
    title: "Pants Jogger Deportivo",
    price: 179,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_854253-MLM72898869983_112023-P.webp",
    description: "Pants jogger deportivos para hombre, estilo cómodo.",
    discount: "40% OFF",
  },
  {
    id: 4,
    title: "Pijama",
    price: 299,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_871183-MLM79922754784_102024-P.webp",
    description: "Pijama para mujer .",
    discount: "25% OFF",
  },
  {
    id: 5,
    title: "Pantalon para hombre",
    price: 799,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_920773-MLM75178784628_032024-P.webp",
    description: "Pantalon tipo Jeans.",
    discount: "50% OFF",
  },
  {
    id: 6,
    title: "Playera Tipo Polo",
    price: 179,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_807016-MLM49913340701_052022-P.webp",
    description: "Unisex",
    discount: "40% OFF",
  },
  {
    id: 4,
    title: "Sandalia",
    price: 299,
    imageUrl:
      "https://http2.mlstatic.com/D_Q_NP_2X_643223-MLM76229293489_052024-P.webp",
    description: "Sandalias color negro.",
    discount: "25% OFF",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-yellow-400 p-4 text-center">
        <Image
          src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
          alt="Mercado Libre Logo"
          width={200}
          height={300}
          className="mx-auto h-12"
        />
        <h2 className="text-black text-xl mt-4">Descubre los más vendidos</h2>
      </header>

      {/* Sección de Celulares y Telefonía */}
      <div className="container mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Celulares y Telefonía</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {phoneProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto"
              />
              <h4 className="text-xl font-semibold mt-2">{product.title}</h4>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm text-red-600">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Ropa, Bolsas y Calzado */}
      <div className="container mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Ropa, Bolsas y Calzado</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {fashionProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto"
              />
              <h4 className="text-xl font-semibold mt-2">{product.title}</h4>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm text-red-600">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
