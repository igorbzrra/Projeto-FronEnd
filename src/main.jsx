import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "frontend\src\App.jsx";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AccountsPage from "./pages/AccountsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ParcelsPage from "./pages/ParcelsPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/parcels" element={<ParcelsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
