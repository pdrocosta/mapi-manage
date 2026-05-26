const BASE_URL = '/api'; 

const request = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }), 
            ...options.headers,
        },
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Erro na requisição');
    }

    return response.json();
};

export default request;