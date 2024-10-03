const express = require('express');
const { getAllProperties, createProperty } = require('../controllers/propertyController');

const router = express.Router();

router.get('/', getAllProperties);
router.post('/', createProperty);

module.exports = router;