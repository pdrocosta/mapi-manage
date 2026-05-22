
const ClientCard = ({ name }) => {
  const initials = name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const colors = ["#4f6ef7", "#2d9e6b", "#e08c2a", "#d94f4f", "#9b59b6"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div style={{
      width: 38, height: 38, borderRadius: "50%",
      background: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: 13, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
};

export default ClientCard;