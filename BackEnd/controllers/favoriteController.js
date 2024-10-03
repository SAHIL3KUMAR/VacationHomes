const User = require('../models/User');
const Property = require('../models/Property');

// Add a property to user's favorites
const addFavoriteProperty = async (req, res) => {
  try {
    const { userId, propertyId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the property already exists in the favorites
    if (user.favorites.includes(propertyId)) {
      return res.status(400).json({ message: 'Property already in favorites' });
    }

    // Add property ID to the user's favorites
    user.favorites.push(propertyId);
    await user.save();

    res.status(200).json({ message: 'Property added to favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Remove a property from user's favorites
const removeFavoriteProperty = async (req, res) => {
  try {
    const { userId, propertyId } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove property ID from user's favorites
    user.favorites = user.favorites.filter((id) => id.toString() !== propertyId);
    await user.save();

    res.status(200).json({ message: 'Property removed from favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get user's favorite properties
const getFavoriteProperties = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user and populate favorite properties
    const user = await User.findById(userId).populate('favorites');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { addFavoriteProperty, removeFavoriteProperty, getFavoriteProperties };