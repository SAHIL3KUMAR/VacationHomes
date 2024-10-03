const Property = require('../models/Property');

// Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new property
const createProperty = async (req, res) => {
  const { title, description, location, price, imageUrl } = req.body;
  try {
    const newProperty = new Property({ title, description, location, price, imageUrl });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllProperties, createProperty };