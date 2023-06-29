import React from 'react';
import Card from './Card';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-ava-background rounded-lg shadow-lg">
      <h2 className="text-3xl  mb-4 text-gray-800">Contacto</h2>
      <div className="text-gray-700 ">
        <Card
          vendors={['+50761793321', '+50761793322', '+50761793323']}
          email="contacto@ava.com"
        />
      </div>
    </div>
  )
}

export default Contact;
