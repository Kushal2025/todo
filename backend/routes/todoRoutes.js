const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

// All todo routes require authentication
router.use(auth);

// GET /api/todos - Get all todos for authenticated user
router.get('/', todoController.getTodos);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Update a todo by ID
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
