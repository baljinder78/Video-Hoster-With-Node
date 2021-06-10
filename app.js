const express = require('express');
const app = express();
const CORS=require("cors")
const port = 3000;
const mongoose = require('mongoose');
const userrouter=require("./Controller/usercontroller")
const Bodyparser = require('body-parser');

app.use(Bodyparser.json());

app.use(CORS());

app.get('/', (req, res) => {
  res.send("h1");
});

app.use("/user",userrouter)



// app.post('/post', (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     desc: req.body.desc,
//   });
//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });




mongoose.connect(
  'mongodb://localhost:27017/testingdb',
  { useNewUrlParser: true },
  () => console.log('yesssss')
);

app.listen(port, () => console.log(`Example app listening on port ` + port));
