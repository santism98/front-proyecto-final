import { Routes, Route, Navigate } from "react-router-dom";
import {RiversRouter } from "./RiversRouter";
import { AuthRouter } from "./AuthRouter";
import { useContext } from "react";
import { UserContext } from "../auth/context/UserContext";

export const AppRouter = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes>
      
        <Route path="/*" element={<RiversRouter />} />
     
        <Route path="/login/*" element={< AuthRouter/>} />
      
    </Routes>
  );
};




