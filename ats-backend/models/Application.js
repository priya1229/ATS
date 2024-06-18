const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    r1Answers: {
        type: Map,
        of: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    r2Answers: {
        type: [
            {
                question: String,
                answer: String,
            },
        ],
        default: [],
    },
    status: {
        type: String,
        enum: ['applied', 'shortlisted', 'rejected'],
        default: 'applied',
    },
});

module.exports = mongoose.model('Application', ApplicationSchema);
