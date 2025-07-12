// controllers/itemController.js
const { createItem, getAllItems, getItemById } = require('../models/itemModel');

exports.addItem = async (req, res) => {
  try {
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await createItem({ ...req.body, user_id: req.user.id, image_url });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item' });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await getItemById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Item not found' });
  }
};
