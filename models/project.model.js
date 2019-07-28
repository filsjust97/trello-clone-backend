const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    title: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Project', ProjectSchema);