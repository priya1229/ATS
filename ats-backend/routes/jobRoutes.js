const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createJob);
router.get('/', getJobs);

module.exports = router;
