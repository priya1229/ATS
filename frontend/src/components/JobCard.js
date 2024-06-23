// src/components/JobCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md bg-slate-600">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-zinc-950 mb-2">{job.location}</p>
            <p className="text-zinc-950 mb-2">{job.salary}</p>
            <div className=" space-x-4">
                <Link to={`/jobs/${job._id}`} className="text-sky-950 font-bold hover:underline">View Details</Link>
                <Link to={`/apply/${job._id}`}>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Apply
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
