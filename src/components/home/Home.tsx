import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-8 md:px-16 lg:px-32 pt-8 pl-24">
        <h1 className="text-sm sm:text-base md:text-2xl items-end  lg:text-3xl xl:text-4xl text-center font-serif text-black mt-10">
          Deslúmbrate bajo el sol con nuestros vestidos <br />de baño
        </h1>
        <h2 className="italic sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-medium">
          Magnifica tu estilo y siéntete segura.
        </h2>
        <div className="mt-8 items-center">
          <button className="border font-semibold border-black text-black bg-orange-400 py-2 px-4 hover:bg-orange-400 hover:text-white rounded-full transition-colors">
            Ver Colección
          </button>
        </div>
      </div>
    </>
  );
};