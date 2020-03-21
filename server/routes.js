/*
 *  Title: routes.js
 *  Author: April Auger
 *  Date: 10 March 2020
 *  Description: The routes file for the nodebucket application.
 */

// Required Modules
const express = require('express');
const Employee = require('./models/employee');
const router = express.Router();
const sanitize = require('mongo-sanitize');

/*
 *  FindEmployeeById API
 *  Params: empID, callback function
 *  API to retrieve an employee record.
 */
router.get('/api/employees/:empId', (request, response) => {
	// Sanitize the parameter value.
	let id = sanitize(request.params.empId);

	// Check to see if the parameter value is a number
	let notValid = (isNaN(id));

	// If the parameter value is not a number, respond with a 400 status code.
	if(notValid == true) {
		return response.status(400).send('The request was not valid.');
	}
	else {
		// Find the document in the database.
		Employee.findOne({ 'empId': id }, 'firstName lastName address city state zip department position role', function(error, data) {
			// If there's an error, respond with a 500 status code.
			if (error) {
				response.status(500).send(error);
			// If the document is not found, respond with a message.
			} else if (!data) {
				response.status(404).send('The employee was not found.');
			// If the document is found, respond with json.
			} else {
				response.status(200).json(data);
			}
		});
	}
});


/*
 *  FindAllTasks API
 *  Params: empID, callback function
 *  API to retrieve all tasks.
 */
router.get('/api/employees/:empId/tasks', (request, response) => {
	// Sanitize the parameter value.
	let id = sanitize(request.params.empId);

	// Check to see if the parameter value is a number
	let notValid = (isNaN(id));

	// If the parameter values is not a number, respond with a 400 error.
	if(notValid == true) {
		response.status(400).json('The request was not valid.');
	}
	else {
		// Find the document in the database.
		Employee.findOne( { 'empId': id }, 'empId todo done', function(error, data) {
			// If there's an error, respond with a 500 status code.
			if (error) {
				response.status(500).send(error);
			// If the document is not found, respond with a message.
			} else if (!data) {
				response.status(404).send('The employee was not found.');
			// If the document is found, respond with json.
			} else {
				response.status(200).json(data);
			}
		});
	}
});

/*
 *  CreateTask API
 *  Params: empID, callback function
 *  API to create a task.
 */
router.post('/api/employees/:empId/tasks', function(request, response, next) {
	// Sanitize the parameter value.
	let id = sanitize(request.params.empId);

	// Check to see if the parameter value is a number
	let notValid = (isNaN(id));

	// If the parameter values is not a number, respond with a 400 error.
	if(notValid == true) {
		response.status(400).json('The request was not valid.');
	}
	// Create a new task.
	else {
		// Find the document in the database.
		Employee.findOne( { 'empId': id }, function(error, data) {
			// If there's an error, respond with a 500 status code.
			if (error) {
				response.status(500).send(error);
			} else {
				// Store the new task
				const item = {
					text: request.body.text
				};

				// Push the new item into the todo array.
				data.todo.push(item);

				// Save the new todo array to the database.
				data.save(function(err, data) {
					if (err) {
						response.status(500).json(error);
					} else {
						response.status(200).json(data);
					}
				});
			}
		});
	}
});


/*
 *  UpdateTask API
 *  Params: empID, callback function
 *  API to update a task.
 */
router.put('/api/employees/:empId/tasks/:taskId', function(request, response, next) {
	// Sanitize the parameter value.
	let id = sanitize(request.params.empId);

	// Check to see if the parameter value is a number
	let notValid = (isNaN(id));

	// If the parameter values is not a number, respond with a 400 error.
	if(notValid == true) {
		response.status(400).json('The request was not valid.');
	}
	// Update a task.
	else {
		// Find the document in the database.
		Employee.findOne( { 'empId': id }, 'empId todo done', function(error, data) {
			// If there's a server error, respond with a 500 error.
			if (error) {
				response.status(500).json(error);
			// Update a task.
			} else {
				// Set the new values for the todo and done arrays
				data.set({
					todo: request.body.todo,
					done: request.body.done
				});

				// Save the array in the database
				data.save(function(err, data) {
					if (err) {
						response.status(500).json(error);
					} else {
						response.status(200).json(data);
					}
				});
			}
		});
	}
});


/*
 *  DeleteTask API
 *  Params: empID, taskId, callback function
 *  API to delete a task
 */
router.delete('/api/employees/:empId/tasks/:taskId', function(request, response) {
	// Sanitize the parameter value.
	let id = sanitize(request.params.empId);

	// Check to see if the parameter value is a number
	let notValid = (isNaN(id));

	// If the parameter values is not a number, respond with a 400 error.
	if(notValid == true) {
		response.status(400).json('The request was not valid.');
	}
	// Delete a task.
	else {
		// Find the document in the database.
		Employee.findOne( { 'empId': id }, function(error, data) {
			// If the employee document does not exist, throw an error
			if (error) {
				response.status(500).json(error);
				// Delete a task.
			} else {
				const todoItem = data.todo.find(item => item._id.toString() === request.params.taskId);
				const doneItem = data.done.find(item => item._id.toString() === request.params.taskId);

				if(todoItem) {
					// Remove the task from the todo array
					data.todo.id(todoItem._id).remove();

					// Save the updated todo array
					data.save(function(err, todoTasks) {
						if(err) {
							response.status(500).json(error);
						} else {
							response.json(todoTasks);
						}
					});
				} else if (doneItem) {
					// Remove the task from the done array
					data.done.id(doneItem._id).remove();

					// Save the updated done array
					data.save(function(err, doneTasks) {
						if(err) {
							response.status(500).json(error);
						} else {
							response.json(doneTasks);
						}
					});
				} else {
					response.status(200).send({
						'type': 'warning',
						'text': 'Unable to locate ${request.params.taskId}'
					});
				}
			}
		});
	}
});

module.exports = router;