// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Adjust this as needed

export const login = async (credentials) => {
    return axios.post(`${API_URL}/auth/login`, credentials);
};

export const register = async (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const getJobs = async () => {
    return axios.get(`${API_URL}/jobs`);
};

export const postJob = async (jobData) => {
    return axios.post(`${API_URL}/jobs`, jobData);
};
