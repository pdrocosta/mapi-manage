import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientsFilters from "../components/clients/ClientsFilters";
import ClientsGrid from "../components/clients/ClientsGrid";
import ClientModal from "../components/clients/ClientModal";

const MOCK_CLIENTS = [
  { id: 1, name: "Empresa Alpha", email: "contato@alpha.com.br",   phone: "(11) 99999-0001", city: "São Paulo",      orders: 8,  total: 12400.0, active: true  },
  { id: 2, name: "Beta Ltda",     email: "admin@betaltda.com.br",   phone: "(21) 98888-0002", city: "Rio de Janeiro", orders: 3,  total: 4350.0,  active: true  },
  { id: 3, name: "Gamma Corp",    email: "gamma@corp.com.br",       phone: "(31) 97777-0003", city: "Belo Horizonte", orders: 15, total: 31000.0, active: true  },
  { id: 4, name: "Delta S/A",     email: "financeiro@delta.com.br", phone: "(41) 96666-0004", city: "Curitiba",       orders: 2,  total: 1920.0,  active: false },
  { id: 5, name: "Epsilon ME",    email: "epsilon@me.com.br",       phone: "(51) 95555-0005", city: "Porto Alegre",   orders: 6,  total: 8700.0,  active: true  },
];

const Clients = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);

  const filtered = MOCK_CLIENTS.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase());
    const matchActive =
      filterActive === "all" ||
      (filterActive === "active" && c.active) ||
      (filterActive === "inactive" && !c.active);
    return matchSearch && matchActive;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f7f6f2", fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Page header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <button
              onClick={() => navigate("/dashboard")}
              style={{ background: "none", border: "none", color: "#6b6b6b", cursor: "pointer", fontSize: 13, marginBottom: 8, padding: 0 }}
            >
              ← Dashboard
            </button>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Clientes</h1>
            <p style={{ color: "#6b6b6b", marginTop: 4, fontSize: 14 }}>{filtered.length} clientes encontrados</p>
          </div>
          <button style={{
            background: "#1a1a1a", color: "#fff", border: "none",
            borderRadius: 10, padding: "10px 20px",
            fontWeight: 600, fontSize: 14, cursor: "pointer",
          }}>
            + Novo cliente
          </button>
        </div>

        {/* Components */}
        <ClientsFilters
          search={search}
          onSearch={setSearch}
          filterActive={filterActive}
          onFilterActive={setFilterActive}
        />

        <ClientsGrid
          clients={filtered}
          onClientClick={setSelectedClient}
        />

      </main>

      <ClientModal
        client={selectedClient}
        onClose={() => setSelectedClient(null)}
      />

      <Footer />
    </div>
  );
};

export default Clients;
