import React from 'react';


export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-10">
        <div className="flex flex-col items-center">

          <p className="text-center">
            Ava Swimsuits.
          </p>
        </div>
        <div>
          <span className="footer-title font-semibold text-white">Servicios</span>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Marca</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Diseño</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Marketing</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Publicidad</a>
        </div>
        <div>
          <span className="footer-title font-semibold text-white">Compañía</span>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Acerca de nosotros</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Contacto</a>
        </div>
        <div>
          <span className="footer-title font-semibold text-white">Legal</span>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Términos de uso</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Política de privacidad</a>
          <a className="block mt-2 text-gray-200 hover:text-white transition-colors hover:shadow-lg" href="#">Política de cookies</a>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white">
          &copy; 2023
          <span className="text-gray-300 font-bold">Ava Swimsuits.</span> Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
