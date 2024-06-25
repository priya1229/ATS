import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobDetails } from '../services/api';

const JobDetailsPage = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            if (jobId) {
                try {
                    const response = await getJobDetails(jobId);
                    setJobDetails(response.data);
                } catch (error) {
                    console.error('Error fetching job details:', error);
                }
            }
        };

        fetchJobDetails();
    }, [jobId]);

    if (!jobDetails) {
        return <div>Loading job details...</div>;
    }

    return (
        <div className="border mt-5 ml-5 mr-5 rounded-lg shadow-md max-w-4xl mx-auto p-6 transparent-bg">
            <h2 className="text-2xl font-semibold mb-4">{jobDetails.title}</h2>
            <p className="text-lg">Location: {jobDetails.location}</p>
            <p className="text-lg">Salary: {jobDetails.salary}</p>
            <h3 className="text-xl font-semibold mt-4">Responsibilities</h3>
            <ul className="list-disc ml-6">
                {jobDetails.responsibilities.split(',').map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            {jobDetails.r1Questions && jobDetails.r1questions.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold mt-4">R1 Questions</h3>
                    <ul className="list-disc ml-6">
                        {jobDetails.r1Questions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
};

export default JobDetailsPage;
