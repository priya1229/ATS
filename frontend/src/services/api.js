// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this as needed

const api = axios.create({
    baseURL: API_URL,
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (credentials) => {
    return api.post('/users/login', credentials);
};

export const register = async (userData) => {
    return api.post('/users/register', userData);
};

export const getJobs = async () => {
    return api.get('/jobs');
};

export const postJob = async (jobData) => {
    return api.post('/jobs', jobData);
};

// Define getApplications and reviewApplication functions
export const getApplications = async () => {
    return api.get('/applications'); // Adjust endpoint as per your backend
};

export const reviewApplication = async (applicationId, reviewData) => {
    return api.put(`/applications/${applicationId}/review`, reviewData); // Adjust endpoint as per your backend
};

export default api;
