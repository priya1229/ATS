// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { getJobs } from '../services/api';
import JobCard from '../components/JobCard'; // Import JobCard component

const HomePage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await getJobs();
                setJobs(response.data); // Ensure this is an array
            } catch (err) {
                console.error(err);
            }
        };
        fetchJobs();
    }, []);

    if (!Array.isArray(jobs)) {
        return <div>No jobs available.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
            {jobs.length === 0 ? (
                <p>No jobs available.</p>
            ) : (
                <ul>
                    {jobs.map(job => (
                        <li key={job._id} className="border-b py-4">
                            <JobCard job={job} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;
