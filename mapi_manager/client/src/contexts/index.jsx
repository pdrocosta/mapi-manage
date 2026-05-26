// client/src/contexts/index.jsx
import { createContext } from 'react';

// ─── Auth ──────────────────────────────────────────────────────────────────────
export const AuthContext = createContext({
  user:    null,
  loading: false,
  login:   async () => {},
  logout:  () => {},
  setUser: () => {},
});

// ─── Client ───────────────────────────────────────────────────────────────────
export const ClientContext = createContext({
  clients:        [],
  selectedClient: null,
  loading:        false,
  getClients:     async () => {},
  getClient:      async () => {},
  newClient:      async () => {},
  approveClient:  async () => {},
  rejectClient:   async () => {},
});

// ─── Order ────────────────────────────────────────────────────────────────────
export const OrderContext = createContext({
  orders:        [],
  selectedOrder: null,
  loading:       false,
  getOrders:     async () => {},
  getOrderById:  async () => {},
  newOrder:      async () => {},
  updateOrder:   async () => {},
  deleteOrder:   async () => {},
  getOrderTotal: async () => {},
});