import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../auth/pages/index";
import { NavBar } from "../ui/NavBar";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
