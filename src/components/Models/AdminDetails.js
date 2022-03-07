const mongoose = require("mongoose");

const AdminDetailsSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const AdminDetails = mongoose.model("AdminDetails", AdminDetailsSchema);

module.exports = AdminDetails;
