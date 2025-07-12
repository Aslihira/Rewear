// middlewares/adminMiddleware.js
const { pool } = require('../config/db');

const adminMiddleware = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT is_admin FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];

    if (!user || !user.is_admin) {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    next();
  } catch (err) {
    res.status(500).json({ error: 'Admin check failed' });
  }
};

module.exports = adminMiddleware;
