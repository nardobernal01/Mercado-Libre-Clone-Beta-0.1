"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import Image from "next/image";

const App: React.FC = () => {
  // Estado para controlar la apertura de los diálogos
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Funciones para abrir y cerrar los diálogos
  const openInfoDialog = () => setIsInfoOpen(true);
  const closeInfoDialog = () => setIsInfoOpen(false);
  const openContactDialog = () => setIsContactOpen(true);
  const closeContactDialog = () => setIsContactOpen(false);

  return (
    <div className="bg-gray-100">
      {/* Barra de navegación */}
      <header className="bg-yellow-400 p-4 text-center">
        <Image
          src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
          alt="Mercado Libre Logo"
          width={50}
          height={50}
          layout="responsive"
          className="mx-auto"
        />
        <h2 className="text-black text-xl mt-4">Compra Protegida</h2>
      </header>

      {/* Contenido principal */}
      <div className="container mx-auto p-6">
        {/* Sección de introducción */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-center mb-4">
            Compra con seguridad y tranquilidad
          </h3>
          <p className="text-gray-700 text-center mb-4">
            En Mercado Libre te ofrecemos protección total en todas tus compras.
            Tu dinero está seguro, y si algo sale mal, te reembolsamos tu
            dinero. Además, nuestros vendedores están verificados para
            garantizar que recibas lo que pagaste.
          </p>
          <p className="text-gray-700 text-center mb-6">
            Desde productos electrónicos hasta ropa, cualquier artículo que
            compres con la protección de Mercado Libre está cubierto por nuestra
            política de compra protegida, para que tu experiencia de compra sea
            más confiable y sin preocupaciones.
          </p>
          <div className="flex justify-center">
            <button
              onClick={openInfoDialog}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              ¡Quiero más información!
            </button>
          </div>
        </section>

        {/* Sección de cómo funciona */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-bold mb-4">¿Cómo funciona?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Compra</h4>
              <p className="text-gray-700">
                Encuentra productos de confianza y compra con total seguridad.
                Mercado Libre verifica a cada vendedor para asegurarse de que
                todos los productos que ofrecen sean legítimos y de calidad.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Pago seguro</h4>
              <p className="text-gray-700">
                Realiza tu pago con tarjeta, en efectivo o transferencia,
                siempre de manera segura. Además, contamos con medidas de
                seguridad avanzadas que protegen tus datos personales.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Protección total</h4>
              <p className="text-gray-700">
                Si algo sale mal con tu compra, Mercado Libre te reembolsará el
                dinero de forma rápida y sencilla, asegurando tu satisfacción y
                confianza en la plataforma.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de beneficios */}
        <section className="bg-blue-50 p-8 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-center mb-4">
            Beneficios de Comprar con Protección
          </h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-2">
              Compra protegida en cada transacción, sin importar el tipo de
              producto.
            </li>
            <li className="text-gray-700 mb-2">
              Devoluciones fáciles y rápidas si el producto no es lo que
              esperabas o si llega dañado.
            </li>
            <li className="text-gray-700 mb-2">
              Respaldo y garantía de Mercado Libre, lo que te da confianza al
              comprar.
            </li>
            <li className="text-gray-700 mb-2">
              Acceso a soporte y atención al cliente en cualquier momento del
              proceso de compra.
            </li>
            <li className="text-gray-700 mb-2">
              Posibilidad de recibir un reembolso completo si no estás
              satisfecho con el producto o si el vendedor no cumple con lo
              prometido.
            </li>
          </ul>
        </section>

        {/* Sección de contacto */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-center mb-4">Contacto</h3>
          <p className="text-gray-700 text-center mb-4">
            Si tienes alguna duda o necesitas más información sobre el proceso
            de compra protegida, puedes contactarnos directamente a través de
            nuestros canales de soporte.
          </p>
          <div className="flex justify-center">
            <button
              onClick={openContactDialog}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Contáctanos
            </button>
          </div>
        </section>
      </div>

      {/* Dialogo de "Más información" */}
      <Dialog open={isInfoOpen} onClose={closeInfoDialog}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <Dialog.Panel className="bg-white p-8 rounded-lg max-w-lg">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Más información sobre la compra protegida
            </Dialog.Title>
            <Dialog.Description className="text-gray-700 mb-4">
              La protección de compra de Mercado Libre te asegura que recibirás
              lo que compraste. Si no estás satisfecho con el producto o si no
              llega, Mercado Libre se encargará de devolverte tu dinero. Además,
              puedes estar tranquilo porque todos nuestros vendedores son
              verificados para garantizar la calidad de los productos.
            </Dialog.Description>
            <div className="flex justify-end">
              <button
                onClick={closeInfoDialog}
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Dialogo de "Contáctanos" */}
      <Dialog open={isContactOpen} onClose={closeContactDialog}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <Dialog.Panel className="bg-white p-8 rounded-lg max-w-lg">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Contacta con nosotros
            </Dialog.Title>
            <Dialog.Description className="text-gray-700 mb-4">
              Si necesitas asistencia adicional o tienes preguntas sobre tu
              compra, puedes comunicarte con nuestro equipo de atención al
              cliente. Estamos disponibles a través de correo electrónico, chat
              en vivo o teléfono para resolver cualquier duda que tengas.
            </Dialog.Description>
            <div className="flex justify-end">
              <button
                onClick={closeContactDialog}
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Pie de página */}
      <footer className="bg-yellow-400 p-4 text-center">
        <p className="text-black text-sm">
          © 2024 Mercado Libre. Todos los derechos reservados. |{" "}
          <a
            href="https://www.mercadolibre.com.mx/terminos"
            className="text-blue-700"
          >
            Términos y condiciones
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
