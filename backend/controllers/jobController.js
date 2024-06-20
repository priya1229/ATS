// backend/controllers/jobController.js
const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { title, location, salary, responsibilities, r1CheckForm } = req.body;
    const job = new Job({ title, location, salary, responsibilities, r1CheckForm, status: 'pending' });
    await job.save();
    res.status(201).send('Job created successfully');
};

exports.approveJob = async (req, res) => {
    const { jobId, r2CheckForm } = req.body;
    const job = await Job.findById(jobId);
    job.status = 'approved';
    job.r2CheckForm = r2CheckForm;
    await job.save();
    res.status(200).send('Job approved successfully');
};

exports.postJob = async (req, res) => {
    const { jobId } = req.body;
    const job = await Job.findById(jobId);
    job.status = 'live';
    await job.save();
    res.status(200).send('Job posted successfully');
};
