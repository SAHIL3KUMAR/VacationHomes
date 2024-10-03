const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');

const router = express.Router();

// Route to get property recommendations for a specific user
router.get('/:userId', getRecommendations);

module.exports = router;
