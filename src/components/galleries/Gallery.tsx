import React, { Dispatch, SetStateAction } from 'react';
import ImageCard from './ImageCard';
import FilterItem from './FilterItem';
import { ImageProps } from './ImageProps';

interface GalleryProps {
  activeFilter: string | null;
  setActiveFilter: Dispatch<SetStateAction<string | null>>;
}

export const Gallery: React.FC<GalleryProps> = ({ activeFilter, setActiveFilter }) => {
  console.log('Active filter:', activeFilter);
  const images: ImageProps[] = React.useMemo(() => [
    // TWO PIECES 
    { url: 'https://images.unsplash.com/photo-1440675493896-3b6ef216d8e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Dos Piezas', talla: 'S, M, L', precio: 100 },
    { url: 'https://cdn.pixabay.com/photo/2016/11/19/10/52/bikini-1838592_960_720.jpg', alt: 'Dos Piezas', talla: 'S, M, L', precio: 100 },
    { url: 'https://cdn.pixabay.com/photo/2019/08/18/22/42/gir-4415149_960_720.jpg', alt: 'Dos Piezas', talla: 'S, M, L', precio: 120 },
    { url: 'https://cdn.pixabay.com/photo/2018/04/11/23/45/summer-3312183_960_720.jpg', alt: 'Dos Piezas', talla: 'S, M, L', precio: 120 },
    // CASUAL STYLE
    { url: 'https://images.unsplash.com/photo-1571506753402-80b295e173ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', alt: 'Estilo Casual', talla: 'S, M, L', precio: 90 },
    { url: 'https://images.unsplash.com/photo-1553939296-a6811648a5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1329&q=80', alt: 'Estilo Casual', talla: 'S, M, L', precio: 90 },
    // ONE PIECE
    { url: 'https://images.unsplash.com/photo-1445075788823-f907c29aae58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Enterizo', talla: 'S, M, L', precio: 90 },
    //NIGHT DRESS
    { url: 'https://images.unsplash.com/photo-1623184502217-d5e1cab9363b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Vestido de Noche', talla: 'S, M, L', precio: 90 },
    //SWIMSUIT
    { url: 'https://images.unsplash.com/photo-1623114859744-1bfc8d27360b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', alt: 'Traje Formal', talla: 'S, M, L', precio: 90 },
  ], []);

  const filteredImages = activeFilter
    ? images.filter((image) => image.alt.toLowerCase() === activeFilter.toLowerCase())
    : images;


  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-start-2 col-span-8 flex">
        <div className="flex flex-col items-center w-1/5 rounded-l-xl border-l-4 border-t-4 border-b-4 border-pink-600 bg-ava-background px-4 py-2 shadow-2xl" >
          <h2 className="text-xl font-menu-navbar mb-4 text-center">Categorias</h2>
          {['Dos Piezas', 'Estilo Casual', 'Enterizo', 'Vestido de Noche', 'Traje Formal'].map((filter) => (
            <FilterItem
              key={filter}
              name={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
            />
          ))}
        </div>
        <div className="flex flex-wrap bg-ava-background rounded-r-xl  border-4 border-pink-600 min-h-screen w-4/5 shadow-2xl">
          {filteredImages.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};
