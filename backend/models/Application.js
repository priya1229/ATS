// backend/models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    r1CheckAnswers: [{
        question: String,
        answer: Boolean,
    }],
    r2CheckAnswers: [{
        question: String,
        answer: Boolean,
    }],
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Shortlisted', 'Rejected'],
        default: 'Pending',
    },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
