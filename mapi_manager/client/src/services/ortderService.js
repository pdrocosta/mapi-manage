import request from './api';

export const getOrders = (companyId) =>
    request(`/orders?company=${companyId}`);

export const getOrderById = (id) =>
    request(`/orders/${id}`);

export const createOrder = (data) =>
    request('/orders', {
        method: 'POST',
        body: JSON.stringify(data),
    });

export const updateOrder = (id, data) =>
    request(`/orders/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });

export const deleteOrder = (id) =>
    request(`/orders/${id}`, { method: 'DELETE' });