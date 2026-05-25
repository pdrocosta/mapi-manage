import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ClientContext = createContext(null);

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);

    const getClients = async (token) => {
        try {
            const response = await fetch('/api/client', {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 401) throw new Error('Unauthorized');
            if (!response.ok) throw new Error('Error fetching client data');

            const clientData = await response.json();
            setClients(clientData);
            return clientData;
        } catch (err) {
            toast.error(err?.message || 'Error fetching client data');
        }
    };

    const newClient = async ({ name, empresa, status, phone, city }) => {
        const token = localStorage.getItem('token');
        const newClientData = { name, empresa, status, phone, city };

        try {
            const response = await fetch('/api/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newClientData),
            });

            if (!response.ok) throw new Error('Error creating client');

            const created = await response.json();
            setClients(prev => [...prev, created]);
            toast.success('Cliente criado com sucesso!');
            return created;
        } catch (err) {
            toast.error(err?.message || 'Error creating client');
        }
    };

    const getClientTotal = async (clientId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`/api/client/${clientId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 401) throw new Error('Unauthorized');
            if (!response.ok) throw new Error('Error fetching client data');

            const clientData = await response.json();
            return clientData.total ? clientData.total : 0;
        } catch (err) {
            toast.error(err?.message || 'Error fetching client data');
            return 0;
        }
 

    }

    return (
        <ClientContext.Provider value={{ clients, getClients, newClient }}>
            {children}
        </ClientContext.Provider>
    );
};