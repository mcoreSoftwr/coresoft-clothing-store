import { useState, useRef, useEffect } from 'react';
import { Footer } from "../components/home/Footer";
import { Slogan } from "../components/home/Slogan";
import { Navbar } from "../components/home/Navbar";
import { Collection } from "../components/collections/Collection";
import { Gallery } from "../components/galleries/Gallery";
import Contact from '../components/contact/Contact';
import AOS from 'aos';

export const Ava: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const collectionRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (description: string) => {
    setActiveFilter(description);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeSection, activeFilter]);



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50; // Añade un offset si es necesario

      const homePosition = homeRef.current ? homeRef.current.offsetTop : 0;
      const collectionPosition = collectionRef.current ? collectionRef.current.offsetTop : 0;
      const galleryPosition = galleryRef.current ? galleryRef.current.offsetTop : 0;
      const contactPosition = contactRef.current ? contactRef.current.offsetTop : 0;

      if (scrollPosition >= homePosition && scrollPosition < collectionPosition) {
        setActiveSection("Home");
      } else if (scrollPosition >= collectionPosition && scrollPosition < galleryPosition) {
        setActiveSection("Collection");
      } else if (scrollPosition >= galleryPosition && scrollPosition < contactPosition) {
        setActiveSection("Gallery");
      } else if (scrollPosition >= contactPosition) {
        setActiveSection("Contact");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className="flex flex-col min-h-screen justify-between" ref={homeRef}>
        <div id="Home" className="bg-beach bg-cover bg-left sm:bg-left md:bg-slightly-right lg:bg-center w-full h-screen relative">
          <Navbar activeSection={activeSection} />
          <div className="mt-56 flex justify-end mr-10 lg:mr-5 xl:mr-5 2xl:mr-0">
            <Slogan onViewCollection={() => {
              if (collectionRef.current) {
                collectionRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }} />
          </div>
        </div>
        <main className="flex-grow">
          <hr className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
          <div id="Collection" data-aos="fade-right" ref={collectionRef} className="pt-48 bg-ava-navbar text-center">
            <Collection onImageClick={handleImageClick} />
          </div>
          <hr className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
          <div id="Gallery" data-aos="fade-right" ref={galleryRef} className="pt-48 bg-ava-navbar text-center">
            <Gallery activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
          <hr className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-100" />
          <div id="Contact" data-aos="fade-right" ref={contactRef} className="pt-48 bg-ava-navbar text-center pb-44">
            <Contact />
          </div>
        </main>
        <Footer />
      </div >
    </>
  );
};
