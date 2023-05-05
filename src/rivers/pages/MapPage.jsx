//import { SearchResults } from "../components/SearchResults";
import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RiverContext } from "../context/RiverContext";
import { Link } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
//import { PageNumbers } from "../components/PageNumbers";
import { Mapa } from "../components/Map";
export const MapPage = () => {
  



 
  

  return (
    <>
   
     
      <Mapa/>

    </>
  );
};
