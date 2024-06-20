// frontend/src/pages/ReviewApplicationsPage.js
import React, { useState, useEffect } from 'react';
import { getApplications, reviewApplication } from '../services/api';

const ReviewApplicationsPage = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            const response = await getApplications();
            setApplications(response.data);
        };
        fetchApplications();
    }, []);

    const handleReview = async (applicationId, reviewData) => {
        try {
            await reviewApplication(applicationId, reviewData);
            // Refresh the list or notify success
        } catch (err) {
            console.error(err);
            // Handle error (e.g., show message)
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Review Applications</h2>
            <div className="space-y-4">
                {applications.map((application) => (
                    <div key={application._id} className="p-4 border border-gray-300 rounded-md">
                        <h3 className="text-xl font-bold">{application.jobTitle}</h3>
                        <p><strong>Candidate:</strong> {application.candidateName}</p>
                        <p><strong>Answers:</strong></p>
                        <ul>
                            {application.answers.map((answer, index) => (
                                <li key={index}>{answer}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handleReview(application._id, { approved: true })}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mr-2"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handleReview(application._id, { approved: false })}
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
