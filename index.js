const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://cyj:Kk98719871%21@boiler-plate.db8fkse.mongodb.net/?appName=boiler-plate"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World 안녕하세요!");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
