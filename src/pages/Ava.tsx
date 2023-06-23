import { Footer } from "../components/home/Footer";
import { Slogan } from "../components/home/Slogan";
import { Navbar } from "../components/home/Navbar";
import { Collection } from "../components/collections/Collection";

export const Ava: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div id="inicio" className="bg-beach bg-cover bg-left sm:bg-left md:bg-slightly-right lg:bg-center w-full h-screen relative">
          <Navbar />
          <div className="mt-56 flex justify-end mr-10 lg:mr-5 xl:mr-5 2xl:mr-0">
            <Slogan />
          </div>
        </div>
        <main className="flex-grow">
          <div id="coleccion" className="pt-32 text-center">
            <Collection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
