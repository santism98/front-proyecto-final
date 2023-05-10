/**
 * Hook que realiza una petición a una API para obtener información de ríos.
 * @param {string} url - La URL de la API.
 * @returns {Object} Un objeto con la información de los ríos, la cantidad total de resultados y un booleano que indica si se está cargando la información.
 */
import { useState, useEffect } from "react";
import { getRivers } from "../helpers/getRivers";

export const useFetch = (url) => {

    const [river, setRivers] = useState([]);
    const [total, setTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Obtiene la información de los ríos a través de la API.
     */
    const getItems = async () => {
        const { searchRivers, prodTotal } = await getRivers(url);
        setRivers(searchRivers);
        setTotal(prodTotal);
        setIsLoading(false);
    };
    
    useEffect(() => {
        getItems();
    }, []);

    return {
        total,
        river,
        isLoading
    };
};
