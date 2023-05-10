import React, { useState } from 'react';
import { Mapa } from './Map'

export const ResultCard = ({ resultado }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-sm mx-auto">
      <Mapa />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Río: {resultado.rio}</div>
        <p className="text-gray-700 text-base mb-2">Tramo: {resultado.tramo}</p>
        <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Ver detalle
        </button>
      </div>
      {showDetail && (
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base mb-2">Media de capturas: {resultado.capturas_rs}</p>
          <p className="text-gray-700 text-base mb-2">Tamaño medio: {resultado.media_capturas}</p>
          <p className="text-gray-700 text-base mb-2">Ninfa recomendada: {resultado.ninfa1}</p>
          <p className="text-gray-700 text-base mb-2">Mosca recomendada: {resultado.seca1}</p>
        </div>
      )}
    </div>
  );
};
