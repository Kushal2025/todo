const Todo = require('../models/Todo');

// Get all todos for authenticated user
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.userId }).populate('user', 'name email');
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    user: req.user.userId
  });

  try {
    const newTodo = await todo.save();
    const populatedTodo = await Todo.findById(newTodo._id).populate('user', 'name email');
    res.status(201).json(populatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.userId });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    todo.priority = req.body.priority || todo.priority;

    const updatedTodo = await todo.save();
    const populatedTodo = await Todo.findById(updatedTodo._id).populate('user', 'name email');
    res.json(populatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.userId });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

