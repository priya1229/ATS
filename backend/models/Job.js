// backend/models/Job.js

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    responsibilities: { type: String, required: true },
    r1CheckForm: { type: [String], default: [] },
    r2CheckForm: { type: [String], default: [] },
    employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['draft', 'approved', 'live'], default: 'draft' },
}, { timestamps: true });


module.exports = mongoose.model('Job', jobSchema);
