import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>

  )
}