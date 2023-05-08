import React from 'react';
import {Mapa} from './Map'


export const ResultCard = ({ resultado }) => {
  return (
    <div className="card">
      <Mapa/>
      <h3>{resultado.nombre}</h3>
      <p>Rio: {resultado.rio}</p>
      <p>Tramo: {resultado.tramo}</p>
      <p>Media de capturas: {resultado.capturas_rs}</p>
      <p>Tamaño medio: {resultado.media_capturas}</p>
    </div>
  );
};


