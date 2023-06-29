import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // necesitas instalar react-icons

type CardProps = {
  vendors: string[];
  email: string;
}

const Card: React.FC<CardProps> = ({ vendors, email }) => {

  const openWhatsApp = (vendor: string) => {
    const message = `Hola ${vendor}, me gustaría contactarte.`;
    const url = `https://wa.me/${vendor}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md overflow-hidden max-h-screen m-4 p-4">
      {vendors.map((vendor, index) => (
        <div key={index} className="m-2 p-2 border rounded-md cursor-pointer hover:bg-gray-200 flex items-center h-16 w-96 justify-center" onClick={() => openWhatsApp(vendor)}>
          <FaWhatsapp size={24} className="mr-2" />
          <h2 className="font-semibold">Vendedor {index + 1}</h2>
        </div>
      ))}
      <a className="text-blue-500 underline mt-2" href={`mailto:${email}`}>Contacto: {email}</a>
    </div>
  );
}

export default Card;
