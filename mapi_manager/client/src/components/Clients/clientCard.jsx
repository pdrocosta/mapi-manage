import { useState } from "react";
import ClientAvatar from "./ClientAvatar";

const ClientCard = ({ client, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(client)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #e0deda",
        borderRadius: 16,
        padding: 20,
        cursor: "pointer",
        transition: "box-shadow 150ms, transform 150ms",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,.08)" : "none",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <ClientAvatar name={client.name} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: 600, fontSize: 15, color: "#1a1a1a",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {client.name}
          </div>
          <div style={{ fontSize: 12, color: "#9b9b9b" }}>{client.city}</div>
        </div>
        <span style={{
          fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20,
          background: client.active ? "#e8f8f1" : "#fdecea",
          color: client.active ? "#2d9e6b" : "#d94f4f",
          flexShrink: 0,
        }}>
          {client.active ? "Ativo" : "Inativo"}
        </span>
      </div>

      {/* Contact */}
      <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        ✉ {client.email}
      </div>
      <div style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 16 }}>
        ☎ {client.phone}
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 8, borderTop: "1px solid #f0efeb", paddingTop: 14 }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a" }}>{client.orders}</div>
          <div style={{ fontSize: 11, color: "#9b9b9b" }}>Pedidos</div>
        </div>
        <div style={{ width: 1, background: "#f0efeb" }} />
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#4f6ef7" }}>
            {client.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </div>
          <div style={{ fontSize: 11, color: "#9b9b9b" }}>Total gasto</div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
