const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');
const { isCoordinator } = require('../middleware/roleMiddleware');

// Create Job Post
router.post('/', authMiddleware, async (req, res) => {
    const { title, location, salary, responsibilities, r1CheckForm } = req.body;
    const employer = req.user.id;

    try {
        const job = new Job({ title, location, salary, responsibilities, r1CheckForm, employer });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find().populate('employer', 'name');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Single Job
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('employer', 'name');
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Job (Assign Recruiter and Add R2 Check Form)
router.put('/:id', [authMiddleware, isCoordinator], async (req, res) => {
    const { r2CheckForm, recruiter } = req.body;

    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        job.r2CheckForm = r2CheckForm;
        job.recruiter = recruiter;
        await job.save();

        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
