const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const { check, validationResult } = require('express-validator');


// Create a new task
router.post('/tasks',[
    // Validation using express-validator
    check("title", "Title Should be at least 3 char").isLength({ min: 3 }),
    check("description", "Minimum length of Description is 10 Characters").isLength({ min: 10 }),
  ], taskController.createTask);

// get all tasks
router.get('/tasks', taskController.getAllTasks)

// mark as completed tasks
router.patch('/tasks/:id', taskController.updateTaskStatus)

// update tasks details
router.put('/tasks/:id',[
    // Validation using express-validator
    check("title", "Title Should be at least 3 char").isLength({ min: 3 }),
    check("description", "Minimum length of Description is 10 Characters").isLength({ min: 10 }),
  ], taskController.updateTaskDetails)

  // delete task
  router.delete('/tasks/:id', taskController.deleteTasks)

module.exports = router;
