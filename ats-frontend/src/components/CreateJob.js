import React, { useState } from 'react';
import axios from 'axios';

function CreateJob() {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        salary: '',
        responsibilities: '',
        R1Questions: [{ question: '', correctAnswer: false }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuestionChange = (index, e) => {
        const { name, value, type, checked } = e.target;
        const updatedQuestions = formData.R1Questions.map((question, qIndex) => {
            if (qIndex === index) {
                return { ...question, [name]: type === 'checkbox' ? checked : value };
            }
            return question;
        });
        setFormData({ ...formData, R1Questions: updatedQuestions });
    };

    const addQuestion = () => {
        setFormData({ ...formData, R1Questions: [...formData.R1Questions, { question: '', correctAnswer: false }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            };
            await axios.post('http://localhost:5000/api/jobs', formData, config);
            alert('Job created successfully!');
        } catch (err) {
            console.error(err);
            alert('Error creating job');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Create Job</h2>
                <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                <input type="number" name="salary" placeholder="Salary" onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                <textarea name="responsibilities" placeholder="Responsibilities" onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">R1 Questions</h3>
                    {formData.R1Questions.map((question, index) => (
                        <div key={index} className="mb-2">
                            <input type="text" name="question" placeholder="Question" value={question.question} onChange={(e) => handleQuestionChange(index, e)} required className="w-full p-2 mb-2 border border-gray-300 rounded" />
                            <label className="flex items-center">
                                <input type="checkbox" name="correctAnswer" checked={question.correctAnswer} onChange={(e) => handleQuestionChange(index, e)} className="mr-2" />
                                Correct Answer
                            </label>
                        </div>
                    ))}
                    <button type="button" onClick={addQuestion} className="bg-gray-500 text-white p-2 rounded mt-2">Add Question</button>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Create Job</button>
            </form>
        </div>
    );
}

export default CreateJob;
