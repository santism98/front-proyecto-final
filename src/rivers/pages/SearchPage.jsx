import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";
import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { category } = useParams() || "";

  const addSearch = async (search) => {
    setSearchTerm(search);
  };

  return (
    <>
    <section className="mg-lg">
      <h1 className="txt-cntr">BUSCA POR TRAMO {category}</h1>
      
      <SearchForm addSearch={addSearch} />
      
      
      {searchTerm && (
        <SearchResults searchTerm={searchTerm} category={category} />
      )}
     
    </section>

        


    </>
  );

};
