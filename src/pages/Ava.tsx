import { Footer } from "../components/home/Footer";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/home/Navbar";
import { SlideSwimsuit } from "../components/slides/SlideSwimsuit";

export const Ava: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div id="inicio" className="bg-beach bg-cover bg-center w-full h-screen relative">
          <Navbar />
          <div className="mt-56">
            <Home />
          </div>
        </div>
        <main className="flex-grow">
          <div id="coleccion" className="pt-32 text-center">
            <h1 className="uppercase font-semibold cursor-pointer font-serif text-4xl sm:text-5xl">
              Colección
            </h1>
            <SlideSwimsuit />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
