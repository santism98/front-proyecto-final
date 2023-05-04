import React, { useState } from 'react';

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
        
        <label htmlFor="tipoBusqueda">Tipo de búsqueda:</label>
        <select id="tipoBusqueda" value={tipoBusqueda} onChange={(e) => setTipoBusqueda(e.target.value.toLocaleLowerCase())}>
          <option value="rio">Río</option>
          <option value="tramo">Tramo</option>
          <option value="provincia">Provincia</option>
          <option value="bigger">Bigger</option>
        </select>
        <label htmlFor="provincia">Busqueda:</label>
        <input type="text" id="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value.toUpperCase())} />
        <button type="submit">Buscar</button>
      </form>
      <div className="card-container">
        {resultados.map((resultado) => (
          <div key={resultado.id} className="card">
            <h3>{resultado.nombre}</h3>
            <p>Rio: {resultado.rio}</p>
            <p>Tramo: {resultado.tramo}</p>
            <p>Media de capturas: {resultado.capturas_rs}</p>
            <p>Tamaño medio: {resultado.media_capturas}</p>
           
          </div>
        ))}
      </div>
    </>
  );
};
