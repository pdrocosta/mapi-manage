const STATUS = {
  pending:  { label: "Pendente",  color: "#e08c2a", bg: "#fdf3e3" },
  approved: { label: "Aprovado",  color: "#2d9e6b", bg: "#e8f8f1" },
  rejected: { label: "Rejeitado", color: "#d94f4f", bg: "#fdecea" },
  transit:  { label: "Em trânsito", color: "#4f6ef7", bg: "#eef1fe" },
};

const MOCK_ORDERS = [
  { id: "001", client: "Empresa Alpha", product: "Produto A", qty: 12, value: 1440.0,  status: "pending",  date: "2025-05-18" },
  { id: "002", client: "Beta Ltda",     product: "Produto B", qty: 5,  value: 875.50,  status: "approved", date: "2025-05-17" },
  { id: "003", client: "Gamma Corp",    product: "Produto C", qty: 30, value: 3200.0,  status: "transit",  date: "2025-05-16" },
  { id: "004", client: "Delta S/A",     product: "Produto A", qty: 8,  value: 960.0,   status: "rejected", date: "2025-05-15" },
  { id: "005", client: "Epsilon ME",    product: "Produto D", qty: 20, value: 2100.0,  status: "approved", date: "2025-05-14" },
];

const MOCK_CLIENTS = [
  { id: 1, name: "Empresa Alpha",  email: "contato@alpha.com.br",  phone: "(11) 99999-0001", city: "São Paulo",    orders: 8,  total: 12400.0, active: true  },
  { id: 2, name: "Beta Ltda",      email: "admin@betaltda.com.br",  phone: "(21) 98888-0002", city: "Rio de Janeiro", orders: 3, total: 4350.0,  active: true  },
  { id: 3, name: "Gamma Corp",     email: "gamma@corp.com.br",      phone: "(31) 97777-0003", city: "Belo Horizonte", orders: 15, total: 31000.0, active: true  },
  { id: 4, name: "Delta S/A",      email: "financeiro@delta.com.br",phone: "(41) 96666-0004", city: "Curitiba",      orders: 2,  total: 1920.0,  active: false },
  { id: 5, name: "Epsilon ME",     email: "epsilon@me.com.br",      phone: "(51) 95555-0005", city: "Porto Alegre",  orders: 6,  total: 8700.0,  active: true  },
];

export { STATUS, MOCK_ORDERS, MOCK_CLIENTS};