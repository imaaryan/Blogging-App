import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../sections/NavBar";
import Footer from "../sections/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
