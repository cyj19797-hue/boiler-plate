const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { User } = require("./models/User");

// application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://cyj:Kk98719871%21@boiler-plate.db8fkse.mongodb.net/?appName=boiler-plate"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World 안녕하세요! 새해 복 많이 받으세요");
});

app.post("/register", (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
