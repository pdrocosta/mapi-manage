import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const autoLogin = async (token) => {
        try {
            const userData = await getUserData(token);
            setUser(userData);
            navigate('/dashboard');
            return userData;
        } catch {
            toast.error('Error fetching user data');
            localStorage.removeItem('token');
            navigate('/login');
        }
    };

    const login = async (data) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Login failed');

            const { token, user: userData } = await response.json();
            localStorage.setItem('token', token);
            setUser(userData);
            toast.success('Login successful');
            navigate('/dashboard');
        } catch (err) {
            toast.error(err?.message || 'Error logging in');
        }
    };

    const getUserData = async (token) => {
        try {
            const response = await fetch("/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 401) throw new Error("Unauthorized");
            if (!response.ok) throw new Error("Error fetching user data");

            const userData = await response.json();
            return userData;
        } catch (err) {
                       toast.error(err?.message || 'Error fetching user data');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfos');
        setUser(null);
        toast.info('Logged out');
        navigate('/login');
    }

    
    useEffect(() => {
    const token = localStorage.getItem('token');
    const init = async () => {
        await autoLogin(token);
    };
    if (token) {
        init(token);
    } else {
        navigate('/login');
    }});
    

    return (
        <AuthContext.Provider value={{ user, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );

} 