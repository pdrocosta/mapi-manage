import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import Dashboard from "../pages/dashboard";
import Clients from "../pages/clients";
import Orders from "../pages/orders";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients/>} />
      <Route path="/orders" element={<Orders/>} />
    </Routes>

  )
}

export default AppRoutes;

