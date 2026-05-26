// client/src/providers/AuthProvider.jsx
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login as loginService, getMe, logout as logoutService } from '../services/authService';
import { AuthContext } from '../contexts/index';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
    const navigate  = useNavigate();
    const [user, setUser]       = useState(null);
    const [loading, setLoading] = useState(false);

    // ── Auto login on mount ───────────────────────────────────────────────────
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        getMe()
            .then(userData => {
                setUser(userData);
                navigate('/dashboard');
            })
            .catch(() => {
                localStorage.removeItem('token');
                navigate('/login');
            });
    }, []);

    // ── Login ─────────────────────────────────────────────────────────────────
    const login = async (data) => {
        setLoading(true);
        try {
            const result = await loginService(data);  // fetch in service
            setUser(result.user);                     // state in provider
            toast.success(`Bem vindo, ${result.user.name}!`);
            navigate('/dashboard');
        } catch (err) {
            toast.error(err.message || 'Erro ao realizar login');
        } finally {
            setLoading(false);
        }
    };

    // ── Logout ────────────────────────────────────────────────────────────────
    const logout = () => {
        logoutService();          // localStorage cleanup in service
        setUser(null);            // state in provider
        toast.info('Logout realizado.');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};