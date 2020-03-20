/*
 * Title:  employee.js
 * Author: April Auger
 * Date:   9 March 2020
 * Description: The employee schema and model.
 */

// Required module
const mongoose = require('mongoose');
const item = require('./item');

// Define a schema
const Schema = mongoose.Schema;

// Create the Employee Schema
const EmployeeSchema = new Schema({
	empId: { type: String, required: true, unique: true, index: true, dropDups: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	address: { type: String },
	city: { type: String },
	state: { type: String, uppercase: true },
	zip: { type: String },
	department: { type: String },
	position: { type: String },
	role: { type: String, default: "employee" },
	todo: [item],
	done: [item]
}, {
	collection: "employees"
});

// Attach the EmployeeSchema to an Employee Model
const Employee = mongoose.model('Employee', EmployeeSchema);

// Make the model available for other modules to require
module.exports = Employee;