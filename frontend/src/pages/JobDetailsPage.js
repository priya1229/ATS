// src/pages/JobDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from '../services/api';

const JobDetailsPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            const jobDetails = await getJob(id);
            setJob(jobDetails);
        };

        fetchJob();
    }, [id]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
            <p className="mb-2"><strong>Location:</strong> {job.location}</p>
            <p className="mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="mb-4"><strong>Responsibilities:</strong> {job.responsibilities}</p>
        </div>
    );
};

export default JobDetailsPage;
