/*
 * Title:  item.js
 * Author: April Auger
 * Date:   9 March 2020
 * Description: The employee schema and model.
 */

// Required module
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

// Create the Employee Schema
const ItemSchema = new Schema({
	text: {type: String}
}, {
	collection: "employees"
});

// Make the model available for other modules to require
module.exports = ItemSchema;