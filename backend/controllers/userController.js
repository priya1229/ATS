// backend/controllers/userController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(201).json({ token });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(200).json({ token });
};

module.exports = { register, login };
