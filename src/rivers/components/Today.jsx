import React, { useState } from 'react';
import { ResultCard } from './CardResult';

export const Today = () => {
  const [resultados, setResultados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://bac-proyecto-final.onrender.com/fecha`); // Cambiar la fecha por la que se quiera buscar
    const data = await response.json();
    setResultados(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          PULSA AQUÍ PARA VER DÓNDE PUEDES PESCAR HOY
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {resultados.length > 0 ? (
          resultados.map((resultado) => (
            <ResultCard key={resultado.id} resultado={resultado} />
          ))
        ) : (
          <p className="text-center ">HOY NO SE PESCA</p>
        )}
      </div>
    </>
  );
};


