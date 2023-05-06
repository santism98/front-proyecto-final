import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../auth/pages/index";
import { NavBar } from "../ui/NavBar";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={<HomePage/>} /> */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
