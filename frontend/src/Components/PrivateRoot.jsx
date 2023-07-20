// import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoot = ({children}) => {
  let data = JSON.parse(localStorage.getItem("user")) || <null></null>
  if (data["username"] !== "Ayush" && data["password"] !== "ayush123") {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoot;
