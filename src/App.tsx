import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
