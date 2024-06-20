const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const authMiddleware = require('../middleware/authMiddleware');

// Create Application
router.post('/', authMiddleware, async (req, res) => {
    const { job, resume, r1CheckAnswers } = req.body;
    const candidate = req.user.id;

    try {
        const application = new Application({ candidate, job, resume, r1CheckAnswers });
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Applications
router.get('/', authMiddleware, async (req, res) => {
    try {
        const applications = await Application.find().populate('candidate', 'name').populate('job', 'title');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Single Application
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const application = await Application.findById(req.params.id)
            .populate('candidate', 'name')
            .populate('job', 'title');
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Application (Complete R2 Check)
router.put('/:id', authMiddleware, async (req, res) => {
    const { r2CheckAnswers, status } = req.body;

    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        application.r2CheckAnswers = r2CheckAnswers;
        application.status = status;
        await application.save();

        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
