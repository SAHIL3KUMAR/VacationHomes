const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Import middleware for authentication

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUserInfo);

module.exports = router;