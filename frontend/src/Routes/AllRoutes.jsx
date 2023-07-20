import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Admin/Admin";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import PrivateRoot from "../Components/PrivateRoot";
import Movies from "../Pages/Movies";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/admin"
        element={
          <PrivateRoot>
            <Admin />
          </PrivateRoot>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
