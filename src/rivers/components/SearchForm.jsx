import React, { useState } from 'react';
import { ResultCard } from './CardResult';

export const SearchForm = () => {
  const [provincia, setProvincia] = useState('');
  const [resultados, setResultados] = useState([]);
  const [tipoBusqueda, setTipoBusqueda] = useState('rio');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://bac-proyecto-final.onrender.com/${tipoBusqueda}?${tipoBusqueda}=${provincia}`);
    const data = await response.json();
    setResultados(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center">
  <label htmlFor="tipoBusqueda" className="font-bold">Tipo de búsqueda:</label>
  <select id="tipoBusqueda" value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value.toLocaleLowerCase())} className="border rounded-md">
    <option value="rio">Río</option>
    <option value="tramo">Tramo</option>
    <option value="provincia">Provincia</option>
    <option value="bigger">Bigger</option>
  </select>
  <label htmlFor="provincia" className="font-bold">Búsqueda:</label>
  <input type="text" id="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value.toUpperCase())} className="border rounded-md"/>
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Buscar</button>
</form>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center my-4">
  <h3 className="text-xl font-bold mb-4">Te recomendamos:</h3>
  {resultados.length > 0 ? (
    resultados.map((resultado) => (
      <ResultCard key={resultado.id} resultado={resultado} />
    ))
  ) : (
    <p className="text-center text-red-500 font-bold">No hay resultados</p>
  )}
</div>

    </>
  );
};
