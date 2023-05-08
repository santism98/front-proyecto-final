import React, { useState } from 'react';
import { ResultCard } from './CardResult';

export const SearchForm = () => {
  const [provincia, setProvincia] = useState('');
  const [resultados, setResultados] = useState([]);
  const [tipoBusqueda, setTipoBusqueda] = useState('rio');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/${tipoBusqueda}?${tipoBusqueda}=${provincia}`);
    const data = await response.json();
    setResultados(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
  <label for="tipoBusqueda">Tipo de búsqueda:</label>
  <select id="tipoBusqueda" value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value.toLocaleLowerCase())}>
    <option value="rio">Río</option>
    <option value="tramo">Tramo</option>
    <option value="provincia">Provincia</option>
    <option value="bigger">Bigger</option>
  </select>
  <label for="provincia">Busqueda:</label>
  <input type="text" id="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value.toUpperCase())} />
  <button type="submit">Buscar</button>
</form>
      <div className="grid-container">
      <h3>Te recomendamos:</h3>
        {resultados.length > 0 ? (
          resultados.map((resultado) => (
            <ResultCard key={resultado.id} resultado={resultado} />
          ))
        ) : (
          <p className='error-msg'>No hay resultados</p>
        )}
      </div>
    </>
  );
};
