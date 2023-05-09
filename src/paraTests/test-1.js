export const useFetch = (url) => {

    const [river, setRivers] = useState([]);
    const [total, setTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
