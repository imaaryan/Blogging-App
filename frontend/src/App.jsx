import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Blog from "./pages/BlogSingle.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { Login } from "./pages/Login.jsx";
import BlogArchive from "./pages/BlogArchive.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import BlogList from "./pages/admin/BlogList.jsx";
import AddBlog from "./pages/admin/AddBlog.jsx";
import Comments from "./pages/admin/Comments.jsx";

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
        <Route path="/dashboard" element={true ? <AdminLayout /> : <Login />}>
          <Route index element={<AdminDashboard />} />
          <Route path="bloglist" element={<BlogList />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
