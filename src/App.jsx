import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ApiMetod from "./pages/ApiMetod";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <div className="container">

      <Routes>
        <Route index element={<ApiMetod/>}/>
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs></Blogs>
            </MainLayout>
          }
        ></Route>
        <Route path="/blogs/:id" element={<BlogDetail></BlogDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
