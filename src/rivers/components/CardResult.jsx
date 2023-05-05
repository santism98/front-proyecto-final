import React from 'react';

export const ResultCard = ({ resultado }) => {
  return (
    <div className="card">
      <h3>{resultado.nombre}</h3>
      <p>Rio: {resultado.rio}</p>
      <p>Tramo: {resultado.tramo}</p>
      <p>Media de capturas: {resultado.capturas_rs}</p>
      <p>Tamaño medio: {resultado.media_capturas}</p>
    </div>
  );
};


