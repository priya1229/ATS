// frontend/src/pages/JobDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJob, applyJob } from '../services/api';

const JobDetailsPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [answers, setAnswers] = useState(['', '', '', '', '']);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await getJob(id);
            setJob(response.data);
        };
        fetchJob();
    }, [id]);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await applyJob(id, { answers });
            // Redirect or notify success
        } catch (err) {
            console.error(err);
            // Handle error (e.g., show message)
        }
    };

    if (!job) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">R1 Questions</label>
                    {job.r1Questions.map((question, index) => (
                        <div key={index}>
                            <label className="block">{question}</label>
                            <input
                                type="text"
                                value={answers[index]}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Apply
                </button>
            </form>
        </div>
    );
};

export default JobDetailsPage;
