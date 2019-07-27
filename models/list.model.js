const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ListSchema = new Schema({
    title: {type: String, required: true, max: 100},
    cards: [{type: mongoose.Schema.Types.ObjectId, ref:'Card'}]
});


// Export the model
module.exports = mongoose.model('List', ListSchema);