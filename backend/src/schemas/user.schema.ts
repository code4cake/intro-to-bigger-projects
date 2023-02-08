import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  deleted: { type: Boolean, default: false },
  status: { type: String, default: "new" },
  facebookID: String,
  facebookPSID: String,
  messengerID: String,
  firstname: String,
  name: String,
  gender: String,
  language: String,
  phone: String,
  email: String,
  street: String,
  number: String,
  bus: String,
  zipcode: String,
  city: String,
  country: String,
  created: { type: Date, default: Date.now },
  lastlogin: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  models: Array,
});

module.exports = mongoose.model("User", UserSchema);
