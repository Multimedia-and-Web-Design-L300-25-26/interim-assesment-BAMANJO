const Crypto = require('../models/Crypto');

// Get All Cryptos
exports.getAllCryptos = async (req, res) => {
  const cryptos = await Crypto.find();
  res.json(cryptos);
};

// Get Top Gainers
exports.getTopGainers = async (req, res) => {
  const gainers = await Crypto.find().sort({ change24h: -1 });
  res.json(gainers);
};

// Get New Listings
exports.getNewListings = async (req, res) => {
  const newListings = await Crypto.find().sort({ createdAt: -1 });
  res.json(newListings);
};

// Add New Crypto
exports.addCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h } = req.body;

  try {
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json(crypto);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};