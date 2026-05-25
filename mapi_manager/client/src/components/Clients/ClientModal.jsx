// components/clients/ClientModal.jsx
import { useNavigate } from "react-router";
import ClientAvatar from "./ClientAvatar";

const ClientModal = ({ client, onClose }) => {
  const navigate = useNavigate();

  if (!client) return null;

  const fields = [
    ["E-mail",      client.email],
    ["Telefone",    client.phone],
    ["Cidade",      client.city],
    ["Status",      client.active ? "Ativo" : "Inativo"],
    ["Pedidos",     client.orders],
    ["Total gasto", client.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })],
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 100, padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: 20,
          padding: 32, width: "100%", maxWidth: 420,
          boxShadow: "0 20px 60px rgba(0,0,0,.15)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <ClientAvatar name={client.name} size={44} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{client.name}</div>
            <div style={{ fontSize: 13, color: "#9b9b9b" }}>{client.city}</div>
          </div>
        </div>

        {/* Fields */}
        {fields.map(([label, value]) => (
          <div key={label} style={{
            display: "flex", justifyContent: "space-between",
            padding: "10px 0", borderBottom: "1px solid #f0efeb", fontSize: 14,
          }}>
            <span style={{ color: "#9b9b9b" }}>{label}</span>
            <span style={{ fontWeight: 500 }}>{value}</span>
          </div>
        ))}

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1, padding: "10px 0",
              border: "1px solid #e0deda", borderRadius: 10,
              background: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: 14,
            }}
          >
            Fechar
          </button>
          <button
            onClick={() => navigate("/pedidos")}
            style={{
              flex: 1, padding: "10px 0",
              border: "none", borderRadius: 10,
              background: "#1a1a1a", color: "#fff",
              cursor: "pointer", fontFamily: "inherit",
              fontSize: 14, fontWeight: 600,
            }}
          >
            Ver pedidos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
