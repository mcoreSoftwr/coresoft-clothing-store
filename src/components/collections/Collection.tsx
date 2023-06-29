import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useSwipeable } from 'react-swipeable';

interface Slide {
  url: string;
  description: string;
}

interface CollectionProps {
  onImageClick: (description: string) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onImageClick }) => {
  const slides: Slide[] = [
    {
      url: 'https://images.unsplash.com/photo-1440675493896-3b6ef216d8e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Dos Piezas',
    },
    {
      url: 'https://images.unsplash.com/photo-1571506753402-80b295e173ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Estilo Casual',
    },
    {
      url: 'https://images.unsplash.com/photo-1445075788823-f907c29aae58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Enterizo',
    },
    {
      url: 'https://images.unsplash.com/photo-1623184502217-d5e1cab9363b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Vestido de Noche',
    },
    {
      url: 'https://images.unsplash.com/photo-1623114859744-1bfc8d27360b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      description: 'Traje Formal',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slidesToShow = 3;

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const prevSlide = () => {
    setCurrentIndex(old => Math.max(0, old - slidesToShow));
  };

  const nextSlide = () => {
    setCurrentIndex(old => Math.min(slides.length - slidesToShow, old + slidesToShow));
  };

  return (
    <div className='max-w-full w-full m-auto py-16 relative group' {...handlers}>
      <div className='relative w-full h-full flex flex-col sm:flex-row justify-center items-center space-y-16 sm:space-y-0 sm:space-x-16 bg-ava-background mb-40'>
        {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
          <div
            key={index}
            className='w-3/4 h-96 sm:w-1/3 sm:h-128 md:w-1/4 md:h-160 lg:w-1/5 lg:h-192 xl:w-1/6 xl:h-192 rounded-2xl m-2 border-2 border-gray-800 shadow-2xl flex flex-col items-center justify-center '
            onClick={() => onImageClick(slide.description)}
          >
            <div style={{ backgroundImage: `url(${slide.url})` }}
              className='w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-3/4 xl:w-4/5 xl:h-4/5 bg-center bg-cover transition duration-300 ease-in-out hover:scale-110 rounded-md'
            />
            <div className='p-4 text-center'>
              {slide.description}
            </div>
          </div>
        ))}
      </div>
      {/* left arrow */}
      <div className='sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className='sm:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>



  );
};
