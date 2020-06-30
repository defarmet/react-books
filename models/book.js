const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book_schema = new Schema({
	title: {
		type: String,
		required: true
	},
	authors: {
		type: String,
		required: true
	},
	description: String,
	image: String,
	link: String
});

module.exports = mongoose.model("Book", book_schema);
