const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from header
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach user ID to request
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    return res.status(403).json({ msg: 'Invalid token' });
  }
};

module.exports = authMiddleware;