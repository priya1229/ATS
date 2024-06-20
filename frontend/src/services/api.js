// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const login = (credentials) => axios.post(`${API_URL}/users/login`, credentials);
export const postJob = (jobData) => axios.post(`${API_URL}/jobs`, jobData);
export const getJobs = () => axios.get(`${API_URL}/jobs`);
export const getJob = (id) => axios.get(`${API_URL}/jobs/${id}`);
export const applyJob = (id, applicationData) => axios.post(`${API_URL}/jobs/${id}/apply`, applicationData);
export const getApplications = () => axios.get(`${API_URL}/applications`);
export const reviewApplication = (id, reviewData) => axios.post(`${API_URL}/applications/${id}/review`, reviewData);
