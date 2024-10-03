const express = require('express');
const { addFavoriteProperty, removeFavoriteProperty, getFavoriteProperties } = require('../controllers/favoriteController');

const router = express.Router();

// Route to add a property to user's favorites
router.post('/add', addFavoriteProperty);

// Route to remove a property from user's favorites
router.post('/remove', removeFavoriteProperty);

// Route to get user's favorite properties
router.get('/:userId', getFavoriteProperties);

module.exports = router;