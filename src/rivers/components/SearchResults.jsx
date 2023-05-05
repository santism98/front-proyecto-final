import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


export const SearchResults = ({ searchTerm, category = "" }) => {
  const navigate = useNavigate();

  const [rivers, setRivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRivers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/size");
        const data = await response.json();
        setRivers(data);
        setIsLoading(false);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchRivers();
  }, []);

  return (
    <>
      <div className="grid-container">
        {rivers.length > 0 ? (
          rivers.map((river) => (
            <div className="card" key={river.id}>
              <h2>{river.rio}</h2>
              <p className="tramo">
                <strong>Tramo:</strong> {river.tramo}
              </p>
              <p className="capturas">
                <strong>Capturas:</strong> {river.capturas_rs}
              </p>
            </div>
          ))
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </>
  );
};
