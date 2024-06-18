const Job = require('../models/JobPost');

exports.createJob = async (req, res) => {
    try {
        const { title, location, salary, responsibilities, R1Questions } = req.body;

        const newJob = new Job({
            title,
            location,
            salary,
            responsibilities,
            R1Questions,
        });

        const job = await newJob.save();
        res.json(job);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
