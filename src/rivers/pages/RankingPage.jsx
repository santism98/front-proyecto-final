


import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RiverContext } from "../context/RiverContext";
import { Link } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
//import { PageNumbers } from "../components/PageNumbers";

export const RankingPage = () => {

  //AQUÍ SE MOSTRARÁN LOS MEJORES TRAMOS



  return (
    <section className="mg-lg">
      <Link className="bg-green sd-pd-sm mg-sm">
        RANKING DE TRAMOS
      </Link>
      <h1>RANKING DE TRAMOS</h1>

      <SearchResults/>

     
    </section>
  );
};

