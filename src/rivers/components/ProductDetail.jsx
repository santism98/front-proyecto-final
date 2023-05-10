import { Link, useNavigate } from "react-router-dom";

export const ProductDetail = ({ river }) => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="mg-sm shadow grid-1-2 mg-lg  ">
        <div>
          <h2 className="mg-sm">{river.text}</h2>
          <p className="mg-sm">Description: {river.description}</p>
          <p className="mg-sm">Rating: {river.rating}/5</p>
          <p className="mg-sm">Price: ${river.price}</p>
        </div>
        <div>
          <img className="w100" src={river.url} alt={river.text} />
        </div>
      </section>
      <p>
        <button
          className="txt-cntr bg-green pd-sm w100 block"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </p>
    </div>
  );
};
