import React, { useState } from 'react';

import { ResultCard } from './CardResult';
export const Today = () => {
  const [resultados, setResultados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/fecha`); // Cambiar la fecha por la que se quiera buscar
    const data = await response.json();
    setResultados(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">PULSA AQUÍ PARA VER DÓNDE PUEDES PESCAR HOY</button>
      </form>
      <div className="card-container">
        {resultados.length > 0 ? (
          resultados.map((resultado) => (
            <ResultCard key={resultado.id} resultado={resultado} />
          ))
        ) : (
          <p className='error'>HOY NO SE PESCA</p>
        )}
      </div>
    </>
  );
};


