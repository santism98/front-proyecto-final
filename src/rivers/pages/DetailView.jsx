import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";
import { useFetch } from "../hooks/useFetch";

export const DetailView = () => {
  const { id } = useParams();

  //set api url
  const url = `https://localhost/:3000/river/${id}`;

  const { river, isLoading } = useFetch(url);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      {river.map((river) => (
        <ProductDetail river={river} />
      ))}
    </>
  );
};
