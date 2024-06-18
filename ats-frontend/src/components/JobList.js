// src/components/JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get(' http://localhost:5000/api/jobs');
                setJobs(res.data);
            } catch (err) {
                alert('Error fetching jobs');
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
            {jobs.length ? (
                <ul>
                    {jobs.map((job) => (
                        <li key={job._id} className="mb-4 p-4 border border-gray-300 rounded">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-gray-700">{job.location}</p>
                            <p className="text-gray-700">{job.salary}</p>
                            <p className="text-gray-700">{job.responsibilities}</p>
                            <Link to={`/apply/${job._id}`} className="text-blue-500">Apply</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs available</p>
            )}
        </div>
    );
}

export default JobList;
