const express = require('express');
const { getAllCryptos, getTopGainers, getNewListings, addCrypto } = require('../controllers/cryptoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', protect, addCrypto);

module.exports = router;