/**

Obtiene la información de los ríos a través de una petición HTTP GET.
@async
@function getRivers
@param {string} url - La URL de la API a la que se hará la petición.
@returns {Promise<{searchrivers: Array, prodTotal: number|null}>} - Una promesa que devuelve un objeto con un array de objetos de los ríos y un número que representa la cantidad total de productos o null si ocurrió un error al realizar la petición.
*/



import {connection } from "../apis/connection"

export const getRivers = async (url) => {

    let arrayrivers;
    let prodTotal;

    const { ok, river } = await connection(url)

    if (!river.ok) {

        const array = []
        arrayrivers = [...array, river]

        prodTotal = null
    } else {
        arrayRivers = river.river
        prodTotal = river.total;
    }

    const searchrivers = arrayRivers.map(river => ({
        id: river.id,
        rio: river.rio,
        tramo: river.tramo,
        capturas: river.capturas_rs,
        ninfa1: river.ninfa1,
        seca1: seca2
    }))


    return { searchrivers, prodTotal }

}