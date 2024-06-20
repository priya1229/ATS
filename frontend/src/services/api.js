// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const createJob = async (jobData) => {
    const response = await axios.post(`${API_URL}/jobs`, jobData);
    return response.data;
};

export const postJob = async (jobData) => {
    const response = await axios.post(`${API_URL}/jobs`, jobData);
    return response.data;
};

export const approveJob = async (jobId, recruiterId, r2CheckForm) => {
    const response = await axios.put(`${API_URL}/jobs/${jobId}`, { recruiter: recruiterId, r2CheckForm });
    return response.data;
};

export const getJobs = async () => {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
};

export const getJob = async (id) => {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
};

export const applyJob = async (applicationData) => {
    const response = await axios.post(`${API_URL}/applications`, applicationData);
    return response.data;
};

export const reviewApplication = async (applicationId, r2CheckAnswers, status) => {
    const response = await axios.put(`${API_URL}/applications/${applicationId}`, { r2CheckAnswers, status });
    return response.data;
};
