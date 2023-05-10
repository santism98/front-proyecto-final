import { Routes, Route, Navigate } from "react-router-dom";
import { RiverProvider } from "../rivers/context/RiverProvider";

import {
  RiversPage,
  MapPage,
  DetailView,
  SearchPage,
  RankingPage,
  UserFormPage,
  AdminFormPage
} from "../rivers/pages/index";
import { NavBar } from "../ui/NavBar";
import { TodayPage } from "../rivers/pages/TodayPage";

export const RiversRouter = () => {
  return (
    <>
      <NavBar />
      <RiverProvider>
        <Routes>
          <Route path="/rios" element={<RiversPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/view/:id" element={<DetailView />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/user" element={<UserFormPage/>} />
          <Route path="/admin" element={<AdminFormPage/>}/>
          <Route path="/*" element={<Navigate to={"/rios"} />} />
        </Routes>
      </RiverProvider>
    </>
  );
};
