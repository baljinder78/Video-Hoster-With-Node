const express = require('express');
const app = express();
const CORS=require("cors")
const port = 3000;
const mongoose = require('mongoose');
const userrouter=require("./Controller/usercontroller")
const postrouter=require("./Controller/Postcontroller")
const Bodyparser = require('body-parser');

app.use(Bodyparser.json());

app.use(CORS());

app.get('/', (req, res) => {
  res.send("h1");
});

app.use("/user",userrouter)

app.use("/post",postrouter)





mongoose.connect(
  'mongodb://localhost:27017/testingdb',
  { useNewUrlParser: true },
  () => console.log('yesssss')
);

app.listen(port, () => console.log(`Example app listening on port ` + port));
