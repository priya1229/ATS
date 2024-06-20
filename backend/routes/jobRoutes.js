// backend/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const jobController = require('../controllers/jobController');

// Create a new job
router.post('/', authMiddleware, jobController.createJob);

// Approve a job (update with R2 check form)
router.put('/:id', authMiddleware, jobController.approveJob);

// Post a job (mark as live)
router.post('/post', authMiddleware, jobController.postJob);

// Get all jobs
router.get('/', jobController.getAllJobs);

// Get a single job by ID
router.get('/:id', jobController.getJobById);

module.exports = router;
