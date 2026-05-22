import { useState } from "react";
import StatusBadge from "./StatusBadge";

const HEADERS = ["Nº", "Cliente", "Produto", "Qtd", "Valor", "Status", "Data", ""];

const OrdersTable = ({ orders, onView }) => {
  const [selected, setSelected] = useState(null);

  const handleRowClick = (id) => {
    setSelected(prev => (prev === id ? null : id));
  };

  if (orders.length === 0) {
    return (
      <div style={{
        background: "#fff", border: "1px solid #e0deda",
        borderRadius: 16, padding: 40, textAlign: "center",
        color: "#9b9b9b", fontSize: 14,
      }}>
        Nenhum pedido encontrado.
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e0deda", overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f7f6f2", borderBottom: "1px solid #e0deda" }}>
            {HEADERS.map(h => (
              <th key={h} style={{
                padding: "12px 16px", textAlign: "left",
                fontWeight: 600, color: "#6b6b6b",
                fontSize: 12, textTransform: "uppercase", letterSpacing: ".04em",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <OrderRow
              key={order.id}
              order={order}
              isLast={i === orders.length - 1}
              isSelected={selected === order.id}
              onClick={() => handleRowClick(order.id)}
              onView={() => onView(order)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ── Row subcomponent ──────────────────────────────
const OrderRow = ({ order, isLast, isSelected, onClick, onView }) => {
  const [hovered, setHovered] = useState(false);

  const bg = isSelected ? "#f0efeb" : hovered ? "#fafaf8" : "transparent";

  return (
    <tr
      style={{
        borderBottom: isLast ? "none" : "1px solid #f0efeb",
        background: bg,
        cursor: "pointer",
        transition: "background 150ms",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <td style={{ padding: "14px 16px", fontWeight: 600, color: "#4f6ef7" }}>#{order.id}</td>
      <td style={{ padding: "14px 16px", fontWeight: 500 }}>{order.client}</td>
      <td style={{ padding: "14px 16px", color: "#6b6b6b" }}>{order.product}</td>
      <td style={{ padding: "14px 16px", color: "#6b6b6b" }}>{order.qty}</td>
      <td style={{ padding: "14px 16px", fontWeight: 600 }}>
        {order.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </td>
      <td style={{ padding: "14px 16px" }}>
        <StatusBadge status={order.status} />
      </td>
      <td style={{ padding: "14px 16px", color: "#9b9b9b", fontSize: 13 }}>
        {new Date(order.date).toLocaleDateString("pt-BR")}
      </td>
      <td style={{ padding: "14px 16px" }}>
        <button
          style={{
            background: "none", border: "1px solid #e0deda",
            borderRadius: 8, padding: "4px 12px",
            fontSize: 12, cursor: "pointer", color: "#6b6b6b",
            fontFamily: "inherit",
          }}
          onClick={e => { e.stopPropagation(); onView(); }}
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default OrdersTable;
