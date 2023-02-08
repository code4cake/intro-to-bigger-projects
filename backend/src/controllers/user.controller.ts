const mongoose = require("mongoose");

const UserSchema = require("../schemas/user.schema");

const getAllUsers = () =>
  new Promise((resolve, reject) => {
    UserSchema.find()
      .then((response: any) => {
        console.log(response);
        resolve(response);
      })
      .catch((error: unknown) => {
        reject(error);
      });
  });

module.exports = {
  getAllUsers,
};
