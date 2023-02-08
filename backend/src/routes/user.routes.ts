import type { Request, Response, NextFunction } from "express";
import express from "express";

const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log("I am here in the route");
  UserController.getAllUsers()
    .then((response: []) => {
      console.log(response);
      console.log("I am here in the route 2");
      res
        .status(200)
        .send(JSON.stringify({ result: "ok", "All users": response }));
    })
    .catch((error: Error) => {
      res.status(200).send(JSON.stringify({ result: "nok", error }));
    });
});

module.exports = router;
