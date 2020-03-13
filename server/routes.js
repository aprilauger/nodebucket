/*
 *  Title: app.js
 *  Author: April Auger
 *  Date: 10 March 2020
 *  Description: The routes file for the nodebucket application.
 */

// Required Modules
const express = require('express');
const Employee = require('./models/employee');
const router = express.Router();
const sanitize = require('mongo-sanitize');

// Gets an employee document from the database
router.get('/api/employees/:empId', (req, res) => {
	// Check to see if empId is a number
	let numCheck = (isNaN(req.params.empId));

	let id = req.params.empId;

	// If the empId is null, respond with a 400 bad request status code
	if(numCheck) {
		res.status(400).send('The employee ID was invalid.');
	}
	else {
		// Sanitize the value
		id = sanitize(req.params.empId);

		// Get the employee record from the database
		Employee.findOne( { empId: id }, function(error, data) {
			// If the employee record does not exist, throw an error
			if(error) throw error;

			// Return a 200 OK status code response and the data in JSON
			res.status(200).send(data.toJSON());
		});
	}
});

//  Creates an employee document in the database
router.post('/api/employees/create', (req, res, next) => {
	const employee = new Employee({
		empId: req.body.empId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		phone: req.body.phone,
		department: req.body.department,
		position: req.body.position,
		role: 'employee',
		todo: [],
		done: []
	});

	// Save the document
	employee.save().then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));

	res.status(201).json({
		message: `${req.body.firstName} ${req.body.firstName} has been saved to the MongoDB database.`
	});
});

module.exports = router;