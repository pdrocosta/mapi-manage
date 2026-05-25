import { STATUS } from "./StatusBadge";

const inputStyle = {
  padding: "10px 14px",
  border: "1.5px solid #e0deda",
  borderRadius: 10,
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  background: "#fff",
};

const OrdersFilters = ({ search, onSearch, filterStatus, onFilterStatus }) => {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Buscar por cliente, produto ou nº..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        style={{ ...inputStyle, flex: 1, minWidth: 220 }}
      />
      <select
        value={filterStatus}
        onChange={e => onFilterStatus(e.target.value)}
        style={{ ...inputStyle, cursor: "pointer" }}
      >
        <option value="all">Todos os status</option>
        {Object.entries(STATUS).map(([k, v]) => (
          <option key={k} value={k}>{v.label}</option>
        ))}
      </select>
    </div>
  );
};

export default OrdersFilters;
