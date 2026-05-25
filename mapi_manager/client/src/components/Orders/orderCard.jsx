const OrderCard = ({ status }) => {
  const s = [status];
  return (
    <span style={{
      background: s.bg,
      color: s.color,
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 600,
    }}>
      {s.label}
    </span>
  );
};

export default OrderCard;