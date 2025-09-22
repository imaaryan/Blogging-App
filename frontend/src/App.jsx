import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Blog from "./pages/BlogSingle.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { Login } from "./pages/Login.jsx";
import BlogArchive from "./pages/BlogArchive.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<BlogArchive />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
