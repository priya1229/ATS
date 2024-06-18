// ats-frontend/src/components/ApplyJob.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ApplyJob() {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [formData, setFormData] = useState({ resume: '', R1Answers: [] });

    useEffect(() => {
        const fetchJob = async () => {
            const res = await axios.get(`/api/jobs/${jobId}`);
            setJob(res.data);
            setFormData({ ...formData, R1Answers: new Array(res.data.R1Questions.length).fill(false) });
        };
        fetchJob();
    }, [jobId]);

    const handleR1Change = (index, e) => {
        const newR1Answers = formData.R1Answers.slice();
        newR1Answers[index] = e.target.checked;
        setFormData({ ...formData, R1Answers: newR1Answers });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/applications/apply', { ...formData, jobId }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Application submitted successfully');
        } catch (err) {
            alert('Error submitting application');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Apply for {job.title}</h1>
            <input type="file" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} required />
            {job.R1Questions && job.R1Questions.map((q, index) => (
                <div key={index}>
                    <label>{q.question}</label>
                    <input type="checkbox" onChange={(e) => handleR1Change(index, e)} />
                </div>
            ))}
            <button type="submit">Submit Application</button>
        </form>
    );
}

export default ApplyJob;
