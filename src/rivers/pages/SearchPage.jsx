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
      <section className="my-8">
        <h1 className="text-center text-3xl font-bold mb-4">BUSCA POR TRAMO {category}</h1>

        <div className="max-w-3xl mx-auto">
          <SearchForm addSearch={addSearch} />

          {searchTerm && (
            <SearchResults searchTerm={searchTerm} category={category} />
          )}
        </div>
      </section>
    </>
  );
};
