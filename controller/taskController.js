const Task = require('../models/user');
const { validationResult } = require('express-validator');


// Create a new task
exports.createTask = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg
            });
        }

        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'An error occurred while save data on the Database.' });
    }
};


// Get all task
exports.getAllTasks = async (req, res) => {
    try {
        // Get all tasks from the database
        const tasks = await Task.find({});
        
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'An error occurred while fetching tasks.' });
    }
};

//  updating task status to completed
exports.updateTaskStatus = async (req, res) => {
    const taskId = req.params.id;
    try {

        // Find tasks
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found in DB' });
        }
        if (task.completed) {
            return res.status(404).json({ error: 'This Task is Already Marked' });
        }

        // update task status
        task.completed = true;
        await task.save();
        res.json(task);

    } catch (error) {
        res.status(400).json({ error: 'An error occurred while Updating tasks.' });
    }
}


//  updating task Details 
exports.updateTaskDetails = async (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    try {
        // Find tasks
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found in DB' });
        }
        if (task.completed) {
            return res.status(404).json({ error: 'This Task is Already Marked Completed, so you cannot edit details' });
        }

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg
            });
        }

        // Update task details
        task.title = title;
        task.description = description;
        await task.save();
        res.json(task);

    } catch (error) {
        res.status(400).json({ error: 'An error occurred while Updating tasks Details.' });
    }
}

// deleting tasks
exports.deleteTasks = async (req, res) => {
    const taskId = req.params.id;
    try {
        // Find tasks
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Delete the task from the database
        await task.deleteOne();
        res.json({ message: 'Task deleted successfully' });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'An error occurred while Deleting tasks.' });
    }
}
