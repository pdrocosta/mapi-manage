import {useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { orderFormSchema } from '../schemas/orderFormSchema';
import {
    getOrders    as getOrdersService,
    getOrderById as getOrderByIdService,
    createOrder  as createOrderService,
    updateOrder  as updateOrderService,
    deleteOrder  as deleteOrderService,
} from '../services/ordersService';
import { OrderContext } from '../contexts/index';
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used inside OrderProvider');
  return context;
};

export const OrderProvider = ({ children }) => {
    const [orders,        setOrders]        = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading,       setLoading]       = useState(false);

    const getOrders = async (companyId) => {
        if (!companyId) {
            toast.error('Empresa obrigatória para buscar pedidos');
            return;
        }
        setLoading(true);
        try {
            const data = await getOrdersService(companyId);
            setOrders(data);
            return data;
        } catch (err) {
            toast.error(err.message || 'Erro ao buscar pedidos');
        } finally {
            setLoading(false);
        }
    };

    const getOrderById = async (id) => {
        try {
            const data = await getOrderByIdService(id);
            setSelectedOrder(data);
            return data;
        } catch (err) {
            toast.error(err.message || 'Erro ao buscar pedido');
        }
    };

    const newOrder = async (data) => {
        try {
            await orderFormSchema.validate(data, { abortEarly: false });
            const created = await createOrderService(data);
            setOrders(prev => [...prev, created]);
            toast.success('Pedido criado com sucesso!');
            return created;
        } catch (err) {
            if (err.name === 'ValidationError') {
                err.inner.forEach(e => toast.error(e.message));
                return;
            }
            toast.error(err.message || 'Erro ao criar pedido');
        }
    };

    const updateOrder = async (id, data) => {
        try {
            await orderFormSchema.validate(data, { abortEarly: false });
            const updated = await updateOrderService(id, data);
            setOrders(prev => prev.map(o => o.id === id ? updated : o));
            toast.success('Pedido atualizado com sucesso!');
            return updated;
        } catch (err) {
            if (err.name === 'ValidationError') {
                err.inner.forEach(e => toast.error(e.message));
                return;
            }
            toast.error(err.message || 'Erro ao atualizar pedido');
        }
    };

    const deleteOrder = async (id) => {
        try {
            await deleteOrderService(id);
            setOrders(prev => prev.filter(o => o.id !== id));
            toast.success('Pedido removido com sucesso!');
        } catch (err) {
            toast.error(err.message || 'Erro ao remover pedido');
        }
    };

    const getOrderTotal = async (id) => {
        try {
            const data = await getOrderByIdService(id);
            return data.total ?? 0;
        } catch (err) {
            toast.error(err.message || 'Erro ao buscar total');
            return 0;
        }
    };

    return (
        <OrderContext.Provider value={{
            orders,
            selectedOrder,
            loading,
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
};