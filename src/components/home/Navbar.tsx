import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between fixed top-0 z-50 ${isTop ? '' : 'bg-white bg-opacity-70'
        }`}
    >
      <h1 className="uppercase font-semibold cursor-pointer font-serif text-5xl">
        AVA
      </h1>
      <nav className="flex items-center gap-4 text-lg">
        <a
          href="#inicio"
          className="
            xl:py-1
            xl:px-2
            rounded-lg
            hover:bg-gray-100
            transition-colors
            sm:py-2
            sm:px-4
          "
        >
          Inicio
        </a>
        <a
          href="#coleccion"
          className="
            xl:py-1
            xl:px-2
            rounded-lg
            hover:bg-gray-100
            transition-colors
            sm:py-2
            sm:px-4
          "
        >
          Colección
        </a>
        <a
          href="#"
          className="
            xl:py-1
            xl:px-2
            rounded-lg
            hover:bg-gray-100
            transition-colors
            sm:py-2
            sm:px-4
          "
        >
          Conócenos
        </a>
        <a
          href="#"
          className="
            xl:py-1
            xl:px-2
            rounded-lg
            hover:bg-gray-100
            transition-colors
            sm:py-2
            sm:px-4
          "
        >
          Contacto
        </a>
      </nav>
    </div>
  );
};
