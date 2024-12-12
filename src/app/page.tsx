"use client";

// pages/index.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = {
  phones: [
    {
      id: 1,
      title: "Pocophone Poco M5s",
      price: 4833,
      imageUrl:
        "https://http2.mlstatic.com/D_Q_NP_2X_718939-MLU69664239605_052023-P.webp",
      description: "Pocophone Poco M5s Dual Sim 256 Gb Gris 8 Gb Ram",
      discount: "37% OFF",
    },
    // Más productos...
  ],
  fashion: [
    {
      id: 4,
      title: "Sudadera con Capucha",
      price: 299,
      imageUrl:
        "https://http2.mlstatic.com/D_Q_NP_2X_697992-MLM50612836821_072022-P.webp",
      description: "Sudadera con capucha para hombre.",
      discount: "25% OFF",
    },
    // Más productos...
  ],
};

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2>Ingresa tu ubicación</h2>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <header className="bg-yellow-400 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
            alt="Mercado Libre Logo"
            width={150}
            height={150}
            className="h-8"
          />
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="px-4 py-2 rounded-full w-full max-w-md"
          />
        </div>
        <div className="flex space-x-4">
          <Link href="/vender" legacyBehavior>
            <a className="text-blue-700">Vender</a>
          </Link>
          <Link href="/registrarse" legacyBehavior>
            <a className="text-blue-700">Crea tu cuenta</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="text-blue-700">Ingresa</a>
          </Link>
          <Link href="/mis-compras" legacyBehavior>
            <a className="text-blue-700">Mis compras</a>
          </Link>
          <Link href="/carrito" legacyBehavior>
            <a className="bg-blue-600 text-white py-2 px-4 rounded">
              Carrito ({cart.length})
            </a>
          </Link>
        </div>
      </header>

      <div className="text-center p-8">
        <Slider {...settings}>
          <div>
            <Image
              src="https://http2.mlstatic.com/D_NQ_929406-MLA79524525195_092024-OO.webp"
              alt="Banner 1"
              width={800}
              height={300}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="https://http2.mlstatic.com/D_NQ_783607-MLA81111769547_122024-OO.webp"
              alt="Banner 2"
              width={800}
              height={300}
              className="mx-auto"
            />
          </div>
        </Slider>
        <h1 className="text-2xl font-bold">
          Tu primera compra con envío gratis
        </h1>
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded mt-4"
          onClick={() => setShowModal(true)}
        >
          Ingresa tu ubicación
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        <Card
          title="Ingresa a tu cuenta"
          description="Disfruta de ofertas y compra sin límites."
          url="/login"
        />
        {/* Más tarjetas */}
      </div>

      <div className="container mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Celulares y Telefonía</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.phones.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h3 className="text-2xl font-bold mb-4">Ropa, Bolsas y Calzado</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.fashion.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, description, url }) => (
  <div className="bg-white p-4 rounded shadow-md text-center">
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <Link href={url} legacyBehavior>
      <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Ver más
      </a>
    </Link>
  </div>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white p-4 rounded shadow-lg">
    <Image
      src={product.imageUrl}
      alt={product.title}
      width={200}
      height={300}
      className="w-full h-auto"
    />
    <h4 className="text-xl font-semibold mt-2">{product.title}</h4>
    <p className="text-gray-600">{product.description}</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-lg font-bold">${product.price}</span>
      <span className="text-sm text-red-600">{product.discount}</span>
    </div>
    <button
      className="bg-green-600 text-white py-2 px-4 rounded mt-4"
      onClick={() => addToCart(product)}
    >
      Agregar al carrito
    </button>
  </div>
);
