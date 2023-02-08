import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

const userRouter = require("./routes/user.routes");

const app = express();

if (process.env.NODE_ENV == "production") {
  dotenv.config({
    path: path.join(__dirname, `../.env`),
  });
} else {
  dotenv.config({
    path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
  });
}

mongoose.connect(
  `${process.env.MONGO_URI}`,
  // { useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log("No mongo detected");
      throw err;
    }
  }
);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(process.env.PORT, () =>
  console.log(`app running on port ${process.env.PORT}`)
);

app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL],
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", userRouter);
