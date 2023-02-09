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

const getById = (id: string) => {
  return new Promise((resolve, reject) => {
    UserSchema.findOne({ id: id }, (err: unknown, user: any) => {
      if (user === undefined || user === null) {
        reject();
      } else {
        resolve(user);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  getById,
};
