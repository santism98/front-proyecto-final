/**

Función que realiza la búsqueda de ríos en base a un término y una categoría.
@function
@param {string} searchTerm - Término de búsqueda.
@param {string} category - Categoría de búsqueda.
@returns {object} Objeto con el resultado de la búsqueda y si se está cargando o no.
*/



import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import { RiverContext } from "../context/RiverContext";


export const SearchRivers = (searchTerm, category) => {
   

    //url in case of api fetch
    const url = `httphttp://localhost:3000/todos`;  //AQUÍ MI DIRECCION LOCALHOST
    if (category) {
        const { riversViewed } = useContext(RiverContext);
       
        const SearchRivers = riversViewed.filter((item) =>
            item.text.trim().toUpperCase().includes(searchTerm)
        );
        return {
            river: SearchRivers,
            isLoading: false
        }
    } else {//if category doesn't exist, fetch
        const { river, isLoading } = useFetch(url);
        return { river, isLoading }
    }

}
