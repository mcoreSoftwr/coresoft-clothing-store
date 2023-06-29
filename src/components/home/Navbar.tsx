import React, { useEffect, useState } from 'react';

export const Navbar: React.FC<{ activeSection: string | null }> = ({ activeSection }) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
      setIsOpen(false); // Cierra el menú cuando se desplaza
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (section: string) => {
    return section === activeSection ? "underline" : "";
  };

  return (
    <div className={`w-full rounded-lg p-4 fixed top-0 z-50 ${isTop ? '' : 'bg-ava-navbar bg-opacity-90'}`}>
      <div className="flex md:block justify-between items-center">
        <h1 className="md:text-center mt-4 uppercase text-gray-800 cursor-pointer font-ava-title text-8xl xl xl:text-center">
          AVA
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              {isOpen ? (
                <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 011.697-1.697L10 8.183l2.651-2.779a1.2 1.2 0 011.697 0l2.758 3.152-2.758 3.15a1.2 1.2 0 010 1.698z" />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H3z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`text-gray-700 lg:text-3xl md:text-2xl ${isOpen ? 'block' : 'hidden'} md:flex md:justify-center md:mt-4`}>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <a
            href="#Home"
            className={`
        font-menu-navbar
        py-1 px-2
        xl:py-2 xl:px-4
        rounded-md
        hover:bg-green-100
        transition-colors
        text-center
        my-2
        ${isActive("Home")}
      `}
          >
            Inicio
          </a>
          <a
            href="#Collection"
            className={`
              py-1 px-2
              xl:py-2 xl:px-4
              font-menu-navbar
              rounded-md
              hover:bg-green-100
              transition-colors
              text-center
              my-2
              ${isActive("Collection")}
              `}

          >
            Colección
          </a>
          <a href="#Gallery"
            className={`
            py-1 px-2 xl:py-2 xl:px-4 
            font-menu-navbar 
            rounded-md hover:bg-green-100 
            transition-colors 
            text-center my-2 
            ${isActive("Gallery")}
            `}>
            Galeria
          </a>
          <a
            href="#Contact"
            className={`
              py-1 px-2
              xl:py-2 xl:px-4
              font-menu-navbar
              rounded-md
              hover:bg-green-100
              transition-colors
              text-center
              my-2
              ${isActive("Contact")}
              `}
          >
            Contacto
          </a>
        </div>
      </nav >
    </div >
  );
};
