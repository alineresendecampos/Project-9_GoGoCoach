let mongoose = require("mongoose");

//users schema
let usersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  speciality: {
    type: Array,
    dafault: [],
  },
  coachSince:{
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isCoach: {
    type:Boolean,
    required:false,
  },
});

let users = (module.exports = mongoose.model("users", usersSchema));
