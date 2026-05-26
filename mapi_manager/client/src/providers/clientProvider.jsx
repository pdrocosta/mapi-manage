// client/src/providers/ClientProvider.jsx
import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import {
    getClients   as getClientsService,
    getClientById,
    createClient as createClientService,
    approveClient as approveClientService,
    rejectClient  as rejectClientService,
} from '../services/clientsService';

import { ClientContext } from '../contexts/index';

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) throw new Error('useClient must be used inside ClientProvider');
  return context;
};

export const ClientProvider = ({ children }) => {
    const [clients,        setClients]        = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [loading,        setLoading]        = useState(false);

    // ── Get all ───────────────────────────────────────────────────────────────
    const getClients = async () => {
        setLoading(true);
        try {
            const data = await getClientsService();
            setClients(data);
            return data;
        } catch (err) {
            toast.error(err.message || 'Erro ao buscar clientes');
        } finally {
            setLoading(false);
        }
    };

    // ── Get one ───────────────────────────────────────────────────────────────
    const getClient = async (id) => {
        try {
            const data = await getClientById(id);
            setSelectedClient(data);
            return data;
        } catch (err) {
            toast.error(err.message || 'Erro ao buscar cliente');
        }
    };

    // ── Create ────────────────────────────────────────────────────────────────
    const newClient = async (data) => {
        try {
            const created = await createClientService(data);
            setClients(prev => [...prev, created]);
            toast.success('Cliente criado com sucesso!');
            return created;
        } catch (err) {
            toast.error(err.message || 'Erro ao criar cliente');
        }
    };

    // ── Approve / Reject ──────────────────────────────────────────────────────
    const approveClient = async (id) => {
        try {
            const updated = await approveClientService(id);
            setClients(prev => prev.map(c => c.id === id ? updated : c));
            toast.success('Cliente aprovado!');
        } catch (err) {
            toast.error(err.message || 'Erro ao aprovar cliente');
        }
    };

    const rejectClient = async (id) => {
        try {
            const updated = await rejectClientService(id);
            setClients(prev => prev.map(c => c.id === id ? updated : c));
            toast.success('Cliente rejeitado.');
        } catch (err) {
            toast.error(err.message || 'Erro ao rejeitar cliente');
        }
    };

    return (
        <ClientContext.Provider value={{
            clients,
            selectedClient,
            loading,
            getClients,
            getClient,
            newClient,
            approveClient,
            rejectClient,
        }}>
            {children}
        </ClientContext.Provider>
    );
};