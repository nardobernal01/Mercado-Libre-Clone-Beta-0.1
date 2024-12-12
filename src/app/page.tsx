"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import CodigoPostalModal from "./CodigoPostalModal";
import { Link } from "react-router-dom";
import RegisterPage from "./registro/RegisterPage";
import MasVendidos from "./MasVendidos/MasVendidos";
import ComprasProtegidas from "./CompraProtegida/CompraProtegida";
import NuestrasCategorias from "./NuestraCategoria/NuestrasCategorias";
import Vender from "./Vender/vender";
import MisCompras from "./MisCompras/mis-compras";
import NoPurchases from "./NoPurchases";
import Image from "next/image";

// Importa react-slick y sus estilos
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define las propiedades para los componentes de tarjeta
interface CardProps {
  title: string;
  description: string;
  url: string;
}

interface AdCardProps {
  title: string;
  brand: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  discount: string;
}

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  // Función para agregar productos al carrito
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
        &lt;
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
        &gt;
      </button>
    ),
  };

  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <div className="bg-gray-100 min-h-screen">
              {showModal && (
                <CodigoPostalModal onClose={() => setShowModal(false)} />
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
                  <Link to="/vender">
                    <button className="text-blue-700">Vender</button>
                  </Link>
                  <Link to="/registrarse">
                    <button className="text-blue-700">Crea tu cuenta</button>
                  </Link>
                  <Link to="/login">
                    <button className="text-blue-700">Ingresa</button>
                  </Link>
                  <Link to="/mis-compras">
                    <button className="text-blue-700">Mis compras</button>
                  </Link>
                  <Link to="/carrito">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded">
                      Carrito ({cart.length})
                    </button>
                  </Link>
                </div>
              </header>

              {/* Carrusel de imágenes */}
              <div className="text-center p-8">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_929406-MLA79524525195_092024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto"
                    />
                  </div>

                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_783607-MLA81111769547_122024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto"
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

              {/* Opciones principales */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                <Card
                  title="Ingresa a tu cuenta"
                  description="Disfruta de ofertas y compra sin límites."
                  url="/login"
                />
                <Card
                  title="Ingresa tu ubicación"
                  description="Consulta costos y tiempos de entrega."
                  url="/ingresa-tu-ubicacion"
                />
                <Card
                  title="Registrarse"
                  description="Descubre productos con precios bajos."
                  url="/registrarse"
                />
                <Card
                  title="Más vendidos"
                  description="Explora los productos que son tendencia."
                  url="/mas-vendidos"
                />
                <Card
                  title="Compra protegida"
                  description="Puedes devolver tu compra gratis."
                  url="/compra-protegida"
                />
                <Card
                  title="Nuestras categorias"
                  description="Encuentra celulares, ropa, inmuebles y más"
                  url="/nuestras-categorias"
                />
              </div>

              {/* Sección de anuncios */}
              <div className="flex space-x-4 p-4">
                <AdCard
                  title="¿Sabías que en Mercado Libre puedes encontrar descuentos de hasta el 70%?"
                  brand="¡Ahorra como nunca antes!"
                />
                <AdCard
                  title="Aprovecha las increíbles ofertas de Mercado Libre:"
                  brand="¡Descuentos que te sorprenderán!"
                />
                <AdCard
                  title="Sabias que en MercadoLibre"
                  brand="Te llegan en 24 Horas"
                />
              </div>
              {/* Sección de Ropa, Bolsas y Calzado */}
              <div className="container mx-auto p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Ropa, Bolsas y Calzado
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {fashionProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-4 rounded shadow-lg"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-auto"
                      />
                      <h4 className="text-xl font-semibold mt-2">
                        {product.title}
                      </h4>
                      <p className="text-gray-600">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        <span className="text-sm text-red-600">
                          {product.discount}
                        </span>
                      </div>
                      <button
                        className="bg-green-600 text-white py-2 px-4 rounded mt-4"
                        onClick={() => addToCart(product)}
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sección de Celulares y Telefonía */}
              <div className="container mx-auto p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Celulares y Telefonía
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {phoneProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-4 rounded shadow-lg"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-auto"
                      />
                      <h4 className="text-xl font-semibold mt-2">
                        {product.title}
                      </h4>
                      <p className="text-gray-600">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        <span className="text-sm text-red-600">
                          {product.discount}
                        </span>
                      </div>
                      <button
                        className="bg-green-600 text-white py-2 px-4 rounded mt-4"
                        onClick={() => addToCart(product)}
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/mis-compras" element={<MisCompras />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/nuestras-categorias" element={<NuestrasCategorias />} />
        <Route path="/compra-protegida" element={<ComprasProtegidas />} />
        <Route path="/mas-vendidos" element={<MasVendidos />} />
        <Route
          path="/ingresa-tu-ubicacion"
          element={<CodigoPostalModal onClose={() => setShowModal(false)} />}
        />
        <Route path="/registrarse" element={<RegisterPage />} />
        {/* Ruta para el carrito */}
        <Route
          path="/carrito"
          element={
            <div className="container mx-auto p-6">
              <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
              {cart.length > 0 ? (
                <div>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded shadow-md mb-4"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-32 h-auto"
                      />
                      <h4 className="text-xl font-semibold mt-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold">${item.price}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4">
                    <span className="font-bold text-lg">
                      Total: $
                      {cart.reduce((total, item) => total + item.price, 0)}
                    </span>
                  </div>
                </div>
              ) : (
                <p>No tienes productos en el carrito</p>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

const Card: React.FC<CardProps> = ({ title, description, url }) => (
  <div className="bg-white p-4 rounded shadow-md text-center">
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <Link to={url}>
      <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Ver más
      </button>
    </Link>
  </div>
);

const AdCard: React.FC<AdCardProps> = ({ title, brand }) => (
  <div className="flex-1 bg-orange-500 text-white p-4 rounded shadow-md">
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{brand}</p>
    <Link to="/login">
      <button className="bg-white text-orange-500 px-4 py-2 rounded mt-4">
        Ver más
      </button>
    </Link>
  </div>
);

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
    description: "Funda para iPhone 14, 13, 12 con protector de pantalla",
    discount: "29% OFF",
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

  {
    id: 3,
    title: "Smartphone Xiaomi Redmi 12",
    price: 2499,
    imageUrl:
      "	https://http2.mlstatic.com/D_NQ_NP_2X_872083-MLA80531828298_112024-F.webp",
    description: "Xiaomi Redmi 12 4gb 128gb Azul",
    discount: "5% OFF",
  },
  {
    id: 4,
    title: "Smartphone Samsung Galaxy A24",
    price: 3499,
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_832809-MLU74194834317_012024-F.webp",
    description: "Samsung Galaxy A24 4GB 128GB Negro",
    discount: "6% OFF",
  },
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
];

export default App;
