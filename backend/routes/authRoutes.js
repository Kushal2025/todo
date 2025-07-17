const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// POST /api/auth/register - Register a new user
router.post('/register', authController.register);

// POST /api/auth/login - Login user
router.post('/login', authController.login);

// GET /api/auth/me - Get current user (protected route)
router.get('/me', auth, authController.getCurrentUser);

// PUT /api/auth/profile - Update user profile (protected route)
router.put('/profile', auth, authController.updateProfile);

module.exports = router;
