import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { Login } from "./pages/Login.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
