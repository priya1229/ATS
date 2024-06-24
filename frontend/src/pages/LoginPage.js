import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../services/api';

const LoginPage = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await apiLogin({ email, password });
            if (response.data.user) {
                login(response.data.user);
                if (response.data.user.role === 'Employer') {
                    navigate('/create-job');
                } else if (response.data.user.role === 'Recruiter') {
                    navigate('/review-applications');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="full-screen-bg">
            <div className="p-6 mt-32 rounded shadow-md w-full max-w-md transparent-bg mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4 ">Login</h2>
                {error && <p className="text-red-600">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-zinc-950 mb-2 ">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-950 mb-2 ">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-600  rounded">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
