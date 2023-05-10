import React, { useState } from 'react';

import { ResultCard } from './CardResult';
export const SearchResults = () => {
  const [resultados, setResultados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://bac-proyecto-final.onrender.com/bigger`); // Cambiar la fecha por la que se quiera buscar
    const data = await response.json();
    setResultados(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit bg-blue-500">LOS MEJORES TRAMOS DE PESCA HASTA AHORA SEGÚN NUESTROS USUARIOS</button>
      </form>
      <div className="grid-container">
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
