const express = require('express');
const { applyJob, getApplications } = require('../controllers/applicationController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, applyJob);
router.get('/', auth, getApplications);

module.exports = router;
