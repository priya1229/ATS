const express = require('express');
const router = express.Router();
const multer = require('multer');
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/apply/:jobId', authMiddleware, upload.single('resume'), applicationController.applyJob);
router.put('/review/:applicationId', authMiddleware, applicationController.reviewApplication);
router.get('/', authMiddleware, applicationController.getAllApplications);

module.exports = router;
