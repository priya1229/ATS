const isCoordinator = (req, res, next) => {
    if (req.user.role !== 'Coordinator') {
        return res.status(403).json({ error: 'Access denied' });
    }
    next();
};

module.exports = { isCoordinator };
