var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//ObjectId = Schema.ObjectId;

var ConfigSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  createat:	{
	  type: Date,
	  required: true
  },
  firmware: String,
  location: String,
  description: String,
  uri: String,
  maker: String,
  activated: {
	  type: Boolean,
	  default: false
  },
  
  
});

var ThingSchema = new Schema({
  clientid: {
    type: String,
    required: true,
	unique: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  //},
  //config:	[ConfigSchema],
  //status:	[StatusSchema]
});

module.exports = mongoose.model('Thing', ThingSchema);
