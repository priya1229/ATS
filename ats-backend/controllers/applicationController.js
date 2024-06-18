const Application = require('../models/Application');
const Job = require('../models/JobPost');

exports.applyJob = async (req, res) => {
    const { jobId, r1Answers, resume } = req.body;

    try {
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }

        const application = new Application({
            jobId,
            userId: req.user.id,
            r1Answers,
            resume,
            r2Answers: job.r2Questions.map((q) => ({ question: q, answer: null })),
        });

        await application.save();
        res.json(application);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
