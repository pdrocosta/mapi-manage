// components/clients/ClientAvatar.jsx

const COLORS = ["#4f6ef7", "#2d9e6b", "#e08c2a", "#d94f4f", "#9b59b6"];

const ClientAvatar = ({ name, size = 38 }) => {
  const initials = name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const color = COLORS[name.charCodeAt(0) % COLORS.length];

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: size * 0.35, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
};

export default ClientAvatar;
