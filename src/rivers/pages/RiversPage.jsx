import { useNavigate } from "react-router-dom";

export const RiversPage = () => {
  const navigate = useNavigate();
  return (
    <section className="my-8">
      <h1 className="text-3xl font-bold mb-4">Los mejores tramos de pesca de España</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <button className="bg-green text-white rounded-lg p-4 hover:bg-green-dark" onClick={() => navigate("/search")}>
          <h4 className="text-lg font-medium mb-2">Filtro</h4>
          <img className="w-full rounded-lg" src="src\assets\IMG_6795.JPG" alt="" />
        </button>
        <button className="bg-green text-white rounded-lg p-4 hover:bg-green-dark" onClick={() => navigate("/mapa")}>
          <h4 className="text-lg font-medium mb-2">Mapa</h4>
          <img className="w-full rounded-lg" src="src\assets\IMG_6756.JPG" alt="" />
        </button>
        <button className="bg-green text-white rounded-lg p-4 hover:bg-green-dark" onClick={() => navigate("/search/:category")}>
          <h4 className="text-lg font-medium mb-2">Por Categoría</h4>
          <img className="w-full rounded-lg" src="src\assets\IMG_6759.JPG" alt="" />
        </button>
      </div>
    </section>
  );
};
