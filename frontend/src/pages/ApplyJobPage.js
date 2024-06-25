import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { applyJob } from '../services/api';

const ApplyJobPage = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [resume, setResume] = useState(null);
    const [r1CheckFormResponses, setR1CheckFormResponses] = useState('');

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('r1CheckFormResponses', r1CheckFormResponses);

        try {
            await applyJob(jobId, formData);
            alert('Application submitted successfully');
            navigate('/');
        } catch (error) {
            console.error('Failed to submit application:', error);
            alert('Failed to submit application');
        }
    };

    return (
        <div className="max-w-md mt-20 mx-auto p-6 transparent-bg rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-bold mb-6">Apply for Job</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-zinc-950">Job ID:</label>
                    <input type="text" value={jobId} disabled className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-zinc-950">Resume:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-zinc-950">R1 Check Form Responses:</label>
                    <textarea
                        value={r1CheckFormResponses}
                        onChange={(e) => setR1CheckFormResponses(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplyJobPage;
