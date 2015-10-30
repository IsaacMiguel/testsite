var Person = require('../models/persons');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testsite');

var p = new Person({name:"Migue", age:29 });
p.save(function(err, doc){
	console.log(err, doc);
});
