import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LoginButton } from "../components/Login";
import { LogoutButton } from "../components/Logout";

/**
 * Página principal de la aplicación.
 *
 * @returns {JSX.Element} El componente de la página principal.
 */
export const HomePage = () => {
  //const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión.
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <h1>INICIA SESION PARA REALIZAR CAMBIOS</h1>
      <LoginButton />
      <LogoutButton />
    </>
  );
};
