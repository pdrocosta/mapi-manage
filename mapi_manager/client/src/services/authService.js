import request from './api';

export const login = async (data) => {
    const result = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    });
    localStorage.setItem('token',     result.token);
    localStorage.setItem('userInfos', JSON.stringify(result.user));
    return result;
};

export const getMe = async () => request('/auth/me');

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfos');
};