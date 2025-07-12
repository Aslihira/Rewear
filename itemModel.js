// models/itemModel.js
const { pool } = require('../config/db');

const createItem = async (item) => {
  const { user_id, title, description, category, type, size, condition, tags, image_url, points } = item;
  const res = await pool.query(
    'INSERT INTO items (user_id, title, description, category, type, size, condition, tags, image_url, points) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
    [user_id, title, description, category, type, size, condition, tags, image_url, points]
  );
  return res.rows[0];
};

const getAllItems = async () => {
  const res = await pool.query('SELECT * FROM items');
  return res.rows;
};

const getItemById = async (id) => {
  const res = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  return res.rows[0];
};

module.exports = { createItem, getAllItems, getItemById };
