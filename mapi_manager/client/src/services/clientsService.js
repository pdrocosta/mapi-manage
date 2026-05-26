import request from './api';

export const getClients = () =>
    request('/clients');

export const getClientById = (id) =>
    request(`/clients/${id}`);

export const createClient = (data) =>
    request('/clients', {
        method: 'POST',
        body: JSON.stringify(data),
    });

export const approveClient = (id) =>
    request(`/clients/${id}/approve`, { method: 'PATCH' });

export const rejectClient = (id) =>
    request(`/clients/${id}/reject`, { method: 'PATCH' });