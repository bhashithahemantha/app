
//app/models/bear.js
//  we'll just create a model and provide our bears 
// with a name field


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name:String
});

module.exports = mongoose.model('Bear',BearSchema);