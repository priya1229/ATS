// backend/controllers/jobController.js
const Job = require('../models/Job');

exports.createJob = async (req, res) => {
    const { title, location, salary, responsibilities, r1CheckForm } = req.body;
    const employer = req.user.id; // Assuming `req.user` is populated by authMiddleware

    try {
        const job = new Job({ title, location, salary, responsibilities, r1CheckForm, employer });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveJob = async (req, res) => {
    const { id } = req.params;
    const { r2CheckForm } = req.body;

    try {
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        job.r2CheckForm = r2CheckForm;
        job.status = 'approved';
        await job.save();

        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.postJob = async (req, res) => {
    const { id } = req.params;

    try {
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        job.status = 'live';
        await job.save();

        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('employer', 'name');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getJobById = async (req, res) => {
    const { id } = req.params;

    try {
        const job = await Job.findById(id).populate('employer', 'name');
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
