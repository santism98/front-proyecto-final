//import { SearchResults } from "../components/SearchResults";
import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RiverContext } from "../context/RiverContext";
import { Link } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
//import { PageNumbers } from "../components/PageNumbers";

export const MapPage = () => {
  



 
  

  return (
    <>
    <section className="mg-lg">
     

      <h1>AQUÍ EL MAPA</h1>
     
      <iframe className="flex" width="560" height="315" src="https://www.youtube.com/embed/LYwaBpL6njk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     

    </section>
    </>
  );
};
