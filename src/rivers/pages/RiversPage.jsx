import { useNavigate } from "react-router-dom";

export const RiversPage = () => {
  const navigate = useNavigate();
  return (
    <section className="mg-md">
      <h1>Los mejores tramos de pesca de España</h1>
      <div className="grid-1-3 mg-md">
        <button className="mg-md" onClick={() => navigate("/search")}>
          <h4 className="mg-sm">Filtro</h4>
          <img className="w100" src="src\assets\IMG_6795.JPG" alt="" />
        </button>
        <button className="mg-md" onClick={() => navigate("/mapa")}>
          <h4 className="mg-sm">mapa</h4>
          <img className="w100" src="src\assets\IMG_6756.JPG" alt="" />
        </button>
        <button className="mg-md" onClick={() => navigate("/search/:category")}>
          <h4 className="mg-sm">por categoria</h4>
          <img className="w100" src="src\assets\IMG_6759.JPG" alt="" />
        </button>
      </div>
    </section>
  );
};
