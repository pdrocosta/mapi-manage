// components/clients/ClientsFilters.jsx

const inputStyle = {
  padding: "10px 14px",
  border: "1.5px solid #e0deda",
  borderRadius: 10,
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  background: "#fff",
};

const ClientsFilters = ({ search, onSearch, filterActive, onFilterActive }) => {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Buscar por nome, e-mail ou cidade..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        style={{ ...inputStyle, flex: 1, minWidth: 220 }}
      />
      <select
        value={filterActive}
        onChange={e => onFilterActive(e.target.value)}
        style={{ ...inputStyle, cursor: "pointer" }}
      >
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
        <option value="inactive">Inativos</option>
      </select>
    </div>
  );
};

export default ClientsFilters;
