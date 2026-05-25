import { STATUS } from '../../utils/constants';

const StatusBadge = ({ status }) => {
  const s = STATUS[status];
  if (!s) return null;

  return (
    <span style={{
      background: s.bg,
      color: s.color,
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
    }}>
      {s.label}
    </span>
  );
};

export default StatusBadge;


