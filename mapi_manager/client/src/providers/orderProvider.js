import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { orderFormSchema } from '../schemas/orderFormSchema';
import { clientFormSchema } from '../schemas/clientFormSchema'; 


export const OrderContext = createContext(null);
export const useOrder = () => useContext(OrderContext);
 
 
export const OrderProvider = ({ children }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(false)
 
   const getOrders = async (companyId) => {
      const token = localStorage.getItem('token');
      setLoading(true);
  
      if (!companyId) {
        toast.error('Empresa obrigatoria para buscar pedidos');
        return;
      }
  
      try {
        const response = await fetch(`/api/order?company=${companyId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (response.status === 401) throw new Error('Unauthorized');
        if (!response.ok) throw new Error('Error fetching orders');
  
        const data = await response.json();
        setOrders(data);
        return data;
      } catch (err) {
        toast.error(err?.message || 'Error fetching orders');
      }
      finally {
        setLoading(false);  
    };
 
  const getOrderById = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/order/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
 
      if (response.status === 401) throw new Error('Unauthorized');
      if (!response.ok) throw new Error('Error fetching order');
 
      const data = await response.json();
      setSelectedOrder(data);
      return data;
    } catch (err) {
      toast.error(err?.message || 'Error fetching order');
    }
  };
 
  const newOrder = async (data) => {
    const token = localStorage.getItem('token');
    try {
      await orderFormSchema.validate(data, { abortEarly: false });
 
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
 
      if (!response.ok) throw new Error('Error creating order');
 
      const created = await response.json();
      setOrders(prev => [...prev, created]);
      toast.success('Pedido criado com sucesso!');
      return created;
    } catch (err) {
      if (err.name === 'ValidationError') {
        err.inner.forEach(e => toast.error(e.message));
        return;
      }
      toast.error(err?.message || 'Error creating order');
    }
  };
 
  const updateOrder = async (orderId, data) => {
    const token = localStorage.getItem('token');
    try {
      await orderFormSchema.validate(data, { abortEarly: false });
 
      const response = await fetch(`/api/order/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
 
      if (!response.ok) throw new Error('Error updating order');
 
      const updated = await response.json();
      setOrders(prev => prev.map(o => (o.id === orderId ? updated : o)));
      toast.success('Pedido atualizado com sucesso!');
      return updated;
    } catch (err) {
      if (err.name === 'ValidationError') {
        err.inner.forEach(e => toast.error(e.message));
        return;
      }
      toast.error(err?.message || 'Error updating order');
    }
  };
 
  const deleteOrder = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/order/${orderId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
 
      if (!response.ok) throw new Error('Error deleting order');
 
      setOrders(prev => prev.filter(o => o.id !== orderId));
      toast.success('Pedido removido com sucesso!');
    } catch (err) {
      toast.error(err?.message || 'Error deleting order');
    }
  };
 
  const getOrderTotal = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/order/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
 
      if (response.status === 401) throw new Error('Unauthorized');
      if (!response.ok) throw new Error('Error fetching order total');
 
      const data = await response.json();
      return data.total ?? 0;
    } catch (err) {
      toast.error(err?.message || 'Error fetching order total');
      return 0;
    }
  };

const { getOrders } = useOrder();


  return (
    <OrderContext.Provider value={{
      orders,
      selectedOrder,
      getOrders,
      getOrderById,
      newOrder,
      updateOrder,
      deleteOrder,
      getOrderTotal,
    }}>
      {children}
    </OrderContext.Provider>
  );
}}