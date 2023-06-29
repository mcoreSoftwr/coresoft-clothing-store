import { ImageProps } from './ImageProps';

const ImageCard: React.FC<ImageProps> = ({ url, alt, talla, precio }) => {

  return (
    <div className={`w-3/4 h-96 sm:w-1/2 sm:h-128 md:w-1/2 md:h-160 lg:w-1/3 lg:h-192 xl:w-1/4 xl:h-192 rounded-2xl border-2 border-white shadow-2xl flex flex-col items-center justify-center`}>
      <img src={url} alt={alt} className="w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-3/4 xl:w-4/5 xl:h-4/5 bg-center bg-cover rounded-md" />
      <div className="px-4 py-2">
        <div>{talla}</div>
        <div>${precio}</div>
      </div>
    </div>
  );
};

export default ImageCard;
