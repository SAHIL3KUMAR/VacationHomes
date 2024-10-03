const Property = require('../models/Property');
const User = require('../models/User');

// Function to calculate similarity between properties
const calculateSimilarity = (property1, property2) => {
  // Compare basic features like location, price, and title similarity
  const locationSimilarity = property1.location === property2.location ? 1 : 0;
  const priceSimilarity = Math.abs(property1.price - property2.price) < 100 ? 1 : 0;
  const titleSimilarity = property1.title.toLowerCase().includes(property2.title.toLowerCase()) ? 1 : 0;

  // Weight the features and calculate overall similarity score (adjust weights as needed)
  const similarityScore = 0.5 * locationSimilarity + 0.3 * priceSimilarity + 0.2 * titleSimilarity;
  return similarityScore;
};

// Function to get recommended properties based on user's favorite properties
const getRecommendations = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user and populate their favorite properties
    const user = await User.findById(userId).populate('favorites');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get all properties in the database
    const allProperties = await Property.find();

    // For each favorite property, find the top 5 most similar properties
    let recommendedProperties = new Set();

    user.favorites.forEach((favorite) => {
      const similarProperties = allProperties
        .filter((property) => property._id.toString() !== favorite._id.toString()) // Exclude the favorite property itself
        .map((property) => ({
          property,
          similarityScore: calculateSimilarity(favorite, property),
        }))
        .sort((a, b) => b.similarityScore - a.similarityScore) // Sort by similarity score
        .slice(0, 5) // Get top 5 similar properties
        .map((item) => item.property); // Extract the property objects

      similarProperties.forEach((property) => recommendedProperties.add(property));
    });

    // Convert set to array and send the recommendations
    res.status(200).json({ recommendations: Array.from(recommendedProperties) });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getRecommendations };
