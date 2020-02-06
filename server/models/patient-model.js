const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema(
  {
    mr: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    apptdate: { type: String, required: true },
    aadhar: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("patient", Patient);
