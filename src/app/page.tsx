"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "./LoginPage"; // Asegúrate de que LoginPage esté importado correctamente
import CodigoPostalModal from "./CodigoPostalModal"; // Importamos el modal
import { Link } from "react-router-dom";
import RegisterPage from "./registro/RegisterPage";
import MasVendidos from "./MasVendidos/MasVendidos";
import ComprasProtegidas from "./CompraProtegida/CompraProtegida";
import NuestrasCategorias from "./NuestraCategoria/NuestrasCategorias";
import Vender from "./Vender/vender";

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
  const [showModal, setShowModal] = useState(false); // Controlar la visibilidad del modal

  // Configuración del carrusel con botones personalizados
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev bg-blue-500 text-white w-50 h-50 flex items-center justify-center rounded-full shadow-lg">
        &lt;
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-blue-500 text-white w-24 h-24 flex items-center justify-center rounded-full shadow-lg">
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
              {/* Mostrar el modal al iniciar */}
              {showModal && <CodigoPostalModal />}
              {/* Barra de navegación */}
              <header className="bg-yellow-400 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
                    alt="Mercado Libre Logo"
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
                      Carrito
                    </button>
                  </Link>
                </div>
              </header>

              {/* Carrusel de imágenes */}
              <div className="text-center p-8">
                <Slider {...settings}>
                  <div>
                    <img
                      src="	https://http2.mlstatic.com/D_NQ_929406-MLA79524525195_092024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>

                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_783607-MLA81111769547_122024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>
                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_973294-MLA81011731096_122024-OO.webp"
                      alt="Banner 1"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>
                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_683745-MLA80961703494_122024-OO.webp"
                      alt="Banner 2"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>
                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_740306-MLA80962605084_122024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>
                  <div>
                    <img
                      src="	https://http2.mlstatic.com/D_NQ_929406-MLA79524525195_092024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>

                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_759153-MLA81010652294_122024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>

                  <div>
                    <img
                      src="https://http2.mlstatic.com/D_NQ_610695-MLA81228672181_122024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>

                  <div>
                    <img
                      src="	https://http2.mlstatic.com/D_NQ_929406-MLA79524525195_092024-OO.webp"
                      alt="Banner 3"
                      className="mx-auto mb-4 w-full h-auto" // Ajuste para imagen más grande
                    />
                  </div>
                </Slider>
                <h1 className="text-2xl font-bold">
                  Tu primera compra con envío gratis
                </h1>
                <button
                  className="bg-yellow-400 text-black px-4 py-2 rounded mt-4"
                  onClick={() => setShowModal(true)} // Mostrar modal al hacer clic
                >
                  Ingresa tu ubicación
                </button>
              </div>

              {/* Opciones principales */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                <Card
                  title="Ingresa a tu cuenta"
                  description="Disfruta de ofertas y compra sin límites."
                  url="/login" // Cambiado para redirigir a la página de Login
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
                <AdCard title="Ayuda a reducir manchas" brand="Eucerin" />
                <AdCard
                  title="Protección solar a prueba de agua"
                  brand="Nivea"
                />
              </div>
            </div>
          }
        />

        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vender" element={<Vender />} />

        <Route path="/nuestras-categorias" element={<NuestrasCategorias />} />
        <Route path="/compra-protegida" element={<ComprasProtegidas />} />
        <Route path="/mas-vendidos" element={<MasVendidos />} />
        {/* Ruta para el modal */}
        <Route path="/ingresa-tu-ubicacion" element={<CodigoPostalModal />} />

        <Route path="/registrarse" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

// Componente de Tarjeta Principal
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

// Componente de Tarjeta de Anuncio
const AdCard: React.FC<AdCardProps> = ({ title, brand }) => (
  <div className="flex-1 bg-orange-500 text-white p-4 rounded shadow-md">
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{brand}</p>
    <button className="bg-white text-orange-500 px-4 py-2 rounded mt-4">
      Ver más
    </button>
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

{
  /* Sección de Celulares y Telefonía */
}
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
</div>;

export default App;
