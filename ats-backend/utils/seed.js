const mongoose = require('mongoose');
const User = require('../models/User');
const Job = require('../models/JobPost');
const Application = require('../models/Application');

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany();
        await Job.deleteMany();
        await Application.deleteMany();

        console.log('Database seeded!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seed();
