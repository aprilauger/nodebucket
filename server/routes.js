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

// API to retrieve all employees
router.get('/api/employees', (req, res) => {
	// Get all documents from the database
	Employee.find({}, function(error, data) {
		if(error) throw error;

		// Render a response to the user
		res.json(data);
	});
});

// API to retrieve a single employee
router.get('/api/employees/:empId', (req, res) => {
	var id = sanitize(req.params.empId);

	// Get all documents from the database
	Employee.findOne( { empId: id }, function(error, data) {
		if(error) throw error;
		// Render a response to the user
		res.json(data);
	});
});

// API to create a new employee document in the database
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

	employee.save().then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));

	res.status(201).json({
		message: `${req.body.firstName} ${req.body.firstName} has been saved to the MongoDB database.`
	});
});

module.exports = router;