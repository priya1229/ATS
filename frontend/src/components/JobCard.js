// src/components/JobCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-2">{job.location}</p>
            <p className="text-gray-700 mb-2">{job.salary}</p>
            <Link to={`/job/${job._id}`} className="text-blue-500 hover:underline">View Details</Link>
        </div>
    );
};

export default JobCard;
