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