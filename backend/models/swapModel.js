
// models/swapModel.js
const { pool } = require('../config/db');

const createSwap = async (user_id, item_id) => {
  const res = await pool.query(
    'INSERT INTO swaps (user_id, item_id, status) VALUES ($1, $2, $3) RETURNING *',
    [user_id, item_id, 'pending']
  );
  return res.rows[0];
};

const getSwapsByUser = async (user_id) => {
  const res = await pool.query('SELECT * FROM swaps WHERE user_id = $1', [user_id]);
  return res.rows;
};

module.exports = { createSwap, getSwapsByUser };