// controllers/swapController.js
const { createSwap, getSwapsByUser } = require('../models/swapModel');

exports.requestSwap = async (req, res) => {
  try {
    const swap = await createSwap(req.user.id, req.body.item_id);
    res.status(201).json(swap);
  } catch (err) {
    res.status(500).json({ error: 'Swap request failed' });
  }
};

exports.getMySwaps = async (req, res) => {
  try {
    const swaps = await getSwapsByUser(req.user.id);
    res.json(swaps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get swaps' });
  }
};