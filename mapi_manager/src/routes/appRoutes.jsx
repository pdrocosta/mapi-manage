import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import Dashboard from "../pages/dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  )
}
