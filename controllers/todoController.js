const Todo = require('../models/Todo');

// 1. GET all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 2. CREATE a todo
exports.createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// 3. UPDATE a todo
exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(404).json({ message: "Todo not found" });
    }
};

// 4. DELETE a todo
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Todo successfully deleted" });
    } catch (err) {
        res.status(404).json({ message: "Todo not found" });
    }
};
