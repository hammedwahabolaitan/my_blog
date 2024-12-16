import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../page/Homepage";
import AddNewBlog from "../component/AddNewBlog";
import EditPage from "../component/EditPage";
import BlogPage from "../page/BlogPage";
import LoginPage from "../page/LoginPage";

export default function Router() {


  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AddNewBlog" element={<AddNewBlog />} />
          {/* <Route path="/singleBlogItems/:id" element={<BlogPage />} /> */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/EditPage" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
