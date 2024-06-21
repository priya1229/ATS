// src/pages/CreateJobPage.js
import React, { useState } from 'react';
import { postJob } from '../services/api';

const CreateJobPage = () => {
    const [jobData, setJobData] = useState({
        title: '',
        location: '',
        salary: '',
        responsibilities: '',
        r1Questions: ['', '', '', '', ''],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({
            ...jobData,
            [name]: value,
        });
    };

    const handleR1Change = (index, value) => {
        const newR1Questions = [...jobData.r1Questions];
        newR1Questions[index] = value;
        setJobData({ ...jobData, r1Questions: newR1Questions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postJob(jobData);
            // Redirect or notify success
        } catch (err) {
            console.error(err);
            // Handle error (e.g., show message)
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Create Job</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={jobData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={jobData.location}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                    <input
                        type="text"
                        name="salary"
                        value={jobData.salary}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
                    <textarea
                        name="responsibilities"
                        value={jobData.responsibilities}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">R1 Questions</label>
                    {jobData.r1Questions.map((question, index) => (
                        <input
                            key={index}
                            type="text"
                            value={question}
                            onChange={(e) => handleR1Change(index, e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
                        />
                    ))}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateJobPage;
