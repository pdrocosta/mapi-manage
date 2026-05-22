import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import { STATUS, MOCK_ORDERS } from "../schemas/mock";
import OrderCard from "../Documents/mapi_manage/mapi_manager/src/components/orderCard";


const Orders = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = MOCK_ORDERS.filter(o => {
    const matchSearch =
      o.client.toLowerCase().includes(search.toLowerCase()) ||
      o.id.includes(search) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f7f6f2", fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <button
              onClick={() => navigate("/dashboard")}
              style={{ background: "none", border: "none", color: "#6b6b6b", cursor: "pointer", fontSize: 13, marginBottom: 8, padding: 0 }}
            >
              ← Dashboard
            </button>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Pedidos</h1>
            <p style={{ color: "#6b6b6b", marginTop: 4, fontSize: 14 }}>{filtered.length} pedidos encontrados</p>
          </div>
          <button
            style={{
              background: "#1a1a1a", color: "#fff", border: "none",
              borderRadius: 10, padding: "10px 20px", fontWeight: 600,
              fontSize: 14, cursor: "pointer",
            }}
          >
            + Novo pedido
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Buscar por cliente, produto ou nº..."
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
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            style={{
              padding: "10px 14px", border: "1.5px solid #e0deda",
              borderRadius: 10, fontSize: 14, fontFamily: "inherit",
              background: "#fff", cursor: "pointer", outline: "none",
            }}
          >
            <option value="all">Todos os status</option>
            {Object.entries(STATUS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e0deda", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f7f6f2", borderBottom: "1px solid #e0deda" }}>
                {["Nº", "Cliente", "Produto", "Qtd", "Valor", "Status", "Data", ""].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#6b6b6b", fontSize: 12, textTransform: "uppercase", letterSpacing: ".04em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: 40, textAlign: "center", color: "#9b9b9b" }}>
                    Nenhum pedido encontrado.
                  </td>
                </tr>
              ) : filtered.map((o, i) => (
                <tr
                  key={o.id}
                  style={{
                    borderBottom: i < filtered.length - 1 ? "1px solid #f0efeb" : "none",
                    transition: "background 150ms",
                    cursor: "pointer",
                    background: selected === o.id ? "#f0efeb" : "transparent",
                  }}
                  onClick={() => setSelected(selected === o.id ? null : o.id)}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafaf8"}
                  onMouseLeave={e => e.currentTarget.style.background = selected === o.id ? "#f0efeb" : "transparent"}
                >
                  <td style={{ padding: "14px 16px", fontWeight: 600, color: "#4f6ef7" }}>#{o.id}</td>
                  <td style={{ padding: "14px 16px", fontWeight: 500 }}>{o.client}</td>
                  <td style={{ padding: "14px 16px", color: "#6b6b6b" }}>{o.product}</td>
                  <td style={{ padding: "14px 16px", color: "#6b6b6b" }}>{o.qty}</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600 }}>
                    {o.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </td>
                  <td style={{ padding: "14px 16px" }}><OrderCard status={o.status} /></td>
                  <td style={{ padding: "14px 16px", color: "#9b9b9b", fontSize: 13 }}>
                    {new Date(o.date).toLocaleDateString("pt-BR")}
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <button
                      style={{ background: "none", border: "1px solid #e0deda", borderRadius: 8, padding: "4px 12px", fontSize: 12, cursor: "pointer", color: "#6b6b6b" }}
                      onClick={e => { e.stopPropagation(); alert(`Ver detalhes do pedido #${o.id}`); }}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {Object.entries(STATUS).map(([k, v]) => {
            const count = MOCK_ORDERS.filter(o => o.status === k).length;
            return (
              <div key={k} style={{ background: "#fff", border: "1px solid #e0deda", borderRadius: 12, padding: "14px 20px", flex: 1, minWidth: 120 }}>
                <div style={{ fontSize: 12, color: "#9b9b9b", fontWeight: 500, marginBottom: 4 }}>{v.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: v.color }}>{count}</div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
