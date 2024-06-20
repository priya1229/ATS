// backend/controllers/applicationController.js
const Application = require('../models/Application');

exports.applyJob = async (req, res) => {
    const { jobId, resume, r1CheckFormResponses } = req.body;
    const application = new Application({ jobId, candidateId: req.user._id, resume, r1CheckFormResponses, status: 'submitted' });
    await application.save();
    res.status(201).send('Application submitted successfully');
};

exports.reviewApplication = async (req, res) => {
    const { applicationId, r2CheckFormResponses } = req.body;
    const application = await Application.findById(applicationId);
    application.r2CheckFormResponses = r2CheckFormResponses;
    application.status = 'reviewed';
    await application.save();
    res.status(200).send('Application reviewed successfully');
};
