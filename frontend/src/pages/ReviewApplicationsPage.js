import React, { useState, useEffect } from 'react';
import { getApplications, reviewApplication } from '../services/api';

const ReviewApplicationsPage = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await getApplications();
                setApplications(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchApplications();
    }, []);

    const handleReview = async (applicationId, approved) => {
        try {
            await reviewApplication(applicationId, { approved });
            setApplications(applications.map(app => app._id === applicationId ? { ...app, status: approved ? 'Shortlisted' : 'Rejected' } : app));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 transparent-bg">
            <h2 className="text-2xl font-semibold mb-4">Review Applications</h2>
            <div className="space-y-4">
                {applications.map((application) => (
                    <div key={application._id} className="p-4 border border-gray-300 rounded-md">
                        <h3 className="text-xl font-bold">{application.job.title}</h3>
                        <p><strong>Candidate:</strong> {application.candidate.name}</p>
                        <p><strong>R1 Check Form Responses:</strong> {application.r1CheckFormResponses}</p>
                        <button
                            onClick={() => handleReview(application._id, true)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mr-2"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handleReview(application._id, false)}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Reject
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewApplicationsPage;
