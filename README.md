

## Overview
 Users can create, view, edit, mark as completed, and delete tasks using the provided API endpoints.

## Getting Started

1. **Installation**

   - Clone this repository:
     
     git clone https://github.com/kumarshivam01/node-todo


   - Install dependencies:

     npm install
     

2. **Configuration**

   - Configure your MongoDB connection by editing `.env file` and providing your MongoDB URI:
   - i am removing the mongoDB URI for Security Purpose.


3. **Starting the Server**

   - Start the Express server:

     ```bash
     npm start
     ```

   The server will run at `http://localhost:3000` by default,

## API Endpoints

- **Create a Task:**

  `POST /tasks`
    {
      "title": "Task Title",
      "description": "Task Description"
    }
   

- **View All Tasks:**

   `GET /tasks`

- **Mark a Task as Completed:**

  `PATCH /tasks/{taskId}`
  

- **Edit Task Details:**

  - **Endpoint:** `PUT /tasks/{taskId}`

    {
      "title": "Updated Task Title",
      "description": "Updated Task Description"
    }
  

- **Delete a Task:**

  `DELETE /tasks/{taskId}`
  

## Code Structure

- `app.js`: The main entry point of the application where Express is configured and routes are defined.
- `models/task.js`: Mongoose model definition for tasks, including validation rules.
- `config.js`: Configuration file for storing environment-specific settings, such as the MongoDB URI.
- `routes/tasks.js`: Express route definitions for creating, viewing, updating, marking as completed, and deleting tasks.


## Key Decisions

- We used Express.js for creating a RESTful API because it's a popular and lightweight framework for building web applications in Node.js.
- We used Mongoose  to interact with MongoDB, making it easy to define models and perform database operations.
- We used express-validator middleware for input validation, ensuring that tasks are created with valid titles and descriptions.


