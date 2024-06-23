import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this as needed

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Debug log
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
    const response = await api.post('/users/login', credentials);
    console.log('Login response:', response.data); // Debug log
    localStorage.setItem('token', response.data.token); // Ensure the token is stored here
    return response;
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

export const getJobDetails = async (jobId) => {
    return api.get(`/jobs/${jobId}`);
};


export const applyJob = async (jobId, resume, r1CheckFormResponses) => {
    const applicationData = {
        jobId,
        resume,
        r1CheckFormResponses,
    };
    return api.post('/jobs/apply', applicationData);
};

export const getApplications = async () => {
    return api.get('/applications'); // Adjust endpoint as per your backend
};

export const reviewApplication = async (applicationId, reviewData) => {
    return api.put(`/applications/${applicationId}/review`, reviewData); // Adjust endpoint as per your backend
};

export default api;

