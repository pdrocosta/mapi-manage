import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import ClientCard from "../Documents/mapi_manage/mapi_manager/src/components/clientCard";
import { MOCK_CLIENTS } from "../schemas/mock";


const Clients = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  const [modal, setModal] = useState(null); // client object or null

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

        {/* Title */}
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
          <button
            style={{
              background: "#1a1a1a", color: "#fff", border: "none",
              borderRadius: 10, padding: "10px 20px", fontWeight: 600,
              fontSize: 14, cursor: "pointer",
            }}
          >
            + Novo cliente
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Buscar por nome, e-mail ou cidade..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, minWidth: 220, padding: "10px 14px",
              border: "1.5px solid #e0deda", borderRadius: 10,
              fontSize: 14, fontFamily: "inherit", outline: "none",
              background: "#fff",
            }}
          />
          <select
            value={filterActive}
            onChange={e => setFilterActive(e.target.value)}
            style={{
              padding: "10px 14px", border: "1.5px solid #e0deda",
              borderRadius: 10, fontSize: 14, fontFamily: "inherit",
              background: "#fff", cursor: "pointer", outline: "none",
            }}
          >
            <option value="all">Todos</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.length === 0 ? (
            <p style={{ color: "#9b9b9b", gridColumn: "1/-1", textAlign: "center", padding: 40 }}>
              Nenhum cliente encontrado.
            </p>
          ) : filtered.map(c => (
            <div
              key={c.id}
              style={{
                background: "#fff", border: "1px solid #e0deda",
                borderRadius: 16, padding: 20,
                transition: "box-shadow 150ms, transform 150ms",
                cursor: "pointer",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              onClick={() => setModal(c)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <ClientCard name={c.name} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "#9b9b9b" }}>{c.city}</div>
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20,
                  background: c.active ? "#e8f8f1" : "#fdecea",
                  color: c.active ? "#2d9e6b" : "#d94f4f",
                }}>
                  {c.active ? "Ativo" : "Inativo"}
                </span>
              </div>

              <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                ✉ {c.email}
              </div>
              <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 16 }}>
                ☎ {c.phone}
              </div>

              <div style={{ display: "flex", gap: 8, borderTop: "1px solid #f0efeb", paddingTop: 14 }}>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a" }}>{c.orders}</div>
                  <div style={{ fontSize: 11, color: "#9b9b9b" }}>Pedidos</div>
                </div>
                <div style={{ width: 1, background: "#f0efeb" }} />
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#4f6ef7" }}>
                    {c.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </div>
                  <div style={{ fontSize: 11, color: "#9b9b9b" }}>Total gasto</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de detalhes */}
      {modal && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}
          onClick={() => setModal(null)}
        >
          <div
            style={{ background: "#fff", borderRadius: 20, padding: 32, width: "100%", maxWidth: 420, boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <ClientCard name={modal.name} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{modal.name}</div>
                <div style={{ fontSize: 13, color: "#9b9b9b" }}>{modal.city}</div>
              </div>
            </div>
            {[
              ["E-mail", modal.email],
              ["Telefone", modal.phone],
              ["Status", modal.active ? "Ativo" : "Inativo"],
              ["Pedidos", modal.orders],
              ["Total gasto", modal.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0efeb", fontSize: 14 }}>
                <span style={{ color: "#9b9b9b" }}>{label}</span>
                <span style={{ fontWeight: 500 }}>{value}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button
                onClick={() => setModal(null)}
                style={{ flex: 1, padding: "10px 0", border: "1px solid #e0deda", borderRadius: 10, background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}
              >
                Fechar
              </button>
              <button
                onClick={() => navigate("/pedidos")}
                style={{ flex: 1, padding: "10px 0", border: "none", borderRadius: 10, background: "#1a1a1a", color: "#fff", cursor: "pointer", fontFamily: "inherit", fontSize: 14, fontWeight: 600 }}
              >
                Ver pedidos
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Clients;
