import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";
import CardInformations from "./pages/CardInformations";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/card/:id" element={<CardInformations />} />
    </Routes>
  );
};

export default AppRoutes;
