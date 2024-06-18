const Job = require('../models/JobPost');
const User = require('../models/User');

exports.getDashboardData = async (req, res) => {
    try {
        const jobs = await Job.find();
        const users = await User.find();
        res.json({ jobs, users });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
