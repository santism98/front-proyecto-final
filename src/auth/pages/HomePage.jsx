import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="mg-md">
      <h1 className="title">Homepage</h1>
      <button
        className="txt-cntr bg-green pd-sm w100 block"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </section>
  );
};
