// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/api';
import JobCard from '../components/JobCard';

const HomePage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobList = await getJobs();
            setJobs(jobList);
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
