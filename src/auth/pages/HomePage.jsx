import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LoginButton } from "../components/Login";
import { LogoutButton } from "../components/Logout";

export const HomePage = () => {
 

  

  return (
    <>
  <h1>INICIA SESION PARA REALIZAR CAMBIOS</h1>
     <LoginButton/>
     <LogoutButton/>
    </>
  );
};
