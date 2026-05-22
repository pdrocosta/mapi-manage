import { STATUS } from "./StatusBadge";

const OrdersSummary = ({ orders }) => {
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
      {Object.entries(STATUS).map(([key, value]) => {
        const count = orders.filter(o => o.status === key).length;
        const total = orders
          .filter(o => o.status === key)
          .reduce((sum, o) => sum + o.value, 0);

        return (
          <div key={key} style={{
            background: "#fff", border: "1px solid #e0deda",
            borderRadius: 12, padding: "14px 20px",
            flex: 1, minWidth: 130,
          }}>
            <div style={{ fontSize: 12, color: "#9b9b9b", fontWeight: 500, marginBottom: 4 }}>
              {value.label}
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: value.color, lineHeight: 1 }}>
              {count}
            </div>
            <div style={{ fontSize: 11, color: "#9b9b9b", marginTop: 4 }}>
              {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersSummary;
