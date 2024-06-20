// backend/models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    responsibilities: {
        type: String,
        required: true,
    },
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    r1CheckForm: [{
        question: String,
        correctAnswer: Boolean,
    }],
    r2CheckForm: [{
        question: String,
    }],
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
