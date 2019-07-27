const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CardSchema = new Schema({
    text: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Card', CardSchema);