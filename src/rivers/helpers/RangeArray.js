

export const RangeArray = (num) => {
    const pageArray = [...Array(num).keys()].map(number => number + 1)

    return pageArray
}
