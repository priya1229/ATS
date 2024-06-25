import axios from 'axios';

const API_URL = 'https://backendats.vercel.app/api';
// const API_URL = 'http://localhost:5000/api';
// Adjust this as needed

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Config Headers with Token:', config.headers); // Debug log
        } else {
            console.log('No token found in localStorage'); // Debug log
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (credentials) => {
    const response = await api.post('/users/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response;
};

export const postJob = async (jobData) => {
    return api.post('/jobs', jobData);
};
export const register = async (userData) => {
    return api.post('/users/register', userData);
};

export const getJobs = async () => {
    return api.get('/jobs');
};


export const getJobDetails = async (jobId) => {
    return api.get(`/jobs/${jobId}`);
};


export const applyJob = (jobId, formData) => {
    return api.post(`/api/applications/apply/${jobId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const getApplications = () => {
    return api.get('/api/applications');
};

export const reviewApplication = (applicationId, reviewData) => {
    return api.put(`/api/applications/review/${applicationId}`, reviewData);
};

export default api;

