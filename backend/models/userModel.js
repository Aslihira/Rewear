// models/userModel.js
const { pool } = require('../config/db');

const createUser = async (full_name, email, hashedPassword) => {
  const res = await pool.query(
    'INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [full_name, email, hashedPassword]
  );
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT id, full_name, email FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

module.exports = { createUser, findUserByEmail, getUserById };
