interface SloganProps {
  onViewCollection: () => void;
}
export const Slogan: React.FC<SloganProps> = ({ onViewCollection }) => {
  return (
    <>
      <div className="flex flex-col items-center px-8 md:px-16 lg:px-32 pt-8 pl-24 2xl:ml-60 2xl:mt-5">
        <h1 className="hidden sm:block text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center font-slogan1 text-white mt-10">
          Deslúmbrate bajo el sol con nuestros vestidos <br />de baño
        </h1>
        <h2 className="hidden sm:block italic sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-slogan2 text-white">
          Magnifica tu estilo y siéntete segura.
        </h2>
        <div className="mt-8">
          <button onClick={onViewCollection} className="border font-collection-button border-black text-black bg-orange-400 py-2 px-4 hover:bg-orange-400 hover:text-white rounded-full transition-colors">
            Ver Colección
          </button>
        </div>
      </div>
    </>
  );
};
