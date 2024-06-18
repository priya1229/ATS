import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [data, setData] = useState({ jobs: [], users: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const config = {
                    headers: {
                        'x-auth-token': token
                    }
                };
                const response = await axios.get('http://localhost:5000/api/dashboard', config);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Jobs</h2>
                    <ul>
                        {data.jobs.map((job) => (
                            <li key={job._id} className="mb-2">
                                <strong>{job.title}</strong> - {job.location}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Users</h2>
                    <ul>
                        {data.users.map((user) => (
                            <li key={user._id} className="mb-2">
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
