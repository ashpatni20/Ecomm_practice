const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/users")
const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    return console.log("Db connected");
  })
  .catch((err) => {
    return console.log("error", err);
  });

  app.use("/users", userRoutes)

const PORT = 8080;
app.listen(PORT, () => console.log("server connected"));
