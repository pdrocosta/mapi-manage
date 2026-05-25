// components/clients/ClientsGrid.jsx
import ClientCard from "./ClientCard";

const ClientsGrid = ({ clients, onClientClick }) => {
  if (clients.length === 0) {
    return (
      <p style={{ color: "#9b9b9b", textAlign: "center", padding: 40, fontSize: 14 }}>
        Nenhum cliente encontrado.
      </p>
    );
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: 16,
    }}>
      {clients.map(client => (
        <ClientCard key={client.id} client={client} onClick={onClientClick} />
      ))}
    </div>
  );
};

export default ClientsGrid;
