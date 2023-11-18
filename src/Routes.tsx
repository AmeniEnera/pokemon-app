import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
  );
};

export default AppRoutes;
