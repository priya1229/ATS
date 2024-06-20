// frontend/src/pages/JobListPage.js
import React, { useState, useEffect } from 'react';
import { getJobs } from '../services/api';
import { Link } from 'react-router-dom';

const JobListPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await getJobs();
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div key={job._id} className="p-4 border border-gray-300 rounded-md">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p>{job.location}</p>
                        <p>{job.salary}</p>
                        <Link to={`/job/${job._id}`} className="text-blue-600 hover:underline">
                            View Details and Apply
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListPage;
