// src/pages/ReviewApplicationsPage.js

import React, { useState, useEffect } from 'react';
import { getApplications, reviewApplication } from '../services/api'; // Import functions correctly

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

    const handleReview = async (applicationId, reviewData) => {
        try {
            await reviewApplication(applicationId, reviewData);
            // Assuming you want to refresh applications list or notify success here
            const updatedApplications = applications.map(app => {
                if (app._id === applicationId) {
                    // Update app object with new review data
                    return {
                        ...app,
                        reviewed: true, // Example property, adjust based on your backend response
                    };
                }
                return app;
            });
            setApplications(updatedApplications);
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
